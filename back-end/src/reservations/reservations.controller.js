
const reservationsService = require("./reservations.service.js");
const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const hasRequiredProperties = hasProperties("first_name", "last_name", "mobile_number", "reservation_date", "reservation_time", "people");

const VALID_PROPERTIES = [
  "first_name",
  "last_name",
  "mobile_number",
  "reservation_date",
  "reservation_time",
  "people",
];

function hasOnlyValidProperties(req, res, next) {
  const { data = {} } = req.body;

  const invalidFields = Object.keys(data).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );

  if (invalidFields.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  }
  next();
}

function hasPeople(req, res, next) {
  const people = Number(req.body.data.people)
  if (people >= 1) {
     return next()
  }
  next({status: 400, message: "Number of people in party must be more than 1."})
}


async function create(req, res) {
  const newReservation = await reservationsService.create(req.body.data);
  res.status(201).json({
    data: newReservation,
  });
}

async function list(req, res) {
  const reservationDate = req.query.date;
  const data = await reservationsService.list(reservationDate);
  res.json({
    data,
  });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [hasOnlyValidProperties, hasRequiredProperties, hasPeople, asyncErrorBoundary(create)],
};
