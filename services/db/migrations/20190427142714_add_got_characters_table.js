exports.up = function(knex, Promise) {
  return knex.schema.createTable("got_characters", (table) => {
    table.increments().index();

    table
      .string("characterName", 50)
      .unique()
      .notNullable()
      .index();

    table.string("houseName", 30);

    table.string("characterImageThumb", 200);

    table.string("characterImageFull", 200);

    table.string("actorName", 50);

    table.string("killed", 200);

    table.string("killedBy", 1000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("got_characters");
};
