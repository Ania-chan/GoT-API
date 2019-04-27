const express = require("express");

const router = express.Router();

module.exports = (services) => {
  router.get("/api/character", (req, res) =>
    services.db.characters
      .list()
      .then((characters) => res.status(200).json(characters))
      .catch((err) => res.status(400).send(err.message))
  );

  router.get("/", (req, res) => {
    res.send("Hello");
  });
  return router;
};
