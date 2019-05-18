/* eslint-disable no-console */
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const sinon = require("sinon");
const config = require("../config");
const db = require("../services/db")(config.db);
const app = require("../routes/api/index");

describe("GoT API", () => {
  let request;
  let fakeCreate;
  let fakeList;
  let fakePatch;
  let fakeGet;
  let fakeDelete;
  let database;
  let JSONdata;
  beforeEach(() => {
    //setup
    request = chai.request(app).keepOpen();
    database = [
      {
        characterName: "Mia",
        houseName: "Targaryen",
        characterImageThumb: "https://m/imageThumb.jpg",
        characterImageFull: "https://m/imageFull.jpg",
        actorName: null,
        killed: ["Dragon"],
        killedBy: null,
      },
    ];

    JSONdata = JSON.stringify(database);

    fakeCreate = sinon.stub(db.characters, "create").returns((characterObj) => {
      database.push(characterObj);
      return database[database.length - 1];
    });
    fakeList = sinon.stub(db.characters, "list").returns(() => {
      return database;
    });
    fakePatch = sinon.stub(db.characters, "patch").returns((name, newName) => {
      const characterToPatch = database.filter(
        (characterObj) => characterObj.characterName === name
      );
      characterToPatch.characterName = newName;
      return `Changed ${name} to ${newName}`;
    });
    fakeGet = sinon.stub(db.characters, "get").returns((character) => {
      return database.filter(
        (characterObj) => character.characterName === characterObj.characterName
      );
    });
    fakeDelete = sinon.stub(db.characters, "delete").returns((name) => {
      return database.filter((character, i) => {
        if (character.characterName === name) {
          database.splice(i, 1);
          return `Deleted ${name}`;
        }
      });
    });
  });
  afterEach(() => {
    //teardown
    fakeCreate.restore();
    fakeList.restore();
    fakePatch.restore();
    fakeGet.restore();
    fakeDelete.restore();
    request.close();
  });
  describe("GET /api/characters", () => {
    it("should return list of characters", async () => {
      const res = await request.get("/api/characters").query({ limit: 2 });
      JSON.parse(res.text).length.to.deep.equal(2);
    });
  });
  describe("POST /api/characters", () => {
    it("should add a new character by name", async () => {
      const res = await request.post("/api/characters").send(JSONdata);
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
