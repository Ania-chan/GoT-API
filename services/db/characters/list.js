module.exports = (knex, Character) => {
  return () => {
    return Promise.resolve(knex("got_characters").select()).then((response) => {
      console.log(response);
      return response.map((val) => {
        console.log(val);
        return new Character(val);
      });
    });
  };
};
