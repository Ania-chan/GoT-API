module.exports = (knex, Character) => {
  return () => {
    return Promise.resolve(knex("got_characters").select()).then((response) => {
      return response.map((val) => {
        return new Character(val);
      });
    });
  };
};
