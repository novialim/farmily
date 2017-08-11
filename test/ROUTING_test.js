const request = require('supertest');
const expect = require('expect');

var app = require('../server').app;

describe('Routes', ()=>{
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

    it('Aboutus should return a 200', (done) => {
        request(app)
            .get('/aboutus')
            .expect(302)
            .end(done);
    });

    it('contribute should return a 200', (done) => {
        request(app)
            .get('/contribute')
            .expect(200)
            .end(done);
    });

    it('write should return a 200', (done) => {
        request(app)
            .get('/write')
            .expect(200)
            .end(done);
    });

    it('farmer should return a 200', (done) => {
        request(app)
            .get('/farmer')
            .expect(200)
            .end(done);
    });

    it('addfarmer should return a 200', (done) => {
        request(app)
            .get('/addfarmer')
            .expect(200)
            .end(done);
    });

    it('review should return a 200', (done) => {
        request(app)
            .get('/review')
            .expect(200)
            .end(done);
    });



    it('contribute should return a 200', (done) => {
        request(app)
            .get('/contribute')
            .expect(200)
            .end(done);
    });


    it('market should return a 400', (done) => {
        request(app)
            .get('/market')
            .expect(400)
            .end(done);
    });
})

