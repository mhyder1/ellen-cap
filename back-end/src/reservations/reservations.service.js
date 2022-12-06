
const knex = require("../db/connection");

async function create(newReservation) {
  return await knex("reservations")
    .insert(newReservation)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

async function list(reservationDate) {
  return await knex("reservations")
  .select("*")
  .where({ reservation_date: reservationDate })
  .orderBy("reservation_time");
}

module.exports = {
    create,
    list,
}