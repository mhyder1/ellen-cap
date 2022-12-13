const knex = require("../db/connection");

async function create(newReservation) {
  return await knex("reservations")
    .insert(newReservation)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

async function list(queryParams) {
  return await knex("reservations")
    .select("*")
    .where(queryParams)
    .orderBy("reservation_time");
}

async function read(reservation_id) {
  return knex("reservations").select("*").where({ reservation_id }).first();
}

async function update(updateReservation) {
  console.log("in here", updateReservation);
  return await knex("reservations")
    .select("*")
    .where({ reservation_id: updateReservation.reservation_id })
    .update(updateReservation, "*");
}

module.exports = {
  create,
  list,
  read,
  update,
};
