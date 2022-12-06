
exports.up = function (knex) {
    return knex.schema.createTable("dining_tables", (table) => {
      table.increments("table_id").primary();
      table.string('table_name', 255);
      table.integer('capacity');
      table.timestamps(true, true);
    });
  };
  
exports.down = function (knex) {
  return knex.schema.dropTable("dining_tables");
};