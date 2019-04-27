const _ = require("underscore");
const data = require("../data/");

const charactersData = data.characters.map((character) => {
  return _.pick(
    character,
    "characterName",
    "houseName",
    "characterImageThumb",
    "characterImageFull",
    "actorName",
    "killed",
    "killedBy"
  );
});

// eslint-disable-next-line no-unused-vars
exports.seed = function(knex, Promise) {
  return knex("got_characters")
    .del()
    .then(() => {
      return knex("got_characters").insert([...charactersData]);
    });
};
