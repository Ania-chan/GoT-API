module.exports = (knex, Character) => {
  return (params) => {
    const characterName = params.characterName
      .toLowerCase()
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    const query = params.query
      .toLowerCase()
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

    console.log("name: ", characterName);
    console.log("query ", query);

    return knex("got_characters")
      .where({ characterName })
      .update({ characterName: query })
      .then(() => {
        return `Changed ${characterName} to ${query}`;
      });
  };
};
