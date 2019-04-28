module.exports = (knex, Character) => {
  return (params) => {
    const characterName = params.characterName
      .toLowerCase()
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

    return knex("got_characters")
      .where({ characterName })
      .del()
      .then(() => {
        return `Deleted ${characterName}`;
      });
  };
};
