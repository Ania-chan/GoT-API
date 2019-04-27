const Character = function(dbCharacter) {
  this.id = dbCharacter.id;
  this.name = dbCharacter.characterName;
};

module.exports = (knex) => {
  return {
    create: require("./create")(knex, Character),
    list: require("./list")(knex, Character),
    get: require("./get")(knex, Character),
  };
};
