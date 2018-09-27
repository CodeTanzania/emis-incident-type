'use strict';


/* dependencies */
const path = require('path');
const { schema } = require('@codetanzania/majifix-common');
const mongoose = require('mongoose');
const constants = require(path.join(__dirname, 'incidenttype.constants'));
const { Schema } = mongoose;


/* constants */
const { SUB_DOC_SCHEMA_OPTIONS } = schema;
const { CAP_CATEGORIES } = constants;

/**
 * @name Code
 * @description Human readable given code and CAP category of the incident.
 *
 * @type {Schema}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 1.0.0
 * @private
 */
const Code = new Schema({
  /**
   * @name given
   * @description Human readable given code of the alert e.g NMF etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} uppercase - force value to uppercase
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  given: {
    type: String,
    trim: true,
    uppercase: true,
    required: true,
    index: true,
    searchable: true
  },


  /**
   * @name cap
   * @description Human readable Common Alert Protocol(CAP) code of
   * the alert e.g Geo etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
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
    index: true,
    searchable: true,
    fake: true
  }

}, SUB_DOC_SCHEMA_OPTIONS);


/* exports incident type code schema */
exports = module.exports = Code;
