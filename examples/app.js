'use strict';

/* ensure mongodb uri */
process.env.MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/emis-incidenttype';

/* dependencies */
const path = require('path');
const async = require('async');
const { include } = require('@lykmapipo/include');
const { start, get, mount } = require('@lykmapipo/express-common');
const { connect } = require('@lykmapipo/mongoose-common');
const { IncidentType, info, incidentTypeRouter } = include(__dirname, '..');

// establish mongodb connection
connect(error => {
  // seed incident types
  IncidentType.seed((error, results) => {
    // expose module info
    get('/', (request, response) => {
      response.status(200);
      response.json(info);
    });

    // mount router
    mount(incidentTypeRouter);

    // fire the app
    start((error, env) => {
      console.log(`visit http://0.0.0.0:${env.PORT}`);
    });
  });
});
