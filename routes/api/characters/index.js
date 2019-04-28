const express = require("express");

const router = express.Router();

module.exports = (services) => {
  router.post("/", (req, res) => {
    services.db.characters
      .create({ characterName: req.query.name })
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
      .then((characters) => res.status(200).json(characters.slice(0, limit)))
      .catch((err) => res.status(400).send(err.message));
  });

  router.get("/:name", (req, res) => {
    services.db.characters
      .get({ characterName: req.params.name })
      .then((character) => res.status(200).json(character))
      .catch((err) => res.status(400).send(err.message));
  });

  router.patch("/:name", (req, res) => {
    services.db.characters
      .patch({
        characterName: req.params.name,
        query: req.query,
      })
      .then((character) => res.status(200).json(character))
      .catch((err) => res.status(400).send(err.message));
  });

  router.delete("/:name", (req, res) => {
    services.db.characters
      .delete({ characterName: req.params.name })
      .then((character) => res.status(200).json(character))
      .catch((err) => res.status(400).send(err.message));
  });

  return router;
};
