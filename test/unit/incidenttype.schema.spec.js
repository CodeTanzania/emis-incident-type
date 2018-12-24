'use strict';


/* dependencies */
const { include } = require('@lykmapipo/include');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { IncidentType } = include(__dirname, '..', '..');
const { MODEL_NAME, NATURES, FAMILIES, CAP_CATEGORIES } = IncidentType;


describe('IncidentType Schema', () => {

  it('should have main field', () => {
    const main = IncidentType.path('main');

    expect(main).to.exist;
    expect(main).to.be.an.instanceof(Schema.Types.ObjectId);
    expect(main.options).to.exist;
    expect(main.options).to.be.an('object');
    expect(main.options.type).to.exist;
    expect(main.options.ref).to.exist;
    expect(main.options.ref).to.be.eql(MODEL_NAME);
    expect(main.options.index).to.be.true;
    expect(main.options.exists).to.be.true;
    expect(main.options.autopopulate).to.exist;
    expect(main.options.autopopulate).to.be.an('object');
  });

  it('should have nature field', () => {
    const nature = IncidentType.path('nature');

    expect(nature).to.exist;
    expect(nature).to.be.instanceof(Schema.Types.String);
    expect(nature.options).to.exist;
    expect(nature.options).to.be.an('object');
    expect(nature.options.type).to.exist;
    expect(nature.options.trim).to.be.true;
    expect(nature.options.required).to.be.true;
    expect(nature.options.enum).to.exist;
    expect(nature.options.enum).to.be.eql(NATURES);
    expect(nature.options.index).to.be.true;
    expect(nature.options.searchable).to.be.true;
    expect(nature.options.fake).to.exist;
    expect(nature.options.fake).to.be.true;
  });

  it('should have family field', () => {
    const family = IncidentType.path('family');

    expect(family).to.exist;
    expect(family).to.be.instanceof(Schema.Types.String);
    expect(family.options).to.exist;
    expect(family.options).to.be.an('object');
    expect(family.options.type).to.exist;
    expect(family.options.trim).to.be.true;
    expect(family.options.required).to.be.true;
    expect(family.options.enum).to.exist;
    expect(family.options.enum).to.be.eql(FAMILIES);
    expect(family.options.index).to.be.true;
    expect(family.options.searchable).to.be.true;
    expect(family.options.fake).to.exist;
    expect(family.options.fake).to.be.true;
  });

  it('should have given code field', () => {
    const code = IncidentType.path('code');

    expect(code).to.exist;
    expect(code).to.be.instanceof(Schema.Types.String);
    expect(code.options).to.exist;
    expect(code.options).to.be.an('object');
    expect(code.options.type).to.exist;
    expect(code.options.trim).to.be.true;
    expect(code.options.uppercase).to.be.true;
    expect(code.options.required).to.be.true;
    expect(code.options.index).to.be.true;
    expect(code.options.searchable).to.be.true;
    expect(code.options.fake).to.not.exist;
  });

  it('should have cap code field', () => {
    const cap = IncidentType.path('cap');

    expect(cap).to.exist;
    expect(cap).to.be.instanceof(Schema.Types.String);
    expect(cap.options).to.exist;
    expect(cap.options).to.be.an('object');
    expect(cap.options.type).to.exist;
    expect(cap.options.trim).to.be.true;
    expect(cap.options.required).to.be.true;
    expect(cap.options.enum).to.exist;
    expect(cap.options.enum).to.be.eql(CAP_CATEGORIES);
    expect(cap.options.index).to.be.true;
    expect(cap.options.searchable).to.be.true;
    expect(cap.options.fake).to.exist;
    expect(cap.options.fake).to.be.true;
  });

  it('should have name field', () => {
    const name = IncidentType.path('name');

    expect(name).to.exist;
    expect(name).to.be.instanceof(Schema.Types.String);
    expect(name.options).to.exist;
    expect(name.options).to.be.an('object');
    expect(name.options.type).to.exist;
    expect(name.options.trim).to.be.true;
    expect(name.options.required).to.be.true;
    expect(name.options.startcase).to.be.true;
    expect(name.options.index).to.be.true;
    expect(name.options.searchable).to.be.true;
    expect(name.options.fake).to.exist;
    expect(name.options.fake).to.be.an('object');
  });

  it('should have description field', () => {
    const description = IncidentType.path('description');

    expect(description).to.exist;
    expect(description).to.be.instanceof(Schema.Types.String);
    expect(description.options).to.exist;
    expect(description.options).to.be.an('object');
    expect(description.options.type).to.exist;
    expect(description.options.trim).to.be.true;
    expect(description.options.index).to.be.true;
    expect(description.options.searchable).to.be.true;
    expect(description.options.fake).to.exist;
    expect(description.options.fake).to.be.an('object');
  });

  it('should have color field', () => {
    const color = IncidentType.path('color');

    expect(color).to.exist;
    expect(color).to.be.instanceof(Schema.Types.String);
    expect(color.options).to.exist;
    expect(color.options).to.be.an('object');
    expect(color.options.type).to.exist;
    expect(color.options.trim).to.be.true;
    expect(color.options.uppercase).to.be.true;
    expect(color.options.default).to.exist;
    expect(color.options.default).to.be.a('function');
    expect(color.options.fake).to.exist;
    expect(color.options.fake).to.be.true;
  });

  it('should have icon field', () => {
    const icon = IncidentType.path('icon');

    expect(icon).to.exist;
    expect(icon).to.be.instanceof(Schema.Types.String);
    expect(icon.options).to.exist;
    expect(icon.options).to.be.an('object');
    expect(icon.options.type).to.exist;
    expect(icon.options.trim).to.be.true;
    expect(icon.options.fake).to.not.exist;
  });

  it('should have characteristics field', () => {
    const characteristics = IncidentType.path('characteristics');

    expect(characteristics).to.exist;
    expect(characteristics).to.be.instanceof(Schema.Types.Array);
    expect(characteristics.options).to.exist;
    expect(characteristics.options).to.be.an('object');
    expect(characteristics.options.type).to.exist;
    expect(characteristics.options.default).to.be.undefined;
    expect(characteristics.options.compact).to.be.true;
    expect(characteristics.options.duplicate).to.be.false;
    expect(characteristics.options.index).to.be.true;
    expect(characteristics.options.searchable).to.be.true;
    expect(characteristics.options.fake).to.exist;
    expect(characteristics.options.fake).to.be.an('object');
  });

  it('should have causes field', () => {
    const causes = IncidentType.path('causes');

    expect(causes).to.exist;
    expect(causes).to.be.instanceof(Schema.Types.Array);
    expect(causes.options).to.exist;
    expect(causes.options).to.be.an('object');
    expect(causes.options.type).to.exist;
    expect(causes.options.default).to.be.undefined;
    expect(causes.options.compact).to.be.true;
    expect(causes.options.duplicate).to.be.false;
    expect(causes.options.index).to.be.true;
    expect(causes.options.searchable).to.be.true;
    expect(causes.options.fake).to.exist;
    expect(causes.options.fake).to.be.an('object');
  });

  it('should have areas field', () => {
    const areas = IncidentType.path('areas');

    expect(areas).to.exist;
    expect(areas).to.be.instanceof(Schema.Types.Array);
    expect(areas.options).to.exist;
    expect(areas.options).to.be.an('object');
    expect(areas.options.type).to.exist;
    expect(areas.options.default).to.be.undefined;
    expect(areas.options.compact).to.be.true;
    expect(areas.options.duplicate).to.be.false;
    expect(areas.options.index).to.be.true;
    expect(areas.options.searchable).to.be.true;
    expect(areas.options.fake).to.exist;
    expect(areas.options.fake).to.be.an('object');
  });

  it('should have risks field', () => {
    const risks = IncidentType.path('risks');

    expect(risks).to.exist;
    expect(risks).to.be.instanceof(Schema.Types.Array);
    expect(risks.options).to.exist;
    expect(risks.options).to.be.an('object');
    expect(risks.options.type).to.exist;
    expect(risks.options.default).to.be.undefined;
    expect(risks.options.compact).to.be.true;
    expect(risks.options.duplicate).to.be.false;
    expect(risks.options.index).to.be.true;
    expect(risks.options.searchable).to.be.true;
    expect(risks.options.fake).to.exist;
    expect(risks.options.fake).to.be.an('object');
  });

});
