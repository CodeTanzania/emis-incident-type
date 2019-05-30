'use strict';


/* dependencies */
const request = require('supertest');
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { IncidentType, apiVersion, app } = include(__dirname, '..', '..');


describe('IncidentType Rest API', function () {

  before(done => clear(done));

  let incidenttype = IncidentType.fake();

  it('should handle HTTP POST on /incidenttypes', (done) => {
    request(app)
      .post(`/${apiVersion}/incidenttypes`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(incidenttype)
      .expect(201)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const created = new IncidentType(response.body);

        expect(created._id).to.exist;
        expect(created._id).to.be.eql(incidenttype._id);
        expect(created.name).to.exist;

        //set
        incidenttype = created;

        done(error, response);
      });
  });

  it('should handle HTTP GET on /incidenttypes', (done) => {
    request(app)
      .get(`/${apiVersion}/incidenttypes`)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((error, response) => {
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
      .get(`/${apiVersion}/incidenttypes/${incidenttype._id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const found = new IncidentType(response.body);

        expect(found._id).to.exist;
        expect(found._id).to.be.eql(incidenttype._id);
        expect(found.name).to.be.equal(incidenttype.name);

        done(error, response);
      });
  });

  it('should handle HTTP PATCH on /incidenttypes/id:', (done) => {
    const { name } = incidenttype.fakeOnly('name');
    request(app)
      .patch(`/${apiVersion}/incidenttypes/${incidenttype._id}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({ name })
      .expect(200)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const patched = new IncidentType(response.body);

        expect(patched._id).to.exist;
        expect(patched._id).to.be.eql(incidenttype._id);
        expect(patched.name).to.be.equal(incidenttype.name);

        //set
        incidenttype = patched;

        done(error, response);
      });
  });

  it('should handle HTTP PUT on /incidenttypes/id:', (done) => {
    const { name } = incidenttype.fakeOnly('name');
    request(app)
      .put(`/${apiVersion}/incidenttypes/${incidenttype._id}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({ name })
      .expect(200)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const updated = new IncidentType(response.body);

        expect(updated._id).to.exist;
        expect(updated._id).to.be.eql(incidenttype._id);
        expect(updated.name).to.be.equal(incidenttype.name);

        //set
        incidenttype = updated;

        done(error, response);
      });
  });

  it('should handle HTTP DELETE on /incidenttypes/:id', (done) => {
    request(app)
      .delete(`/${apiVersion}/incidenttypes/${incidenttype._id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const deleted = new IncidentType(response.body);

        expect(deleted._id).to.exist;
        expect(deleted._id).to.be.eql(incidenttype._id);
        expect(deleted.name).to.be.equal(incidenttype.name);
        done(error, response);
      });
  });

  after(done => clear(done));

});
