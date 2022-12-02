
const knex = require("../db/connection");

function create(newReservation) {
    return knex("reservations")
        .insert(newReservation)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
}

async function list(reservationDate) {
  return knex("reservations")
  .select("*")
  .where("reservation_date", reservationDate);
}

module.exports = {
    create,
    list,
}