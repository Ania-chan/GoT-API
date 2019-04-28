module.exports = (knex, Character) => {
  return (params) => {
    const characterName = params.characterName
      .toLowerCase()
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

    return knex("got_characters")
      .where({ characterName })
      .select()
      .then((characters) => {
        if (characters.length) return new Character(characters.pop());

        throw new Error(`Error finding ${characterName}`);
      });
  };
};
