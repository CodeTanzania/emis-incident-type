'use strict';


/* dependencies */
const { include } = require('@lykmapipo/include');
const { expect } = require('chai');
const { IncidentType } = include(__dirname, '..', '..');

describe('IncidentType Instance', () => {

  it('`preValidate` should be a function', () => {
    const incidentType = IncidentType.fake();
    expect(incidentType.preValidate).to.exist;
    expect(incidentType.preValidate).to.be.a('function');
    expect(incidentType.preValidate.length).to.be.equal(1);
    expect(incidentType.preValidate.name).to.be.equal('preValidate');
  });

  it('`preValidate` should set given code', (done) => {
    const incidentType = IncidentType.fake();
    expect(incidentType.code).to.not.exist;

    incidentType.preValidate((error) => {
      expect(incidentType.code).to.exist;
      done(error);
    });
  });

  it('`preValidate` should set color', (done) => {
    const incidentType = IncidentType.fake();
    incidentType.color = undefined;

    expect(incidentType.color).to.not.exist;

    incidentType.preValidate((error) => {
      expect(incidentType.color).to.exist;
      done(error);
    });
  });

});

describe('IncidentType Statics', () => {

  it('should expose model name', () => {
    expect(IncidentType.MODEL_NAME).to.exist;
    expect(IncidentType.MODEL_NAME).to.be.equal('IncidentType');
  });

  it('should expose collection name', () => {
    expect(IncidentType.COLLECTION_NAME).to.exist;
    expect(IncidentType.COLLECTION_NAME).to.be.equal('incidenttypes');
  });

  it('should expose autopulate options', () => {
    expect(IncidentType.OPTION_AUTOPOPULATE).to.exist;
    expect(IncidentType.OPTION_AUTOPOPULATE)
      .to.be.eql({
        select: {
          code: 1,
          nature: 1,
          family: 1,
          name: 1,
          color: 1,
          icon: 1
        },
        maxDepth: IncidentType.POPULATION_MAX_DEPTH
      });
  });

  it('should expose natures', () => {
    expect(IncidentType.NATURE_OTHER).to.exist;
    expect(IncidentType.NATURE_OTHER).to.be.equal('Other');

    expect(IncidentType.NATURE_NATURAL).to.exist;
    expect(IncidentType.NATURE_NATURAL).to.be.equal('Natural');

    expect(IncidentType.NATURE_TECHNOLOGICAL).to.exist;
    expect(IncidentType.NATURE_TECHNOLOGICAL).to.be.equal(
      'Technological');

    expect(IncidentType.NATURES).to.exist;
    expect(IncidentType.NATURES).to.be.eql([
      'Natural', 'Technological', 'Other'
    ]);
  });

  it('should expose families', () => {
    expect(IncidentType.FAMILY_OTHER).to.exist;
    expect(IncidentType.FAMILY_OTHER).to.be.equal('Other');

    expect(IncidentType.FAMILIES).to.exist;
    expect(IncidentType.FAMILIES).to.be.eql([
      'Geophysical', 'Meteorological',
      'Hydrological', 'Climatological',
      'Biological', 'Extra-terrestrial',
      'Technological', 'Other'
    ]);
  });

  it('should expose cap categories', () => {
    expect(IncidentType.CAP_CATEGORY_OTHER).to.exist;
    expect(IncidentType.CAP_CATEGORY_OTHER).to.be.equal('Other');

    expect(IncidentType.CAP_CATEGORIES).to.exist;
    expect(IncidentType.CAP_CATEGORIES).to.be.eql([
      'Geo', 'Met',
      'Safety', 'Security',
      'Rescue', 'Fire',
      'Health', 'Env',
      'Transport', 'Infra',
      'CBRNE', 'Other'
    ]);
  });

});
