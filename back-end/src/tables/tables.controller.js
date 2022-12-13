
const tablesService = require("./tables.service.js");
const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//validations below

const hasRequiredProperties = hasProperties("table_name", "capacity");

const VALID_PROPERTIES = [
    "table_name",
    "capacity",
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

function hasCapacity(req, res, next) {
    const capacity = Number(req.body.data.capacity)
    if (capacity > 0 ) {
        return next()
    } else {
      next({status: 400, message: "capacity must be at least 1 person"})
    }
}

function hasNameLength(req, res, next) {
  const name = req.body.data.table_name
  if (name.length > 1 ) {
      return next()
  } else {
    next({status: 400, message: "name must be at least 2 characters"})
  }
}

function tableOccupied(req, res, next) {
  if (res.locals.table.reservation_id) {
    return next();
  }
  next({ status: 400, message: `Table is not occupied.` });
}

function tableExists(req, res, next) {
  tablesService
  .read(req.params.table_id)
  .then((table) => {
      if (table) {
          res.locals.table = table;
          return next();
      }
      next({ status: 404, message: `Table cannot be found.` });
  })
  .catch(next);
}

//validations above

async function seatReservation(req, res, next) {
  const updatedTable = {
    ...req.body.data,
    table_id: res.locals.table.table_id,
  };
  const table = await tablesService.update(updatedTable);
  res.status(201).json({
    data: table,
  });
}


async function create(req, res) {
    const newTable = await tablesService.create(req.body.data);
    res.status(201).json({
      data: newTable,
    });
}

async function list(req, res) {
    const data = await tablesService.list();
    res.json({
        data,
    });
  }

async function destroy(req, res, next) {
  const updatedTableReservation = {
    ...res.locals.table,
    reservation_id: null,
  };
  const data = await tablesService.destroy(updatedTableReservation);
  res.json({
      data,
  });
}


module.exports = {
    create: [hasOnlyValidProperties, hasRequiredProperties, hasCapacity, hasNameLength, asyncErrorBoundary(create)],
    list: asyncErrorBoundary(list),
    update: [tableExists, seatReservation],
    destroy: [tableExists, tableOccupied, destroy],
};