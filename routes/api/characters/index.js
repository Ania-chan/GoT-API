const express = require("express");

const router = express.Router();

module.exports = (services) => {
  router.get("/api/characters", (req, res) =>
    services.db.characters
      .list()
      .then((characters) => res.status(200).json(characters))
      .catch((err) => res.status(400).send(err.message))
  );

  router.post("/api/characters", (req, res) => res.send({ name: "Jamie" }));

  router.get("/api/characters/:name", (req, res) => res.send("character page"));

  router.patch("/api/characters/:name", (req, res) => res.send("Patched"));

  router.delete("/api/characters/:id", (req, res) => res.send("deleted"));

  return router;
};
