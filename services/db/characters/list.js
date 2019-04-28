module.exports = (knex, Character) => {
  return () => {
    return Promise.resolve(knex("got_characters").select()).then(
      (characters) => {
        return characters.map((character) => {
          return new Character(character);
        });
      }
    );
  };
};
