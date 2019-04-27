exports.up = function(knex, Promise) {
  return knex.schema.createTable("got_characters", (table) => {
    table.increments().index();

    table
      .string("characterName", 50)
      .notNullable()
      .index();

    table.string("houseName", 30);

    table.string("characterImageThumb", 400);

    table.string("characterImageFull", 400);

    table.string("actorName", 50);

    table.string("killed", 400);

    table.string("killedBy", 1000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("got_characters");
};
