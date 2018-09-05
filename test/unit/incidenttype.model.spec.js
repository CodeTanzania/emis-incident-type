'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');


/* declarations */
const IncidentType =
  require(path.join(__dirname, '..', '..', 'lib', 'incidenttype.model'));


describe('IncidentType', () => {

  describe('Statics', () => {

    it('should expose model name as constant', () => {
      expect(IncidentType.MODEL_NAME).to.exist;
      expect(IncidentType.MODEL_NAME).to.be.equal('IncidentType');
    });

    it('should expose autopulate as options', () => {
      expect(IncidentType.OPTION_AUTOPOPULATE).to.exist;
      expect(IncidentType.OPTION_AUTOPOPULATE)
        .to.be.eql({
          select: { name: 1, nature: 1, family: 1, color: 1 },
          maxDepth: 1
        });
    });

  });
});
