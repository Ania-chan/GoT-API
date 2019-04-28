module.exports = (knex, Character) => {
  return (params) => {
    const characterName = params.name;

    return knex("got_characters")
      .where({ characterName })
      .select()
      .then((characters) => {
        if (characters.length) return new Character(characters.pop());

        throw new Error(`Error finding user ${characterName}`);
      });
  };
};
