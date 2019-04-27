/* eslint-disable no-console */
const Promise = require("bluebird");
const { expect } = require("chai");
const config = require("../config");
const knex = require("knex")(config.db);
const db = require("../services/db")(config.db);
