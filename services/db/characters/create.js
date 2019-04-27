const validateUsername = (name) =>
  typeof name === "string" && name.replace(" ", "").length > 2;

module.exports = (knex, Character) => {
  return (params) => {
    const name = params.name;

    if (!validateUsername(name)) {
      return Promise.reject(
        new Error("Username must be provided, and be at least two characters")
      );
    }

    return knex("got_characters")
      .insert({ name })
      .then(() => {
        return knex("got_characters")
          .where({ name })
          .select();
      })
      .then((character) => new Character(character.pop()))
      .catch((err) => {
        if (err.message.match("duplicate key value"))
          throw new Error("That username already exists");
        throw err;
      });
  };
};
