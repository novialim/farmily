const request = require('supertest');
const expect = require('expect');

var app = require('../server').app;

it('Homepage should return a 200', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .end(done);
});

it('Explore should return a 200', (done) => {
    request(app)
        .get('/explore')
        .expect(200)
        .end(done);
});

it('addFarmer should return a JSON response', (done) => {
    request(app)
        .post('/api/addfarmer')
        .expect({"success":1})
        .end(done);
});