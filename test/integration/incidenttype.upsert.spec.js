'use strict';


/* dependencies */
const faker = require('@benmaruchu/faker');
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { IncidentType } = include(__dirname, '..', '..');


describe('IncidentType Upsert', () => {

  before(done => clear(done));

  let incidenttype;

  beforeEach((done) => {
    incidenttype = IncidentType.fakeExcept('icon');
    incidenttype.post((error, created) => {
      incidenttype = created;
      done(error, created);
    });
  });

  it('should be able upsert non existing', (done) => {
    IncidentType.upsert(incidenttype, (error, upserted) => {
      expect(error).to.not.exist;
      expect(upserted).to.exist;
      expect(upserted._id).to.be.eql(incidenttype._id);
      expect(upserted.name).to.be.eql(incidenttype.name);
      done(error, upserted);
    });
  });

  it('should be able upsert existing by _id', (done) => {
    const updates = {
      _id: incidenttype._id,
      icon: faker.internet.avatar()
    };
    IncidentType.upsert(updates, (error, upserted) => {
      expect(error).to.not.exist;
      expect(upserted).to.exist;
      expect(upserted._id).to.be.eql(incidenttype._id);
      expect(upserted.name).to.be.eql(incidenttype.name);
      expect(upserted.icon).to.not.be.eql(incidenttype.icon);
      expect(upserted.icon).to.be.eql(updates.icon);
      expect(upserted.createdAt).to.be.eql(incidenttype.createdAt);
      done(error, upserted);
    });
  });

  it('should be able upsert existing by fields', (done) => {
    const updates = {
      nature: incidenttype.nature,
      family: incidenttype.family,
      name: incidenttype.name,
      icon: faker.internet.avatar()
    };
    IncidentType.upsert(updates, (error, upserted) => {
      expect(error).to.not.exist;
      expect(upserted).to.exist;
      expect(upserted._id).to.be.eql(incidenttype._id);
      expect(upserted.name).to.be.eql(incidenttype.name);
      expect(upserted.icon).to.not.be.eql(incidenttype.icon);
      expect(upserted.icon).to.be.eql(updates.icon);
      expect(upserted.createdAt).to.be.eql(incidenttype.createdAt);
      done(error, upserted);
    });
  });

  after(done => clear(done));

});
