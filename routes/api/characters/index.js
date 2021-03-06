const express = require("express");

const router = express.Router();

module.exports = (services) => {
  router.post("/", (req, res) => {
    const newCharacter = req.body;
    services.db.characters
      .create({ newCharacter })
      .then((character) => res.status(201).json(character))
      .catch((err) => {
        if (err.message === "That character already exists") {
          return services.db.characters
            .get({ characterName: req.body.name })
            .then((character) => res.status(200).json(character));
        }

        return res.status(400).send(err.message);
      });
  });

  router.get("/", (req, res) => {
    const limit = req.query.limit;
    services.db.characters
      .list()
      .then((characters) => {
        characters = characters.slice(0, limit);
        res.status(200).render("characters/list", { characters });
      })
      .catch((err) => res.status(400).send(err.message));
  });

  router.get("/:name", (req, res) => {
    services.db.characters
      .get({ characterName: req.params.name })
      .then((character) =>
        res.status(200).render("characters/show", { character })
      )
      .catch((err) => res.status(400).send(err.message));
  });

  router.patch("/:name", (req, res) => {
    services.db.characters
      .patch({
        characterName: req.params.name,
        query: req.query.name,
      })
      .then((message) => res.status(200).json(message))
      .catch((err) => res.status(400).send(err.message));
  });

  router.delete("/:name", (req, res) => {
    services.db.characters
      .delete({ characterName: req.params.name })
      .then((message) => res.status(200).json(message))
      .catch((err) => res.status(400).send(err.message));
  });

  return router;
};
