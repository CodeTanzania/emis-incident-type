'use strict';


/* dependencies */
const _ = require('lodash');
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { IncidentType } = include(__dirname, '..', '..');


describe('IncidentType getById', () => {

  before(done => clear(done));

  let incienttype = IncidentType.fake();

  before((done) => {
    incienttype.post((error, created) => {
      incienttype = created;
      done(error, created);
    });
  });

  it('should be able to get an instance', (done) => {
    IncidentType.getById(incienttype._id, (error, found) => {
      expect(error).to.not.exist;
      expect(found).to.exist;
      expect(found._id).to.eql(incienttype._id);
      done(error, found);
    });
  });

  it('should be able to get with options', (done) => {
    const options = {
      _id: incienttype._id,
      select: 'name'
    };
    IncidentType.getById(options, (error, found) => {
      expect(error).to.not.exist;
      expect(found).to.exist;
      expect(found._id).to.eql(incienttype._id);
      expect(found.name).to.exist;

      //...assert selection
      const fields = _.keys(found.toObject());
      expect(fields).to.have.length(2);
      _.map([
        'nature',
        'family',
        'createdAt',
        'updatedAt'
      ], function (field) {
        expect(fields).to.not.include(field);
      });
      done(error, found);
    });

  });

  it('should throw if not exists', (done) => {
    const incienttype = IncidentType.fake();
    IncidentType.getById(incienttype._id, (error, found) => {
      expect(error).to.exist;
      // expect(error.status).to.exist;
      expect(error.name).to.be.equal('DocumentNotFoundError');
      expect(found).to.not.exist;
      done();
    });
  });

  after(done => clear(done));

});
