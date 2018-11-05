'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));


describe('IncidentType Static Patch', () => {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  let incidenttype = IncidentType.fake();

  before((done) => {
    incidenttype.post((error, created) => {
      incidenttype = created;
      done(error, created);
    });
  });

  it('should be able to patch', (done) => {
    incidenttype = incidenttype.fakeOnly('name');
    IncidentType.patch(incidenttype._id, incidenttype, (error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(incidenttype._id);
      expect(updated.name).to.eql(incidenttype.name);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    const fake = IncidentType.fake();
    IncidentType.patch(fake._id, fake, (error, updated) => {
      expect(error).to.exist;
      expect(error.status).to.exist;
      expect(error.message).to.be.equal('Not Found');
      expect(updated).to.not.exist;
      done();
    });
  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});


describe('IncidentType Instance Patch', () => {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  let incidenttype = IncidentType.fake();

  before((done) => {
    incidenttype.post((error, created) => {
      incidenttype = created;
      done(error, created);
    });
  });

  it('should be able to patch', (done) => {
    incidenttype = incidenttype.fakeOnly('name');
    incidenttype.patch((error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(incidenttype._id);
      expect(updated.name).to.eql(incidenttype.name);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    incidenttype.patch((error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(incidenttype._id);
      done();
    });
  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});
