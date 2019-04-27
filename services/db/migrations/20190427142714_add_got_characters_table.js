exports.up = function(knex, Promise) {
  return knex.schema.createTable("got_characters", (table) => {
    table.increments().index();

    table
      .string("username", 15)
      .unique()
      .notNullable()
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("got_characters");
};
