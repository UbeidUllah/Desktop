const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose'); 

module.exports = {
    mongoose,
    connect: () => {
      mongoose.Promise = Promise;
      mongoose.connect(config.database[process.env.NODE_ENV]);
    },
    disconnect: done => {
      mongoose.disconnect(done);
    }
  };


describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});