const axios = require("axios");
const chai = require("chai");

describe("Sending post request", function () {
  let response;
});

before(async () => {
    response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
        userId: 1,
    });
});

it("201 Created response should be returned", async () => {
  chai.expect(response.status).to.be.equal(201);
  chai.expect(response.statusText).to.be.equal("Created");
});

it("the content-type header exists in the obtained response", async () => {
  chai.expect(response.headers["content-type"]).to.exist;
});

it("the value of the content-type header is application/json; charset=utf-8", async () => {
  chai.expect(response.headers["content-type"]).to.be.equal("application/json; charset=utf-8");
});

it("the content of the response body is the array of 10 users", async () => {
  chai.expect(response.data.title).to.be.equal("foo");
    chai.expect(response.data.body).to.be.equal("bar");
    chai.expect(response.data.userId).to.be.equal(1);
    chai.expect(response.data.id).to.exist;
});