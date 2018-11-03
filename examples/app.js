'use strict';

/* ensure mongo uri */
process.env.MONGODB_URI =
  (process.env.MONGODB_URI || 'mongodb://localhost/emis-incident-type');


/* dependencies */
const path = require('path');
const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
// mongoose.set('debug', true);
const {
  IncidentType,
  apiVersion,
  info,
  app
} = require(path.join(__dirname, '..'));
let samples = require(path.join(__dirname, 'IncidentTypes.json'));


/* connect to mongoose */
mongoose.connect(process.env.MONGODB_URI);


function boot() {

  async.waterfall([

    function clear(next) {
      IncidentType.deleteMany(function ( /*error, results*/ ) {
        next();
      });
    },

    function seed(next) {
      IncidentType.create(samples, next);
    }

  ], function (error, results) {

    /* expose module info */
    app.get('/', function (request, response) {
      response.status(200);
      response.json(info);
    });

    /* fire the app */
    app.start(function (error, env) {
      console.log(
        `visit http://0.0.0.0:${env.PORT}/v${apiVersion}/incidenttypes`
      );
    });

  });

}

boot();
