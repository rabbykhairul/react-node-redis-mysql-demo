const { COUNTRIES } = require("../tableNames");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(COUNTRIES, (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("about", 300);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(COUNTRIES);
};
