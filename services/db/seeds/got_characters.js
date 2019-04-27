const _ = require("underscore");
const data = require("../data/characters.json");

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

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("got_characters")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("got_characters").insert(charactersData);
    });
};
