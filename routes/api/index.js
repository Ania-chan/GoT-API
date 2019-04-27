const express = require("express");

const router = express.Router();

const characterRouter = require("./characters");

module.exports = (services) => {
  router.use("/characters", characterRouter(services));

  return router;
};
