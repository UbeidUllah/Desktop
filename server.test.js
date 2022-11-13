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
    const response = request(app).post("http://localhost:8000/User/add").send ({
      "Name": "Obaid",
      "Email": "obaid",
      "Age": 12,
      "Contact": 123
    })
        expect(response.statusCode).toBe(200);
  })
})

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    const response = request(app).delete("http://localhost:8000'/:id'").send ({
      "Name": "Obaid",
      "Email": "obaid",
      "Age": 12,
      "Contact": 123
    })
        expect(response.statusCode).toBe(200);
  })
})

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    const response = request(app).post("http://localhost:8000/User/add").send ({
      "Name": "Obaid"
    })
        expect(response.statusCode).toBe(400);
  })
})