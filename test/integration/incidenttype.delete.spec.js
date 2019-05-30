'use strict';

/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { IncidentType } = include(__dirname, '..', '..');

describe('IncidentType Static Delete', () => {
  before(done => clear(done));

  let incidenttype = IncidentType.fake();

  before(done => {
    incidenttype.post((error, created) => {
      incidenttype = created;
      done(error, created);
    });
  });

  it('should be able to delete', done => {
    IncidentType.del(incidenttype._id, (error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(incidenttype._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', done => {
    IncidentType.del(incidenttype._id, (error, deleted) => {
      expect(error).to.exist;
      // expect(error.status).to.exist;
      expect(error.name).to.be.equal('DocumentNotFoundError');
      expect(deleted).to.not.exist;
      done();
    });
  });

  after(done => clear(done));
});

describe('IncidentType Instance Delete', () => {
  before(done => clear(done));

  let incidenttype = IncidentType.fake();

  before(done => {
    incidenttype.post((error, created) => {
      incidenttype = created;
      done(error, created);
    });
  });

  it('should be able to delete', done => {
    incidenttype.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(incidenttype._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', done => {
    incidenttype.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(incidenttype._id);
      done();
    });
  });

  after(done => clear(done));
});
