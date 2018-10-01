'use strict';

/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));

describe('IncidentType', function () {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  describe('static put', function () {

    let incidenttype;

    before((done) => {
      incidenttype = IncidentType.fake();
      incidenttype.post((error, created) => {
        incidenttype = created;
        done(error, created);
      });
    });

    it('should be able to put', (done) => {
      incidenttype = incidenttype.fakeOnly('name');

      IncidentType
        .put(incidenttype._id, incidenttype, (error, updated) => {
          expect(error).to.not.exist;
          expect(updated).to.exist;
          expect(updated._id).to.eql(incidenttype._id);
          expect(updated.name).to.equal(incidenttype.name);
          done(error, updated);
        });
    });

    it('should throw if not exists', (done) => {
      const fake = IncidentType.fake();

      IncidentType
        .put(fake._id, fake, (error, updated) => {
          expect(error).to.exist;
          expect(error.status).to.exist;
          expect(error.message).to.be.equal('Not Found');
          expect(updated).to.not.exist;
          done();
        });
    });

  });

  describe('instance put', function () {
    let incidenttype;

    before((done) => {
      incidenttype = IncidentType.fake();
      incidenttype.post((error, created) => {
        incidenttype = created;
        done(error, created);
      });
    });

    it('should be able to put', (done) => {
      incidenttype = incidenttype.fakeOnly('name');

      incidenttype.put((error, updated) => {
        expect(error).to.not.exist;
        expect(updated).to.exist;
        expect(updated._id).to.eql(incidenttype._id);
        expect(updated.name).to.equal(incidenttype.name);
        done(error, updated);
      });
    });

    it('should throw if not exists', (done) => {

      incidenttype
        .put((error, updated) => {
          expect(error).to.not.exist;
          expect(updated).to.exist;
          expect(updated._id).to.eql(incidenttype._id);
          done();
        });
    });

  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});
