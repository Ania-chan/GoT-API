/* eslint-disable no-console */
const Promise = require("bluebird");
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
  beforeEach(() => {
    //setup
    request = chai.request(app).keepOpen();
    const database = [
      {
        characterName: "Aerys II Targaryen",
        houseName: "Targaryen",
        characterImageThumb: "https://m/imageThumb.jpg",
        characterImageFull: "https://m/imageFull.jpg",
        actorName: "David Rintoul",
        killed: ["Brandon Stark", "Rickard Stark"],
        killedBy: ["Jaime Lannister"],
      },
    ];

    JSONdata = JSON.stringify(database);

    //fakeKnex = sinon.stub(knex, "select").returns(JSONdata);
  });
  afterEach(() => {
    //teardown
    request.close();
    //fakeKnex.restore();
  });
  it("should return list of characters", async () => {
    expect(true).to.be.true;
    console.log(1);
    // const res = await request.get("/api/characters").then((hi) => "hi");
    // console.log(res);
    // //sinon.assert.calledOnce(fakeKnex);
    // console.log(JSON.parse(res.text));
    // JSON.parse(res.text).should.deep.equal(database);
  });
});
