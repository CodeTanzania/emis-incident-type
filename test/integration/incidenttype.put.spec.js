'use strict';


/* dependencies */
const _ = require('lodash');
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { IncidentType } = include(__dirname, '..', '..');


describe('IncidentType Static Put', () => {

  before(done => clear(done));

  let incidenttype = IncidentType.fake();

  before((done) => {
    incidenttype.post((error, created) => {
      incidenttype = created;
      done(error, created);
    });
  });

  it('should be able to put', (done) => {
    incidenttype = incidenttype.fakeOnly('name');
    IncidentType.put(incidenttype._id, incidenttype, (error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(incidenttype._id);
      expect(updated.name).to.eql(incidenttype.name);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    const fake = IncidentType.fake().toObject();
    IncidentType.put(fake._id, _.omit(fake, '_id'), (error, updated) => {
      expect(error).to.exist;
      // expect(error.status).to.exist;
      expect(error.name).to.be.equal('DocumentNotFoundError');
      expect(updated).to.not.exist;
      done();
    });
  });

  after(done => clear(done));

});


describe('IncidentType Instance Put', () => {

  before(done => clear(done));


  let incidenttype = IncidentType.fake();

  before((done) => {
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
      expect(updated.name).to.eql(incidenttype.name);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    incidenttype.put((error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(incidenttype._id);
      done();
    });
  });

  after(done => clear(done));


});
