const _ = require("underscore");
const data = require("../data/");

const charactersData = data.characters.map((character) => {
  return _.pick(
    character,
    "characterName",
    "houseName",
    "characterImageThumb",
    "characterImageFull",
    "actorName",
    "killed",
    "killedBy"
  );
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("got_characters")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("got_characters").insert([
        {
          characterName: "Zanrush",
          houseName: "test",
          characterImageThumb:
            "https://images-na.ssl-images-amazon.coXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg",
          characterImageFull:
            "https://images-na.ssl-images-amazon.com/imEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
          actorName: "Gerald Lepkowski",
          killed: ["/name/nm0503319/"],
          killedBy: ["/name/nm0503319/"],
        },
        {
          characterName: "Aegon Targaryen",
          houseName: "Targaryen",
          characterImageThumb:
            "https://images-na.ssl-images-amazon.coXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg",
          characterImageFull:
            "https://images-na.ssl-images-amazon.com/imEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
          actorName: "Gerald Lepkowski",
          killed: ["/name/nm0503319/"],
          killedBy: ["Gregor Clegane"],
        },
        {
          characterName: "Jofrey",
          houseName: "Targaryen",
          characterImageThumb:
            "https://images-na.ssl-images-amazon.coXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg",
          characterImageFull:
            "https://images-na.ssl-images-amazon.com/imEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
          actorName: "Gerald Lepkowski",
          killed: ["/name/nm0503319/"],
          killedBy: ["Gregor Clegane"],
        },
        {
          characterName: "Ned Stark",
          houseName: "Targaryen",
          characterImageThumb:
            "https://images-na.ssl-images-amazon.coXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg",
          characterImageFull:
            "https://images-na.ssl-images-amazon.com/imEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
          actorName: "Gerald Lepkowski",
          killed: ["/name/nm0503319/"],
          killedBy: ["Gregor Clegane"],
        },
        {
          characterName: "Daenerys",
          houseName: "Targaryen",
          characterImageThumb:
            "https://images-na.ssl-images-amazon.coXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg",
          characterImageFull:
            "https://images-na.ssl-images-amazon.com/imEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
          actorName: "Gerald Lepkowski",
          killed: ["/name/nm0503319/"],
          killedBy: ["Gregor Clegane"],
        },
        {
          characterName: "John Snow",
          houseName: "Targaryen",
          characterImageThumb:
            "https://images-na.ssl-images-amazon.coXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg",
          characterImageFull:
            "https://images-na.ssl-images-amazon.com/imEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
          actorName: "Gerald Lepkowski",
          killed: ["/name/nm0503319/"],
          killedBy: ["Gregor Clegane"],
        },
      ]);
    });
};
