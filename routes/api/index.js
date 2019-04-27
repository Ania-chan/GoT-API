const express = require("express");

const router = express.Router();

const characterRouter = require("./character");

module.exports = (services) => {
  router.use("/character", characterRouter(services));

  return router;
};
