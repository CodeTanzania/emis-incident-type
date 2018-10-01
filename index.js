'use strict';


/**
 * @name emis-incident-type
 * @description A representation of an entity which classify
 * emergency(or disaster) from the most generalised(family) to the
 * most specific(peril).
 *
 * It makes partial use of peril classification system proposed IRDR.
 *
 * @see {@link https://en.wikipedia.org/wiki/Disaster}
 * @see {@link http://www.irdrinternational.org/wp-content/uploads/2014/04/IRDR_DATA-Project-Report-No.-1.pdf}
 * @see {@link https://www.emdat.be/guidelines}
 * @see {@link http://www.glidenumber.net/glide/public/search/search.jsp?}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 1.0.0
 * @public
 *
 * @example
 *
 * const { app } = require('@codetanzania/emis-incident-type');
 * app.start();
 *
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const app = require('@lykmapipo/express-common');


/* declarations */
const pkg = require(path.join(__dirname, 'package.json'));
const fields = [
  'name',
  'description',
  'version',
  'license',
  'homepage',
  'repository',
  'bugs',
  'sandbox',
  'contributors'
];


/* extract information from package.json */
const info = _.merge({}, _.pick(pkg, fields));


/* import models */
const IncidentType =
  require(path.join(__dirname, 'lib', 'incidenttype.model'));


/* import routers*/
const router =
  require(path.join(__dirname, 'lib', 'incidenttype.http.router'));


/* export package(module) info */
exports.info = info;


/* export incident type model */
exports.IncidentType = IncidentType;


/* export incident type router */
exports.incidentRouter = exports.router = router;


/* export router api version */
exports.apiVersion = router.apiVersion;


/* export app */
Object.defineProperty(exports, 'app', {
  get() {

    //TODO bind oauth middlewares authenticate, token, authorize

    /* bind incident type router */
    app.mount(router);
    return app;
  }

});
