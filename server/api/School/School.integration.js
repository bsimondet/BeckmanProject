'use strict';

var app = require('../..');
import request from 'supertest';

var newSchool;

describe('School API:', function() {

  describe('GET /api/Schools', function() {
    var Schools;

    beforeEach(function(done) {
      request(app)
        .get('/api/Schools')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Schools = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      Schools.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/Schools', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/Schools')
        .send({
          name: 'New School',
          info: 'This is the brand new School!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSchool = res.body;
          done();
        });
    });

    it('should respond with the newly created School', function() {
      newSchool.name.should.equal('New School');
      newSchool.info.should.equal('This is the brand new School!!!');
    });

  });

  describe('GET /api/Schools/:id', function() {
    var School;

    beforeEach(function(done) {
      request(app)
        .get('/api/Schools/' + newSchool._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          School = res.body;
          done();
        });
    });

    afterEach(function() {
      School = {};
    });

    it('should respond with the requested School', function() {
      School.name.should.equal('New School');
      School.info.should.equal('This is the brand new School!!!');
    });

  });

  describe('PUT /api/Schools/:id', function() {
    var updatedSchool;

    beforeEach(function(done) {
      request(app)
        .put('/api/Schools/' + newSchool._id)
        .send({
          name: 'Updated School',
          info: 'This is the updated School!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSchool = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSchool = {};
    });

    it('should respond with the updated School', function() {
      updatedSchool.name.should.equal('Updated School');
      updatedSchool.info.should.equal('This is the updated School!!!');
    });

  });

  describe('DELETE /api/Schools/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/Schools/' + newSchool._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when School does not exist', function(done) {
      request(app)
        .delete('/api/Schools/' + newSchool._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
