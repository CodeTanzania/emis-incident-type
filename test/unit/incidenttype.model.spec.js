'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));


describe('Model', () => {

  describe('Statics', () => {

    it('should expose model name as constant', () => {
      expect(IncidentType.MODEL_NAME).to.exist;
      expect(IncidentType.MODEL_NAME).to.be.equal('IncidentType');
    });

    it('should expose autopulate as options', () => {
      expect(IncidentType.OPTION_AUTOPOPULATE).to.exist;
      expect(IncidentType.OPTION_AUTOPOPULATE)
        .to.be.eql({ maxDepth: 1 });
    });

  });

});
