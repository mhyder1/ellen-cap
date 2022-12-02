
const knex = require("../db/connection");
const reservationsController = require("./reservations.controller");

function create(newReservation) {
    console.log("in the service", newReservation)
    return knex("reservations")
        .insert(newReservation)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
}


module.exports = {
    create,
}