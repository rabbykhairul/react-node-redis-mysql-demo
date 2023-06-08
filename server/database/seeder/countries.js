const { COUNTRIES } = require("../tableNames");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(COUNTRIES).del();
  await knex(COUNTRIES).insert([
    { id: 1, name: "Bangladesh", about: "Bangladesh is a beautiful country." },
    { id: 2, name: "Thailand", about: "Thailand is a tourist country." },
    { id: 3, name: "Nepal", about: "Mount everest." },
    ,
  ]);
};
