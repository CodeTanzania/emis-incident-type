'use strict';


/**
 * @module IncidentType
 * @name IncidentType
 * @alias Disaster
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
 * @version 1.1.0
 * @public
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const { getString } = require('@lykmapipo/env');
const mongoose = require('mongoose');
const actions = require('mongoose-rest-actions');
const randomColor = require('randomcolor');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
const Code = require(path.join(__dirname, 'incidenttype.code.schema'));
const constants = require(path.join(__dirname, 'incidenttype.constants'));


/* constants */
const POPULATION_MAX_DEPTH = 1;
const MODEL_NAME = getString('MODEL_NAME', 'IncidentType');
const COLLECTION_NAME = getString('COLLECTION_NAME', 'incidenttypes');
const SCHEMA_OPTIONS = ({
  timestamps: true,
  emitIndexErrors: true,
  collection: COLLECTION_NAME
});
const OPTION_AUTOPOPULATE = ({
  select: { code: 1, nature: 1, family: 1, name: 1, color: 1, icon: 1 },
  maxDepth: POPULATION_MAX_DEPTH
});
const { FAMILIES, NATURES } = constants;


/**
 * @name IncidentTypeSchema
 * @type {Schema}
 * @since 0.1.0
 * @version 1.0.0
 * @private
 */
const IncidentTypeSchema = new Schema({
  /**
   * @name party
   * @description Top incident type(generic) under which an incident
   * type(specific) is derived.
   *
   * If not set the incident type will be treated as generic and will be
   * affected by any logics implemented accordingly.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {string} ref - referenced collection
   * @property {boolean} exists - ensure ref exists before save
   * @property {object} autopopulate - auto population(eager loading) options
   * @property {boolean} index - ensure database index
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * {
   *   _id: "5bcda2c073dd0700048fb846",
   *    "nature": "Natural",
   *    "family": "Hydrological",
   *    "name": "Flood",
   *    "color": "#45b726"
   * }
   */
  main: {
    type: ObjectId,
    ref: MODEL_NAME,
    exists: true,
    autopopulate: OPTION_AUTOPOPULATE,
    index: true
  },


  /**
   * @name code
   * @description Human readable given code and CAP category of an
   * incident type.
   *
   * @type {Code}
   * @see {Code}
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
   * @name name
   * @description Human readable name of an incident type(or main event)
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
  }

}, SCHEMA_OPTIONS);


/*
 *------------------------------------------------------------------------------
 * Indexes
 *------------------------------------------------------------------------------
 */


const uniqueIndex =
  ({ nature: 1, family: 1, name: 1, 'code.given': 1, 'code.cap': 1 });
IncidentTypeSchema.index(uniqueIndex, { unique: true });


/*
 *------------------------------------------------------------------------------
 * Hook
 *------------------------------------------------------------------------------
 */


IncidentTypeSchema.pre('validate', function preValidate(next) {

  this.preValidate(next);

});


/*
 *------------------------------------------------------------------------------
 *  Instance
 *------------------------------------------------------------------------------
 */


/**
 * @name preValidate
 * @function preValidate
 * @description party schema pre validation hook logic
 * @param {function} done callback to invoke on success or error
 * @since 0.1.0
 * @version 0.1.0
 * @instance
 */
IncidentTypeSchema.methods.preValidate = function preValidate(done) {

  // ensure given code
  this.code = this.code || {};

  // generate given code if not available
  if (this.name && !this.code.given) {
    // generate given code
    let given =
      _.compact(
        [].concat([this.nature, this.family]).concat(this.name.split(' '))
      );
    given = _.reduce(given, function generateGivenCode(code, word) {
      return _.toUpper(code + _.first(word));
    }, '');

    // assign given code
    this.code.given = given;
  }

  // set default color if not set
  if (_.isEmpty(this.color)) {
    this.color = randomColor({ luminosity: 'light' }).toUpperCase();
  }

  // continue
  return done();

};


/*
 *------------------------------------------------------------------------------
 * Statics
 *------------------------------------------------------------------------------
 */


/* constants */
IncidentTypeSchema.statics.MODEL_NAME = MODEL_NAME;
IncidentTypeSchema.statics.COLLECTION_NAME = COLLECTION_NAME;
IncidentTypeSchema.statics.OPTION_AUTOPOPULATE = OPTION_AUTOPOPULATE;
IncidentTypeSchema.statics.POPULATION_MAX_DEPTH = POPULATION_MAX_DEPTH;

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
