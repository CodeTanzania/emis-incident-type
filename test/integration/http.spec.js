'use strict';

/* dependencies */
const path = require('path');
const request = require('supertest');
const { expect } = require('chai');
const {
  IncidentType,
  apiVersion,
  app
} = require(path.join(__dirname, '..', '..'));


describe('Incident Type', () => {

  describe('Rest API', () => {

    let incidenttype;

    before((done) => {
      IncidentType.deleteMany(done);
    });

    it('should handle HTTP POST on /incidenttypes', (done) => {

      incidenttype = IncidentType.fake();

      request(app)
        .post(`/v${apiVersion}/incidenttypes`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(incidenttype)
        .expect(201)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const created = response.body;

          expect(created._id).to.exist;
          expect(created.name).to.exist;

          done(error, response);

        });

    });

    it('should handle HTTP GET on /incidenttypes', (done) => {

      request(app)
        .get(`/v${apiVersion}/incidenttypes`)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          //assert payload
          const result = response.body;
          expect(result.data).to.exist;
          expect(result.total).to.exist;
          expect(result.limit).to.exist;
          expect(result.skip).to.exist;
          expect(result.page).to.exist;
          expect(result.pages).to.exist;
          expect(result.lastModified).to.exist;
          done(error, response);

        });

    });

    it('should handle HTTP GET on /incidenttypes/id:', (done) => {

      request(app)
        .get(`/v${apiVersion}/incidenttypes/${incidenttype._id}`)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const found = response.body;
          expect(found._id).to.exist;
          expect(found._id).to.be.equal(incidenttype._id.toString());
          expect(found.name).to.be.equal(incidenttype.name);

          done(error, response);

        });

    });

    it('should handle HTTP PATCH on /incidenttypes/id:', (done) => {

      const patch = incidenttype.fakeOnly('name');

      request(app)
        .patch(`/v${apiVersion}/incidenttypes/${incidenttype._id}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(patch)
        .expect(200)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const patched = response.body;

          expect(patched._id).to.exist;
          expect(patched._id).to.be.equal(incidenttype._id.toString());
          expect(patched.name).to.be.equal(incidenttype.name);

          done(error, response);

        });

    });

    it('should handle HTTP PUT on /incidenttypes/id:', (done) => {

      const put = incidenttype.fakeOnly('name');

      request(app)
        .put(`/v${apiVersion}/incidenttypes/${incidenttype._id}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(put)
        .expect(200)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const updated = response.body;

          expect(updated._id).to.exist;
          expect(updated._id).to.be.equal(incidenttype._id.toString());
          expect(updated.name).to.be.equal(incidenttype.name);

          done(error, response);

        });

    });

    it('should handle HTTP DELETE on /incidenttypes/:id', (done) => {

      request(app)
        .delete(`/v${apiVersion}/incidenttypes/${incidenttype._id}`)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const deleted = response.body;

          expect(deleted._id).to.exist;
          expect(deleted._id).to.be.equal(incidenttype._id.toString());
          expect(deleted.name).to.be.equal(incidenttype.name);

          done(error, response);

        });

    });

    after((done) => {
      IncidentType.deleteMany(done);
    });

  });

});
