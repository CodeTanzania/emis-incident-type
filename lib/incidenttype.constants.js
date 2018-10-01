'use strict';


/* dependencies */
const _ = require('lodash');
const env = require('@lykmapipo/env');
const { getStrings } = env;


/* incident nature */
const NATURE_NATURAL = 'Natural';
const NATURE_TECHNOLOGICAL = 'Technological/Man-Made';
const NATURES = [NATURE_NATURAL, NATURE_TECHNOLOGICAL];


/* Common Alert Protocal(CAP) categories */
const CAP_CATEGORY_GEO = 'Geo';
const CAP_CATEGORY_MET = 'Met';
const CAP_CATEGORY_SAFETY = 'Safety';
const CAP_CATEGORY_SECURITY = 'Security';
const CAP_CATEGORY_RESCUE = 'Rescue';
const CAP_CATEGORY_FIRE = 'Fire';
const CAP_CATEGORY_HEALTH = 'Health';
const CAP_CATEGORY_ENV = 'Env';
const CAP_CATEGORY_TRANSPORT = 'Transport';
const CAP_CATEGORY_INFRA = 'Infra';
const CAP_CATEGORY_CBRNE = 'CBRNE';
const CAP_CATEGORY_OTHER = 'Other';
const CAP_CATEGORIES = [
  CAP_CATEGORY_GEO, CAP_CATEGORY_MET,
  CAP_CATEGORY_SAFETY, CAP_CATEGORY_SECURITY,
  CAP_CATEGORY_RESCUE, CAP_CATEGORY_FIRE,
  CAP_CATEGORY_HEALTH, CAP_CATEGORY_ENV,
  CAP_CATEGORY_TRANSPORT, CAP_CATEGORY_INFRA,
  CAP_CATEGORY_CBRNE, CAP_CATEGORY_OTHER
];


/* incident family*/
const FAMILY_OTHER = 'Other';
const FAMILY_NATURAL = getStrings('INCIDENT_TYPE_FAMILY_NATURAL', [
  'Geophysical', 'Meteorological',
  'Hydrological', 'Climatological',
  'Biological', 'Extra-terrestrial',
  FAMILY_OTHER
]);
const FAMILY_TECHNOLOGICAL = getStrings('INCIDENT_TYPE_FAMILY_TECHNOLOGICAL', [
  'Technological', FAMILY_OTHER
]);
const FAMILIES =
  _.compact(_.uniq([].concat(FAMILY_NATURAL, FAMILY_TECHNOLOGICAL)));


/* exports incident type constant */
exports = module.exports = {
  CAP_CATEGORY_GEO,
  CAP_CATEGORY_MET,
  CAP_CATEGORY_SAFETY,
  CAP_CATEGORY_SECURITY,
  CAP_CATEGORY_RESCUE,
  CAP_CATEGORY_FIRE,
  CAP_CATEGORY_HEALTH,
  CAP_CATEGORY_ENV,
  CAP_CATEGORY_TRANSPORT,
  CAP_CATEGORY_INFRA,
  CAP_CATEGORY_CBRNE,
  CAP_CATEGORY_OTHER,
  CAP_CATEGORIES,
  NATURE_NATURAL,
  NATURE_TECHNOLOGICAL,
  NATURES,
  FAMILY_NATURAL,
  FAMILY_TECHNOLOGICAL,
  FAMILY_OTHER,
  FAMILIES
};
