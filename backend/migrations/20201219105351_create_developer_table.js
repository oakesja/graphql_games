exports.up = function (knex) {
  return knex.schema.createTable("developers", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("logoUrl").notNullable();
    table.timestamp("foundedDate").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("developers");
};
