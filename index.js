'use strict';


/**
 * @name emis-incident-type
 * @module emis-incident-type
 * @description A representation of an entity which classify
 * emergency(or disaster) from the most generalised(nature and family) to the
 * most specific (main event and peril).
 *
 * @see {@link https://en.wikipedia.org/wiki/Disaster}
 * @see {@link https://www.unisdr.org/we/inform/terminology}
 * @see {@link https://www.emdat.be/Glossary}
 * @see {@link http://www.irdrinternational.org/wp-content/uploads/2014/04/IRDR_DATA-Project-Report-No.-1.pdf}
 * @see {@link http://cred.be/sites/default/files/DisCatClass_264.pdf}
 * @see {@link http://cred.be/sites/default/files/DisCatClass_264.pdf}
 * @see {@link https://www.emdat.be/guidelines}
 * @see {@link http://www.glidenumber.net/glide/public/about.jsp}
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
 * app.start(error => { ... });
 *
 */


/* dependencies */
const _ = require('lodash');
const { include } = require('@lykmapipo/include');
const { app, mount } = require('@lykmapipo/express-common');
const pkg = include(__dirname, 'package.json');
const IncidentType = include(__dirname, 'lib', 'incidenttype.model');
const incidentTypeRouter = include(__dirname, 'lib', 'incidenttype.http.router');


/**
 * @name info
 * @description package information
 * @type {Object}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.info = _.merge({}, _.pick(pkg, [
  'name', 'description', 'version', 'license',
  'homepage', 'repository', 'bugs', 'sandbox', 'contributors'
]));


/**
 * @name IncidentType
 * @description IncidentType model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.IncidentType = IncidentType;


/**
 * @name incidentTypeRouter
 * @description incidentType http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.incidentTypeRouter = incidentTypeRouter;


/**
 * @name apiVersion
 * @description http router api version
 * @type {String}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.apiVersion = incidentTypeRouter.version;


/* export app */
Object.defineProperty(exports, 'app', {
  get() {

    /*@todo bind oauth middlewares authenticate, token, authorize */
    mount(incidentTypeRouter);
    return app;
  }

});
