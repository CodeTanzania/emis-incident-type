'use strict';

/* dependencies */
const path = require('path');
const _ = require('lodash');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));

describe('IncidentType', () => {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  describe('get by id', () => {

    let incidenttype;

    before((done) => {
      incidenttype = IncidentType.fake();
      incidenttype.post((error, created) => {
        incidenttype = created;
        done(error, created);
      });
    });

    it('should be able to get an instance', (done) => {
      IncidentType
        .getById(incidenttype._id, (error, found) => {
          expect(error).to.not.exist;
          expect(found).to.exist;
          expect(found._id).to.eql(incidenttype._id);
          done(error, found);
        });
    });

    it('should be able to get with options', (done) => {

      const options = {
        _id: incidenttype._id,
        select: 'name'
      };

      IncidentType
        .getById(options, (error, found) => {
          expect(error).to.not.exist;
          expect(found).to.exist;
          expect(found._id).to.eql(incidenttype._id);
          expect(found.name).to.exist;

          //...assert selection
          const fields = _.keys(found.toObject());
          expect(fields).to.have.length(2);
          _.map([
            'color',
            'createdAt',
            'updatedAt'
          ], function (field) {
            expect(fields).to.not.include(field);
          });


          done(error, found);
        });

    });

    it('should throw if not exists', (done) => {
      const incidenttype = IncidentType.fake();
      IncidentType
        .getById(incidenttype._id, (error, found) => {
          expect(error).to.exist;
          expect(error.status).to.exist;
          expect(error.message).to.be.equal('Not Found');
          expect(found).to.not.exist;
          done();
        });
    });

  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});
