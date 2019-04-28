const validateUsername = (name) =>
  typeof name === "string" && name.replace(" ", "").length > 2;

module.exports = (knex, Character) => {
  return (params) => {
    const characterName = params.newCharacter.characterName;
    const newCharacter = params.newCharacter;

    if (!validateUsername(characterName)) {
      return Promise.reject(
        new Error("Name must be provided, and be at least two characters")
      );
    }

    return knex("got_characters")
      .insert({
        characterName: newCharacter.characterName,
        houseName: newCharacter.houseName,
        characterImageThumb: newCharacter.characterImageThumb,
        characterImageFull: newCharacter.characterImageFull,
        actorName: newCharacter.actorName,
        killed: newCharacter.killed,
        killedBy: newCharacter.killedBy,
      })
      .then(() => {
        return knex("got_characters")
          .where({ characterName })
          .select();
      })
      .then((character) => new Character(character.pop()))
      .catch((err) => {
        if (err.message.match("duplicate key value"))
          throw new Error("That character already exists");
        throw err;
      });
  };
};
