const request = require('supertest');
const expect = require('expect');

var app = require('../server').app;

it('Homepage should return a 200', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .end(done);
});