'use strict';

/* dependencies */
const path = require('path');
const _ = require('lodash');
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { IncidentType } = include(__dirname, '..', '..');

describe('IncidentType Seed', () => {
  const SEEDS_PATH = process.env.SEEDS_PATH;
  let incidenttypes = [];

  before(done => clear(done));

  before(() => {
    process.env.SEEDS_PATH = path.join(__dirname, '..', 'fixtures');
  });

  it('should seed provided', done => {
    const seed = IncidentType.fake();
    IncidentType.seed(seed, (error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      expect(_.find(seeded, { name: seed.name })).to.exist;

      // collect
      incidenttypes = incidenttypes.concat(seeded);

      done(error, seeded);
    });
  });

  it('should seed provided', done => {
    const seed = [IncidentType.fake(), IncidentType.fake()];
    IncidentType.seed(seed, (error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      expect(_.find(seeded, { name: seed[0].name })).to.exist;
      expect(_.find(seeded, { name: seed[1].name })).to.exist;

      // collect
      incidenttypes = incidenttypes.concat(seeded);

      done(error, seeded);
    });
  });

  it('should not throw if provided exist', done => {
    IncidentType.seed(incidenttypes, (error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      expect(_.find(seeded, { name: incidenttypes[0].name })).to.exist;
      expect(_.find(seeded, { name: incidenttypes[1].name })).to.exist;
      done(error, seeded);
    });
  });

  it('should be able to seed from environment', done => {
    IncidentType.seed((error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      incidenttypes = seeded;
      done(error, seeded);
    });
  });

  it('should not throw if seed from environment exist', done => {
    IncidentType.seed((error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      done(error, seeded);
    });
  });

  after(done => clear(done));

  after(() => (process.env.SEEDS_PATH = SEEDS_PATH));
});
