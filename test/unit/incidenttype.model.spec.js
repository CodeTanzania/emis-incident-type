'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));


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
