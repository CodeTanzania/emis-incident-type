'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));


describe('IncidentType Static Post', () => {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  let incidenttype = IncidentType.fake();

  it('should be able to post', (done) => {
    IncidentType.post(incidenttype, (error, created) => {
      expect(error).to.not.exist;
      expect(created).to.exist;
      expect(created._id).to.eql(incidenttype._id);
      expect(created.name).to.eql(incidenttype.name);
      done(error, created);
    });
  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});

describe('IncidentType Instance Post', () => {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  let incidenttype = IncidentType.fake();

  it('should be able to post', (done) => {
    incidenttype.post((error, created) => {
      expect(error).to.not.exist;
      expect(created).to.exist;
      expect(created._id).to.eql(incidenttype._id);
      expect(created.name).to.eql(incidenttype.name);
      done(error, created);
    });
  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});
