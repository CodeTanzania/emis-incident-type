'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');


/* declarations */
const IncidentType =
  require(path.join(__dirname, '..', '..', 'lib', 'incidenttype.model'));


describe('IncidentType', () => {

  describe('Schema', () => {

    it('should have name field', () => {

      const name = IncidentType.schema.tree.name;
      const instance = IncidentType.schema.paths.name.instance;

      expect(instance).to.be.equal('String');
      expect(name).to.exist;
      expect(name).to.be.an('object');
      expect(name.type).to.be.a('function');
      expect(name.type.name).to.be.equal('String');
      expect(name.trim).to.be.true;
      expect(name.required).to.be.true;
      // expect(name.unique).to.be.true;
      expect(name.searchable).to.be.true;
      expect(name.fake).to.exist;

    });

    it('should have nature field', () => {

      const nature = IncidentType.schema.tree.nature;
      const instance = IncidentType.schema.paths.nature.instance;

      expect(instance).to.be.equal('String');
      expect(nature).to.exist;
      expect(nature).to.be.an('object');
      expect(nature.type).to.be.a('function');
      expect(nature.type.name).to.be.equal('String');
      expect(nature.trim).to.be.true;
      expect(nature.required).to.be.true;
      expect(nature.index).to.be.true;
      expect(nature.searchable).to.be.true;
      expect(nature.fake).to.be.true;

    });

    it('should have family field', () => {

      const family = IncidentType.schema.tree.family;
      const instance = IncidentType.schema.paths.family.instance;

      expect(instance).to.be.equal('String');
      expect(family).to.exist;
      expect(family).to.be.an('object');
      expect(family.type).to.be.a('function');
      expect(family.type.name).to.be.equal('String');
      expect(family.trim).to.be.true;
      expect(family.required).to.be.true;
      expect(family.index).to.be.true;
      expect(family.searchable).to.be.true;
      expect(family.fake).to.be.true;

    });

    it('should have color field', () => {

      const color = IncidentType.schema.tree.color;
      const instance = IncidentType.schema.paths.color.instance;

      expect(instance).to.be.equal('String');
      expect(color).to.exist;
      expect(color).to.be.an('object');
      expect(color.type).to.be.a('function');
      expect(color.type.name).to.be.equal('String');
      expect(color.trim).to.be.true;
      expect(color.uppercase).to.be.true;
      expect(color.default).to.be.exist;

    });

  });

});
