'use strict';

/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));

describe('IncidentType', function () {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  describe('static patch', function () {

    let incidentype;

    before((done) => {
      incidentype = IncidentType.fake();
      incidentype.post(function (error, created) {
        incidentype = created;
        done(error, created);
      });
    });

    it('should be able to patch', (done) => {
      incidentype = incidentype.fakeOnly('name');
      IncidentType
        .patch(incidentype._id, incidentype, (error, updated) => {
          expect(error).to.not.exist;
          expect(updated).to.exist;
          expect(updated._id).to.eql(incidentype._id);
          expect(updated.name).to.equal(incidentype.name);
          done(error, updated);
        });

    });

    it('should throw if not exists', (done) => {

      const fake = IncidentType.fake();

      IncidentType
        .patch(fake._id, fake, (error, updated) => {
          expect(error).to.exist;
          expect(error.status).to.exist;
          expect(error.message).to.be.equal('Not Found');
          expect(updated).to.not.exist;
          done();
        });

    });

  });

  describe('instance patch', function () {
    let incidentype;

    before((done) => {
      incidentype = IncidentType.fake();
      incidentype.post((error, created) => {
        incidentype = created;
        done(error, created);
      });
    });

    it('should be able to patch', (done) => {
      incidentype = incidentype.fakeOnly('name');
      incidentype.patch((error, updated) => {
        expect(error).to.not.exist;
        expect(updated).to.exist;
        expect(updated._id).to.eql(incidentype._id);
        expect(updated.name).to.equal(incidentype.name);
        done(error, updated);
      });
    });

    it('should throw if not exists', (done) => {
      incidentype.patch((error, updated) => {
        expect(error).to.not.exist;
        expect(updated).to.exist;
        expect(updated._id).to.eql(incidentype._id);
        done();
      });
    });

  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});
