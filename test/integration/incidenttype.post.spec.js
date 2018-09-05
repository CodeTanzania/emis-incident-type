'use strict';

/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));

describe('IncidentType', function () {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  describe('static post', function () {

    let incidenttype;

    it('should be able to post', (done) => {
      incidenttype = IncidentType.fake();
      IncidentType.post(incidenttype, (error, created) => {
        expect(error).to.not.exist;
        expect(created).to.exist;
        expect(created._id).to.eql(incidenttype._id);
        expect(created.name).to.equal(incidenttype.name);
        done(error, created);
      });
    });

  });

  describe('instance post', function () {

    let incidenttype;

    it('should be able to post', (done) => {
      incidenttype = IncidentType.fake();
      incidenttype.post((error, created) => {
        expect(error).to.not.exist;
        expect(created).to.exist;
        expect(created._id).to.eql(incidenttype._id);
        expect(created.name).to.equal(incidenttype.name);
        done(error, created);
      });
    });

  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});
