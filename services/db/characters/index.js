const Character = function(dbCharacter) {
  this.id = dbCharacter.id;
  this.characterName = dbCharacter.characterName;
  this.houseName = dbCharacter.houseName;
  this.characterImageThumb = dbCharacter.characterImageThumb;
  this.characterImageFull = dbCharacter.characterImageFull;
  this.actorName = dbCharacter.actorName;
  this.killed = dbCharacter.killed;
  this.killedBy = dbCharacter.killedBy;
};

module.exports = (knex) => {
  return {
    create: require("./create")(knex, Character),
    list: require("./list")(knex, Character),
    get: require("./get")(knex, Character),
    patch: require("./patch")(knex, Character),
    delete: require("./delete")(knex, Character),
  };
};
