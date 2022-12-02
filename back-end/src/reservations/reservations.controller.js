/**
 * List handler for reservation resources
 */

const reservationsService = require("./reservations.service.js");
const hasProperties = require("../errors/hasProperties");

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
  console.log("in the controller")
  console.log("body", req.body)
  const newReservation = await reservationsService.create(req.body.data);
  res.status(201).json({
    data: newReservation,
  });
}

async function list(req, res) {
  res.json({
    data: [],
  });
}

module.exports = {
  list,
  create: [hasOnlyValidProperties, hasRequiredProperties, hasPeople, create],
};
