/* eslint-disable no-console */
const Promise = require("bluebird");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const config = require("../config");
const knex = require("knex")(config.db);
const db = require("../services/db")(config.db);

const forcePromiseReject = () => {
  throw new Error("This promise should have failed, but did not.");
};

describe("characters", () => {});
