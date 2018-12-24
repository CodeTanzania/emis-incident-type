'use strict';


/**
 * @module IncidentType
 * @name IncidentType
 * @alias Disaster
 * @alias Hazard
 * @alias EventType
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
const async = require('async');
const { getString, getStrings } = require('@lykmapipo/env');
const { Schema, SchemaTypes } = require('@lykmapipo/mongoose-common');
const { model, SCHEMA_OPTIONS } = require('@lykmapipo/mongoose-common');
const actions = require('mongoose-rest-actions');
const randomColor = require('randomcolor');
const { ObjectId } = SchemaTypes;


/* constants */


/* natures */
const NATURE_OTHER = 'Other';
const NATURE_NATURAL = 'Natural';
const NATURE_TECHNOLOGICAL = 'Technological';
const NATURES = getStrings('INCIDENTTYPE_NATURES', [
  NATURE_NATURAL, NATURE_TECHNOLOGICAL, NATURE_OTHER
]);


/* families */
const FAMILY_OTHER = 'Other';
const FAMILIES = getStrings('INCIDENTTYPE_FAMILIES', [
  'Geophysical', 'Meteorological',
  'Hydrological', 'Climatological',
  'Biological', 'Extra-terrestrial',
  'Technological', FAMILY_OTHER
]);


/* cap categories */
const CAP_CATEGORY_OTHER = 'Other';
const CAP_CATEGORIES = getStrings('INCIDENTTYPE_CAP_CATEGORIES', [
  'Geo', 'Met',
  'Safety', 'Security',
  'Rescue', 'Fire',
  'Health', 'Env',
  'Transport', 'Infra',
  'CBRNE', CAP_CATEGORY_OTHER
]);


/* schema options */
const POPULATION_MAX_DEPTH = 1;
const MODEL_NAME = getString('MODEL_NAME', 'IncidentType');
const COLLECTION_NAME = getString('COLLECTION_NAME', 'incidenttypes');
const INCIDENTTYPE_SEED = getString('INCIDENTTYPE_SEED', 'incidenttypes');
const OPTION_AUTOPOPULATE = ({
  select: { code: 1, nature: 1, family: 1, name: 1, color: 1, icon: 1 },
  maxDepth: POPULATION_MAX_DEPTH
});


/**
 * @name IncidentTypeSchema
 * @type {Schema}
 * @since 0.1.0
 * @version 1.1.0
 * @private
 */
const IncidentTypeSchema = new Schema({
  /**
   * @name main
   * @description Top(generic or main) incident type(or disaster) under
   * which specific incident type(or disaster) is derived.
   *
   * If not set the incident type will be treated as generic and will be
   * affected by any logics implemented accordingly.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {string} ref - referenced model(or collection)
   * @property {boolean} index - ensure database index
   * @property {boolean} exists - ensure ref exists before save
   * @property {object} autopopulate - auto population(eager loading) options
   * @property {boolean} taggable - allow field use for tagging
   *
   * @since 1.1.0
   * @version 0.1.0
   * @instance
   * @example
   * {
   *   _id: "5bcda2c073dd0700048fb846",
   *   "nature": "Natural",
   *   "family": "Hydrological",
   *   "name": "Flood",
   *   "color": "#45b726"
   * }
   */
  main: {
    type: ObjectId,
    ref: MODEL_NAME,
    index: true,
    exists: true,
    autopopulate: OPTION_AUTOPOPULATE,
    taggable: true
  },


  /**
   * @name nature
   * @description Human readable nature(or origin) of
   * an incident type(or disaster) i.e Natural or Technological/Man-Made.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {boolean} taggable - allow field use for tagging
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.1.0
   * @instance
   * @example
   * Natural
   */
  nature: {
    type: String,
    trim: true,
    required: true,
    enum: NATURES,
    default: NATURE_OTHER,
    index: true,
    searchable: true,
    taggable: true,
    fake: true
  },


  /**
   * @name family
   * @description Human readable family(group) of an incident(or disaster)
   * i.e Biological, Climatological etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {boolean} taggable - allow field use for tagging
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.1.0
   * @instance
   * @example
   * Biological
   */
  family: {
    type: String,
    trim: true,
    required: true,
    enum: FAMILIES,
    default: FAMILY_OTHER,
    index: true,
    searchable: true,
    taggable: true,
    fake: true
  },


  /**
   * @name code
   * @description Human readable given code of an incident type(or disaster).
   *
   * If not specified it will be generated from first letters of nature, family
   * and name of incident type(or disaster).
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} uppercase - force value to uppercase
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {boolean} taggable - allow field use for tagging
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 1.1.0
   * @version 1.1.0
   * @instance
   * @example
   * NHF
   */
  code: {
    type: String,
    trim: true,
    uppercase: true,
    required: true,
    index: true,
    searchable: true,
    taggable: true
  },


  /**
   * @name cap
   * @description Human readable Common Alert Protocol(CAP) code(or category)
   * of an incident type(or disaster).
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {boolean} taggable - allow field use for tagging
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   * @example
   * Geo
   */
  cap: {
    type: String,
    trim: true,
    required: true,
    enum: CAP_CATEGORIES,
    default: CAP_CATEGORY_OTHER,
    index: true,
    searchable: true,
    taggable: true,
    fake: true
  },


  /**
   * @name name
   * @description Human readable name of an incident type(or disaster)
   * e.g Flood etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} startcase - forcing start case(or title case)
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {boolean} taggable - allow field use for tagging
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.1.0
   * @instance
   * @example
   * Flood
   */
  name: {
    type: String,
    trim: true,
    required: true,
    startcase: true,
    index: true,
    searchable: true,
    taggable: true,
    fake: {
      generator: 'hacker',
      type: 'noun'
    }
  },


  /**
   * @name description
   * @description A brief summary(definition) about an incident type if
   * available i.e additional details that clarify what is an
   * incident type(or disaster).
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.1.0
   * @instance
   * @example
   * Overflow of water from a stream channel onto normally dry land.
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
   * @version 1.1.0
   * @instance
   * @example
   * #20687C
   */
  color: {
    type: String,
    trim: true,
    uppercase: true,
    default: function () { return randomColor({ luminosity: 'light' }); },
    fake: true
  },


  /**
   * @name icon
   * @description An icon(in url, base64, svg formats) used to differentiate
   * incident types(or disaster) visually.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} default - default value set when none provided
   *
   * @since 1.1.0
   * @version 0.1.0
   * @instance
   */
  icon: {
    type: String,
    trim: true
  },


  /**
   * @name characteristics
   * @description Human readable typical or noticeable features associated with
   * an incident type(or disaster) event.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} default - default value set when none provided
   * @property {boolean} compact - remove falsey values
   * @property {boolean} duplicate - remove duplicate values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 1.1.0
   * @version 0.1.0
   * @instance
   */
  characteristics: {
    type: [String],
    default: undefined,
    compact: true,
    duplicate: false,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  },


  /**
   * @name causes
   * @description Human readable possible actions or conditions that may lead to
   * an incident type(or disaster) event.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} default - default value set when none provided
   * @property {boolean} compact - remove falsey values
   * @property {boolean} duplicate - remove duplicate values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 1.1.0
   * @version 0.1.0
   * @instance
   */
  causes: {
    type: [String],
    default: undefined,
    compact: true,
    duplicate: false,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  },


  /**
   * @name areas
   * @description Areas(i.e city, state, village etc) liable to suffer from
   * an incident type(or disaster) events.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} default - default value set when none provided
   * @property {boolean} compact - remove falsey values
   * @property {boolean} duplicate - remove duplicate values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {boolean} taggable - allow field use for tagging
   * @property {object} fake - fake data generator options
   *
   * @since 1.1.0
   * @version 0.1.0
   * @instance
   */
  areas: {
    type: [String],
    default: undefined,
    compact: true,
    duplicate: false,
    index: true,
    searchable: true,
    taggable: true,
    fake: {
      generator: 'address',
      type: 'streetName'
    }
  },


  /**
   * @name risks
   * @alias injuries
   * @description Human readable possible risks or injuries that may be caused
   * by an incident type(or disaster) event.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} default - default value set when none provided
   * @property {boolean} compact - remove falsey values
   * @property {boolean} duplicate - remove duplicate values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 1.1.0
   * @version 0.1.0
   * @instance
   */
  risks: {
    type: [String],
    default: undefined,
    compact: true,
    duplicate: false,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  }

}, SCHEMA_OPTIONS);


/*
 *------------------------------------------------------------------------------
 * Indexes
 *------------------------------------------------------------------------------
 */


const uniqueIndex = ({ nature: 1, family: 1, name: 1, code: 1 });
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
 * @description incident type schema pre validation hook logic
 * @param {function} done callback to invoke on success or error
 * @since 1.1.0
 * @version 0.1.0
 * @instance
 */
IncidentTypeSchema.methods.preValidate = function preValidate(done) {

  // copy from parent
  this.nature = (this.nature || _.get(this, 'main.nature'));
  this.family = (this.family || _.get(this, 'main.family'));
  this.cap = (this.cap || _.get(this, 'main.cap'));
  this.color = (this.color || _.get(this, 'main.color'));
  this.icon = (this.icon || _.get(this, 'main.icon'));

  // ensure given code
  if (this.name && _.isEmpty(this.code)) {
    // TODO honor main incident type

    // prepare given code
    let code =
      _.compact([this.nature, this.family].concat(this.name.split(' ')));

    // generate given code
    code = _.reduce(code, function generateGivenCode(code, word) {
      return _.toUpper(code + _.first(word));
    }, '');

    // assign given code
    this.code = code;
  }

  // set color
  if (_.isEmpty(this.color)) {
    this.color = randomColor({ luminosity: 'light' });
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

IncidentTypeSchema.statics.NATURE_OTHER = NATURE_OTHER;
IncidentTypeSchema.statics.NATURE_NATURAL = NATURE_NATURAL;
IncidentTypeSchema.statics.NATURE_TECHNOLOGICAL = NATURE_TECHNOLOGICAL;
IncidentTypeSchema.statics.NATURES = NATURES;

IncidentTypeSchema.statics.FAMILY_OTHER = FAMILY_OTHER;
IncidentTypeSchema.statics.FAMILIES = FAMILIES;

IncidentTypeSchema.statics.CAP_CATEGORY_OTHER = CAP_CATEGORY_OTHER;
IncidentTypeSchema.statics.CAP_CATEGORIES = CAP_CATEGORIES;


/**
 * @name upsert
 * @function upsert
 * @description create or update existing incidenttype
 * @param {Object} incidenttype valid incidenttype details
 * @param {Function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.1.0
 * @version 0.1.0
 * @public
 */
IncidentTypeSchema.statics.upsert = function upsert(incidenttype, done) {

  //normalize arguments
  let _incidenttype = (
    _.isFunction(incidenttype.toObject) ?
    incidenttype.toObject() :
    incidenttype
  );

  //refs
  const IncidentType = this;

  // prepare upsert
  async.waterfall([

    function findExistingIncidentType(next) {
      // prepare criteria by _id or fields
      let criteria = _.merge({}, _incidenttype);
      criteria = (
        criteria._id ?
        _.pick(criteria, '_id') :
        _.pick(criteria, 'nature', 'family', 'name')
      );
      IncidentType.findOne(criteria, next);
    },

    function upsertIncidentType(found, next) {
      // instantiate if not found
      if (!found) {
        found = new IncidentType(_incidenttype);
      }

      // prepare updates
      _incidenttype = _.merge({}, _incidenttype, found.toObject());

      // do upsert
      found.updatedAt = new Date();
      found.put(_incidenttype, next);
    }
  ], done);
};


/**
 * @name seed
 * @function seed
 * @description seed incidenttypes into database, on duplicate existing wins
 * on merging.
 * @param {IncidentType[]} [incidenttypes] set of incidenttype(s) to seed
 * @param {Function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.1.0
 * @version 0.1.0
 * @public
 */
IncidentTypeSchema.statics.seed = function seed(seeds, done) {

  // normalize arguments
  let _seeds = _.isFunction(seeds) ? [] : [].concat(seeds);
  const _done = _.isFunction(seeds) ? seeds : done;

  // refs
  const IncidentType = this;

  // init incidenttypes collection
  let incidenttypes = [];

  // try load seeds from environment
  const BASE_PATH = getString('BASE_PATH', process.cwd());
  const SEEDS_PATH = getString('SEEDS_PATH', path.join(BASE_PATH, 'seeds'));
  const SEED_PATH = path.join(SEEDS_PATH, INCIDENTTYPE_SEED);
  try {
    const seed = require(SEED_PATH);
    _seeds = [].concat(_seeds).concat(seed);
  } catch (e) { /* ignore */ }

  // collect unique incident type from seeds
  _seeds = _.compact(_seeds);
  _seeds = _.uniqWith(_seeds, _.isEqual);

  // upsert incidenttypes
  incidenttypes = _.map([].concat(_seeds), function (incidenttype) {
    return function upsertIncidentTypes(next) {
      IncidentType.upsert(incidenttype, next);
    };
  });

  // seed incidenttypes
  async.parallel(incidenttypes, _done);

};


/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */


/* plug mongoose rest actions */
IncidentTypeSchema.plugin(actions);


/* export incident type model */
exports = module.exports = model(MODEL_NAME, IncidentTypeSchema);
