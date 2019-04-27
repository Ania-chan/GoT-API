module.exports = (knex, Character) => {
  return (params) => {
    const character = params.name;

    return knex("got_characters")
      .where({ name: character })
      .select()
      .then((characters) => {
        if (characters.length) return new Character(characters.pop());

        throw new Error(`Error finding user ${character}`);
      });
  };
};
