'use strict';

/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { IncidentType } = include(__dirname, '..', '..');

describe('IncidentType Static Post', () => {
  before(done => clear(done));

  let incidenttype = IncidentType.fake();

  it('should be able to post', done => {
    IncidentType.post(incidenttype, (error, created) => {
      expect(error).to.not.exist;
      expect(created).to.exist;
      expect(created._id).to.eql(incidenttype._id);
      expect(created.name).to.eql(incidenttype.name);
      done(error, created);
    });
  });

  after(done => clear(done));
});

describe('IncidentType Instance Post', () => {
  before(done => clear(done));

  let incidenttype = IncidentType.fake();

  it('should be able to post', done => {
    incidenttype.post((error, created) => {
      expect(error).to.not.exist;
      expect(created).to.exist;
      expect(created._id).to.eql(incidenttype._id);
      expect(created.name).to.eql(incidenttype.name);
      done(error, created);
    });
  });

  after(done => clear(done));
});
