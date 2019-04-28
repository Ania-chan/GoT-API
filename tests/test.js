/* eslint-disable no-console */
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const sinon = require("sinon");
const config = require("../config");
const db = require("../services/db")(config.db);
const knex = require("knex")(config.db);
const app = require("../routes/api/index");

describe("GoT API", () => {
  let request;
  let JSONdata;
  let fakeKnex;
  let database;
  beforeEach(() => {
    //setup
    request = chai.request(app).keepOpen();
    database = [
      {
        characterName: "Cersei_Lannister",
        houseName: "Targaryen",
        characterImageThumb: "https://m/imageThumb.jpg",
        characterImageFull: "https://m/imageFull.jpg",
        actorName: "David Rintoul",
        killed: ["Brandon Stark", "Rickard Stark"],
        killedBy: ["Jaime Lannister"],
      },
    ];

    JSONdata = JSON.stringify(database);
  });
  afterEach(() => {
    //teardown
    request.close();
    //fakeKnex.restore();
  });
  describe("GET /api/characters", () => {
    it("should return list of characters", async () => {
      const res = await request.get("/api/characters").query({ limit: 2 });
      JSON.parse(res.text).length.to.deep.equal(2);
    });
  });
  describe("POST /api/characters", () => {
    it("should add a new character by name", async () => {
      const res = await request.post("/api/characters").send(database[0]);
      const allCharacters = await request.get("/api/characters");
      result[result.length - 1].should.deep.equal(database[0]);
    });
  });
  describe("GET /api/characters/:name", () => {
    it("should return a character page", async () => {
      const res = await request.get("/api/pokemon/Cersei_Lannister");
      res.should.be.json;
      JSON.parse(res.text).should.not.be.undefined;
      JSON.parse(res.text).should.deep.equal(database[0]);
    });
  });
  describe("PATCH /api/characters/:name", () => {
    it("should allow to change character's name", async () => {
      const res = await request
        .patch("/api/pokemon/Cersei_Lannister")
        .query({ name: "test" });
      res.should.be.json;
      JSON.parse(res.text).should.not.be.undefined;
      JSON.parse(res.text.name).should.equal("test");
    });
  });
  describe("DELETE /api/characters/:name", () => {
    it("should delete a character", async () => {
      const res = await request.delete("/api/pokemon/Cersei_Lannister");
      const expected = await request.get("/api/pokemon/Cersei_Lannister");
      JSON.parse(expected.text).should.be.undefined;
    });
  });
});
