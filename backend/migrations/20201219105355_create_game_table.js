exports.up = function (knex) {
  return knex.schema.createTable("games", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("coverArtUrl").notNullable();
    table.integer("developerId").unsigned().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("games");
};
