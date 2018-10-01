'use strict';

/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));

describe('IncidentType', function () {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  describe('static delete', function () {

    let incidenttype;

    before((done) => {
      incidenttype = IncidentType.fake();
      incidenttype.post((error, created) => {
        incidenttype = created;
        done(error, created);
      });
    });

    it('should be able to delete', (done) => {
      IncidentType
        .del(incidenttype._id, (error, deleted) => {
          expect(error).to.not.exist;
          expect(deleted).to.exist;
          expect(deleted._id).to.eql(incidenttype._id);
          done(error, deleted);
        });
    });

    it('should throw if not exists', (done) => {
      IncidentType
        .del(incidenttype._id, (error, deleted) => {
          expect(error).to.exist;
          expect(error.status).to.exist;
          expect(error.message).to.be.equal('Not Found');
          expect(deleted).to.not.exist;
          done();
        });
    });

  });

  describe('instance delete', function () {

    let incidenttype;

    before((done) => {
      incidenttype = IncidentType.fake();
      incidenttype.post((error, created) => {
        incidenttype = created;
        done(error, created);
      });
    });

    it('should be able to delete', (done) => {
      incidenttype.del((error, deleted) => {
        expect(error).to.not.exist;
        expect(deleted).to.exist;
        expect(deleted._id).to.eql(incidenttype._id);
        done(error, deleted);
      });
    });

    it('should throw if not exists', (done) => {
      incidenttype.del((error, deleted) => {
        expect(error).to.not.exist;
        expect(deleted).to.exist;
        expect(deleted._id).to.eql(incidenttype._id);
        done();
      });
    });

  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});
