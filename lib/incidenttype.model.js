'use strict';


/**
 * @module IncidentType
 * @name IncidentType
 * @alias Disaster
 * @description A representation of an entity which classify
 * emergency(or disaster) from the most generalised(family) to the
 * most specific(peril).
 *
 * It makes partial use of peril classification system proposed [IRDR](http://www.irdrinternational.org/wp-content/uploads/2014/04/IRDR_DATA-Project-Report-No.-1.pdf).
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
 */


/* @todo support multiple locales */
/* @todo associated risks */
/* @todo associated incident types */
/* @todo flags if can cascade */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const mongoose = require('mongoose');
const actions = require('mongoose-rest-actions');
const randomColor = require('randomcolor');
const constants = require(path.join(__dirname, 'incidenttype.constants'));
const { env, schema } = require('@codetanzania/majifix-common');
const { Schema } = mongoose;


/* constants */
const { POPULATION_MAX_DEPTH, SCHEMA_OPTIONS } = schema;
const { FAMILIES, NATURES } = constants;
const OPTION_AUTOPOPULATE = { maxDepth: POPULATION_MAX_DEPTH };
const MODEL_NAME = env('INCIDENT_TYPE_MODEL_NAME', 'IncidentType');


/* schemas */
const Code = require(path.join(__dirname, 'incidenttype.code.schema'));


/**
 * @name IncidentTypeSchema
 * @type {Schema}
 * @since 0.1.0
 * @version 1.0.0
 * @private
 */
const IncidentTypeSchema = new Schema({
  /**
   * @name name
   * @description Human readable name of the incident type(or main event)
   * e.g Flood etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  name: {
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'hacker',
      type: 'noun'
    }
  },


  /**
   * @name name
   * @description Human readable given code and CAP category of the incident.
   *
   * @type {Code}
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  code: Code,


  /**
   * @name nature
   * @description Human readable nature(or origin) of the incident
   * i.e Natural or Technological/Man-Made.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  nature: {
    type: String,
    trim: true,
    required: true,
    enum: NATURES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name family
   * @description Human readable family(group) of the incident
   * e.g Biological, Climatological etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  family: {
    type: String,
    trim: true,
    required: true,
    enum: FAMILIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name color
   * @description A color code(in hexadecimal format) used to differentiate
   * incident types visually.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} uppercase - force upper-casing
   * @property {boolean} default - default value set when none provided
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  color: {
    type: String,
    trim: true,
    uppercase: true,
    default: function () { return randomColor().toUpperCase(); },
    fake: true
  },

  /**
   * @name description
   * @description A brief summary about incident type if available i.e
   * additional details that clarify what is incident type.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} required - mark required
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  description: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'paragraph'
    }
  }

}, SCHEMA_OPTIONS);


/*
 *------------------------------------------------------------------------------
 * Indexes
 *------------------------------------------------------------------------------
 */


const uniqueIndex =
  ({ name: 1, 'code.given': 1, 'code.cap': 1, nature: 1, family: 1 });
IncidentTypeSchema.index(uniqueIndex, { unique: true });


/*
 *------------------------------------------------------------------------------
 * Hook
 *------------------------------------------------------------------------------
 */


IncidentTypeSchema.pre('validate', function preValidate(next) {

  // ensure given code
  if (this.code && !this.code.given) {
    // generate given code
    let given = _.compact([this.nature, this.family, this.name]);
    given = _.reduce(given, function generateGivenCode(code, word) {
      return _.toUpper(code + _.first(word));
    }, '');

    // assign given code
    this.code = this.code || {};
    this.code.given = given;
  }

  // set default color if not set
  if (_.isEmpty(this.color)) {
    this.color = randomColor().toUpperCase();
  }

  // continue
  return next();

});


/*
 *------------------------------------------------------------------------------
 * Statics
 *------------------------------------------------------------------------------
 */


/* constants */
IncidentTypeSchema.statics.MODEL_NAME = MODEL_NAME;
IncidentTypeSchema.statics.OPTION_AUTOPOPULATE = OPTION_AUTOPOPULATE;

_.forEach(constants, function (value, key) {
  IncidentTypeSchema.statics[key] = value;
});


/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */


/* plug mongoose rest actions */
IncidentTypeSchema.plugin(actions);


/* export incident type model */
exports = module.exports = mongoose.model(MODEL_NAME, IncidentTypeSchema);
