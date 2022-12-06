
const knex = require("../db/connection");


async function create(newTable) {
    return await knex("tables")
        .insert(newTable)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
}

async function list() {
    return knex("tables")
    .select("*")
    .orderBy("table_name");
}


module.exports = {
    create,
    list,
}