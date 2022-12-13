const reservationsService = require("./reservations.service.js");
const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//validations below

function reservationExists(req, res, next) {
  console.log("lookign for", req.params.reservation_id);
  reservationsService
    .read(req.params.reservation_id)
    .then((reservation) => {
      if (reservation) {
        console.log("Got res", reservation);
        res.locals.reservation = reservation;
        return next();
      }
      next({ status: 404, message: `Reservation cannot be found.` });
    })
    .catch(next);
}

const hasRequiredProperties = hasProperties(
  "first_name",
  "last_name",
  "mobile_number",
  "reservation_date",
  "reservation_time",
  "people"
);

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

function validDate(req, res, next) {
  const date = new Date(req.body.data.reservation_date.replace("-", "/"));
  // testing if date is a date
  if (!(date instanceof Date) || isNaN(date)) {
    return next({
      status: 400,
      message: `Invalid field(s): reservation_date`,
    });
  }
  // date is not in the past
  const today = new Date();
  // need to pass the "toDateString()" to a new date object to remove the time
  if (new Date(date.toDateString()) < new Date(today.toDateString())) {
    return next({
      status: 400,
      message: `Invalid field(s): reservation_date must be in the future`,
    });
  }
  // date is not a tuesday
  if (date.getDay() == 2) {
    return next({
      status: 400,
      message: `Invalid field(s): change reservation_date. restaurant is closed on tuesdays. `,
    });
  }
  return next();
}

function validTime(req, res, next) {
  const isValid = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(
    req.body.data.reservation_time
  );
  if (isValid) {
    return next();
  }
  return next({
    status: 400,
    message: `Invalid field(s): reservation_time`,
  });
}
// reservation time must be between 1030 and 2130
function correctTime(req, res, next) {
  let time = req.body.data.reservation_time;
  time = time.replace(":", "");
  if (time < 1030) {
    return next({
      status: 400,
      message: `The restaurant opens at 10:30 AM`,
    });
  } else if (time > 2130) {
    return next({
      status: 400,
      message: `We do not accept reservations after 9:30 PM`,
    });
  }
  const currentTime = new Date();
  const dataTime = new Date(
    `${req.body.data.reservation_date.replace("-", "/")} ${
      req.body.data.reservation_time
    }`
  );
  if (dataTime.getTime() < currentTime.getTime()) {
    return next({
      status: 400,
      message: `Reservation must be in the future`,
    });
  }
  return next();
}

function hasPeople(req, res, next) {
  const people = Number(req.body.data.people);
  if (people >= 1) {
    return next();
  } else {
    return next({ status: 400, message: `Invalid field(s): people` });
  }
}

function peopleNumber(req, res, next) {
  // checks the type of the data coming through, because a string version of a number should fail (ie, "2" should fail)
  if (typeof req.body.data.people == "number") {
    return next({
      status: 400,
      message: `Invalid field(s): people amount must be a number.`,
    });
  }
  return next();
}

//validations above

async function create(req, res) {
  const newReservation = await reservationsService.create(req.body.data);
  res.status(201).json({
    data: newReservation,
  });
}

async function list(req, res) {
  // const reservationDate = req.query.date;
  const data = await reservationsService.list(req.query);
  res.json({ data });
}

async function update(req, res) {
  console.log("body", req.body.data);
  const updatedRes = {
    ...res.locals.reservation,
    reservation_status: req.body.data.status,
  };
  const reservation = await reservationsService.update(updatedRes);
  res.status(201).json({
    data: reservation,
  });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [
    hasOnlyValidProperties,
    hasRequiredProperties,
    hasPeople,
    peopleNumber,
    validDate,
    validTime,
    correctTime,
    asyncErrorBoundary(create),
  ],
  update: [reservationExists, update],
};
