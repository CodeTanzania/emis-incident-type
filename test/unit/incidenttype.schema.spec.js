'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { IncidentType } = require(path.join(__dirname, '..', '..'));
const { NATURES, FAMILIES, CAP_CATEGORIES } = IncidentType;


describe('Schema', () => {

  it('should have name field', () => {
    const name = IncidentType.path('name');

    expect(name).to.exist;
    expect(name).to.be.instanceof(Schema.Types.String);
    expect(name.options.trim).to.be.true;
    expect(name.options.required).to.be.true;
    expect(name.options.index).to.be.true;
    expect(name.options.searchable).to.be.true;
    expect(name.options.fake).to.exist;
  });

  it('should have given code field', () => {
    const givenCode = IncidentType.path('code.given');

    expect(givenCode).to.exist;
    expect(givenCode).to.be.instanceof(Schema.Types.String);
    expect(givenCode.options.trim).to.be.true;
    expect(givenCode.options.uppercase).to.be.true;
    expect(givenCode.options.required).to.be.true;
    expect(givenCode.options.index).to.be.true;
    expect(givenCode.options.searchable).to.be.true;
  });

  it('should have cap code field', () => {
    const capCode = IncidentType.path('code.cap');

    expect(capCode).to.exist;
    expect(capCode).to.be.instanceof(Schema.Types.String);
    expect(capCode.options.trim).to.be.true;
    expect(capCode.options.required).to.be.true;
    expect(capCode.options.enum).to.exist;
    expect(capCode.options.enum).to.be.eql(CAP_CATEGORIES);
    expect(capCode.options.index).to.be.true;
    expect(capCode.options.searchable).to.be.true;
    expect(capCode.options.fake).to.be.true;
  });

  it('should have nature field', () => {
    const nature = IncidentType.path('nature');

    expect(nature).to.exist;
    expect(nature).to.be.instanceof(Schema.Types.String);
    expect(nature.options.trim).to.be.true;
    expect(nature.options.required).to.be.true;
    expect(nature.options.enum).to.exist;
    expect(nature.options.enum).to.be.eql(NATURES);
    expect(nature.options.index).to.be.true;
    expect(nature.options.searchable).to.be.true;
    expect(nature.options.fake).to.exist;
  });

  it('should have family field', () => {
    const family = IncidentType.path('family');

    expect(family).to.exist;
    expect(family).to.be.instanceof(Schema.Types.String);
    expect(family.options.trim).to.be.true;
    expect(family.options.required).to.be.true;
    expect(family.options.enum).to.exist;
    expect(family.options.enum).to.be.eql(FAMILIES);
    expect(family.options.index).to.be.true;
    expect(family.options.searchable).to.be.true;
    expect(family.options.fake).to.exist;
  });

  it('should have color field', () => {
    const color = IncidentType.path('color');

    expect(color).to.exist;
    expect(color).to.be.instanceof(Schema.Types.String);
    expect(color.options.trim).to.be.true;
    expect(color.options.uppercase).to.be.true;
    expect(color.options.default).to.exist;
    expect(color.options.fake).to.exist;
  });

  it('should have description field', () => {
    const description = IncidentType.path('description');

    expect(description).to.exist;
    expect(description).to.be.instanceof(Schema.Types.String);
    expect(description.options.trim).to.be.true;
    expect(description.options.index).to.be.true;
    expect(description.options.searchable).to.be.true;
    expect(description.options.fake).to.exist;
  });

});
