'use strict';

/* dependencies */
const path = require('path');
const _ = require('lodash');
const async = require('async');
const { expect } = require('chai');
const { IncidentType } = require(path.join(__dirname, '..', '..'));

describe('IncidentType', () => {

  before((done) => {
    IncidentType.deleteMany(done);
  });

  describe('get', () => {

    let indicenttypes;

    before((done) => {
      const fakes = _.map(IncidentType.fake(32), (incidenttype) => {
        return (next) => {
          incidenttype.post(next);
        };
      });
      async.parallel(fakes, function (error, created) {
        indicenttypes = created;
        done(error, created);
      });
    });

    it('should be able to get without options', (done) => {
      IncidentType
        .get(function (error, results) {
          expect(error).to.not.exist;
          expect(results).to.exist;
          expect(results.data).to.exist;
          expect(results.data).to.have.length(10);
          expect(results.total).to.exist;
          expect(results.total).to.be.equal(32);
          expect(results.limit).to.exist;
          expect(results.limit).to.be.equal(10);
          expect(results.skip).to.exist;
          expect(results.skip).to.be.equal(0);
          expect(results.page).to.exist;
          expect(results.page).to.be.equal(1);
          expect(results.pages).to.exist;
          expect(results.pages).to.be.equal(4);
          expect(results.lastModified).to.exist;
          expect(_.maxBy(results.data, 'updatedAt').updatedAt)
            .to.be.at.most(results.lastModified);
          done(error, results);
        });
    });

    it('should be able to get with options', (done) => {
      const options = { page: 1, limit: 20 };
      IncidentType
        .get(options, function (error, results) {
          expect(error).to.not.exist;
          expect(results).to.exist;
          expect(results.data).to.exist;
          expect(results.data).to.have.length(20);
          expect(results.total).to.exist;
          expect(results.total).to.be.equal(32);
          expect(results.limit).to.exist;
          expect(results.limit).to.be.equal(20);
          expect(results.skip).to.exist;
          expect(results.skip).to.be.equal(0);
          expect(results.page).to.exist;
          expect(results.page).to.be.equal(1);
          expect(results.pages).to.exist;
          expect(results.pages).to.be.equal(2);
          expect(results.lastModified).to.exist;
          expect(_.maxBy(results.data, 'updatedAt').updatedAt)
            .to.be.at.most(results.lastModified);
          done(error, results);
        });
    });


    it('should be able to search with options', (done) => {
      const options = { filter: { q: indicenttypes[0].name } };
      IncidentType
        .get(options, function (error, results) {
          expect(error).to.not.exist;
          expect(results).to.exist;
          expect(results.data).to.exist;
          expect(results.data).to.have.length.at.least(1);
          expect(results.total).to.exist;
          expect(results.total).to.be.equal(1);
          expect(results.limit).to.exist;
          expect(results.limit).to.be.equal(10);
          expect(results.skip).to.exist;
          expect(results.skip).to.be.equal(0);
          expect(results.page).to.exist;
          expect(results.page).to.be.equal(1);
          expect(results.pages).to.exist;
          expect(results.pages).to.be.equal(1);
          expect(results.lastModified).to.exist;
          expect(_.maxBy(results.data, 'updatedAt').updatedAt)
            .to.be.at.most(results.lastModified);
          done(error, results);
        });
    });


    it('should parse filter options', (done) => {
      const options = { filter: { 'name': indicenttypes[0].name } };
      IncidentType
        .get(options, function (error, results) {
          expect(error).to.not.exist;
          expect(results).to.exist;
          expect(results.data).to.exist;
          expect(results.data).to.have.length.at.least(1);
          expect(results.total).to.exist;
          expect(results.total).to.be.equal(1);
          expect(results.limit).to.exist;
          expect(results.limit).to.be.equal(10);
          expect(results.skip).to.exist;
          expect(results.skip).to.be.equal(0);
          expect(results.page).to.exist;
          expect(results.page).to.be.equal(1);
          expect(results.pages).to.exist;
          expect(results.pages).to.be.equal(1);
          expect(results.lastModified).to.exist;
          expect(_.maxBy(results.data, 'updatedAt').updatedAt)
            .to.be.at.most(results.lastModified);
          done(error, results);
        });
    });

  });

  after((done) => {
    IncidentType.deleteMany(done);
  });

});
