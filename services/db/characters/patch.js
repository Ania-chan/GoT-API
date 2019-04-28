module.exports = (knex, Character) => {
  return (params) => {
    const characterName = params.characterName
      .toLowerCase()
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    const query = params.query;

    return knex("got_characters")
      .where({ characterName })
      .select()
      .then((characters) => {
        if (characters.length) return new Character(characters.pop());

        throw new Error(`Error finding user ${characterName}`);
      })
      .then((character) => {
        for (const key in query) {
          character[key] = query[key];
        }
        return knex
          .where({ id: character.id })
          .update({ characterName: character.characterName });
      })
      .then((character) => {
        return new Character(character);
      });
  };
};
