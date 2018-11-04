'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));

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

  it('should expose model name as constant', () => {
    expect(IncidentType.MODEL_NAME).to.exist;
    expect(IncidentType.MODEL_NAME).to.be.equal('IncidentType');
  });

  it('should expose autopulate as options', () => {
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

});
