const axios = require("axios");
const chai  = require("chai");
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

describe("Sending get request", function () {
    let response;

    before(async () => {
      response = await axios.get("https://jsonplaceholder.typicode.com/users");
    });

    it("200 OK response should be returned", async () => {
      chai.expect(response.status).to.be.equal(200);
      chai.expect(response.statusText).to.be.equal("OK");
    });

    it("the content-type header exists in the obtained response", async () => {
      chai.expect(response.headers["content-type"]).to.exist;
    });

    it("the value of the content-type header is application/json; charset=utf-8", async () => {
      chai.expect(response.headers["content-type"]).to.be.equal("application/json; charset=utf-8");
    });

    it("the content of the response body is the array of 10 users", async () => {
      chai.expect(response.data).to.be.array();
      chai.expect(response.data).to.be.ofSize(10);
    });
});
