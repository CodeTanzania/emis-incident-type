'use strict';


/**
 * @apiDefine IncidentType IncidentType
 *
 * @apiDescription A representation of an entity which classify
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
 */


/**
 * @apiDefine IncidentType
 * @apiSuccess {String} _id Unique incident type identifier
 * @apiSuccess {String} nature Human readable nature(or origin) of
 * an incident type(or disaster) i.e Natural or Technological/Man-Made.
 * @apiSuccess {String} family Human readable family(group) of an
 * incident(or disaster) i.e Biological, Climatological etc.
 * @apiSuccess {String} [code] Human readable given code of an incident
 * type(or disaster). If not specified it will be generated from first letters
 * of nature, family and name of incident type(or disaster).
 * @apiSuccess {String} [cap=Other] Human readable Common Alert Protocol(CAP) code(or category)
 * of an incident type(or disaster).
 * @apiSuccess {String} name Human readable name of an incident type(or disaster)
 * e.g Flood etc.
 * @apiSuccess {String} [description] A brief summary(definition) about an
 * incident type if available i.e additional details that clarify what is an
 * incident type(or disaster).
 * @apiSuccess {String} [color] A color code(in hexadecimal format) used to
 * differentiate incident types visually.
 * @apiSuccess {String} [icon] An icon(in url, base64, svg formats) used to
 * differentiate incident types(or disaster) visually.
 * @apiSuccess {String[]} [characteristics] Human readable typical or
 * noticeable features associated with an incident type(or disaster) event.
 * @apiSuccess {String[]} [causes] Human readable possible actions or conditions
 * that may lead to an incident type(or disaster) event.
 * @apiSuccess {String[]} [areas] Areas(i.e city, state, village etc) liable to
 * suffer from an incident type(or disaster) events.
 * @apiSuccess {String[]} [risks] Human readable possible risks or injuries
 * that may be caused by an incident type(or disaster) event.
 * @apiSuccess {Date} createdAt Date when incident type was created.
 * @apiSuccess {Date} updatedAt Date when incident type was last updated.
 */


/**
 * @apiDefine IncidentTypes
 * @apiSuccess {Object[]} data List of incident types
 * @apiSuccess {String} data._id Unique incident type identifier
 * @apiSuccess {String} data.nature Human readable nature(or origin) of
 * an incident type(or disaster) i.e Natural or Technological/Man-Made.
 * @apiSuccess {String} data.family Human readable family(group) of an
 * incident(or disaster) i.e Biological, Climatological etc.
 * @apiSuccess {String} [data.code] Human readable given code of an incident
 * type(or disaster). If not specified it will be generated from first letters
 * of nature, family and name of incident type(or disaster).
 * @apiSuccess {String} [data.cap=Other] Human readable Common Alert
 * Protocol(CAP) code(or category) of an incident type(or disaster).
 * @apiSuccess {String} data.name Human readable name of an incident
 * type(or disaster) e.g Flood etc.
 * @apiSuccess {String} [data.description] A brief summary(definition) about an
 * incident type if available i.e additional details that clarify what is an
 * incident type(or disaster).
 * @apiSuccess {String} [data.color] A color code(in hexadecimal format) used to
 * differentiate incident types visually.
 * @apiSuccess {String} [data.icon] An icon(in url, base64, svg formats) used to
 * differentiate incident types(or disaster) visually.
 * @apiSuccess {String[]} [data.characteristics] Human readable typical or
 * noticeable features associated with an incident type(or disaster) event.
 * @apiSuccess {String[]} [data.causes] Human readable possible actions or
 * conditions that may lead to an incident type(or disaster) event.
 * @apiSuccess {String[]} [data.areas] Areas(i.e city, state, village etc)
 * liable to suffer from an incident type(or disaster) events.
 * @apiSuccess {String[]} [data.risks] Human readable possible risks or injuries
 * that may be caused by an incident type(or disaster) event.
 * @apiSuccess {Date} data.createdAt Date when incident type was created.
 * @apiSuccess {Date} data.updatedAt Date when incident type was last updated.
 * @apiSuccess {Number} total Total number of incident types
 * @apiSuccess {Number} size Number of incident types returned
 * @apiSuccess {Number} limit Query limit used
 * @apiSuccess {Number} skip Query skip/offset used
 * @apiSuccess {Number} page Page number
 * @apiSuccess {Number} pages Total number of pages
 * @apiSuccess {Date} lastModified Date and time at which latest incident types
 * was last modified
 */


/**
 * @apiDefine IncidentTypeSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    "_id": "5aeed5f37e422f2743b97eb0",
 *    "nature": "Natural",
 *    "family": "Hydrological",
 *    "code":"NHF",
 *    "cap":"Mat",
 *    "name": "Flood",
 *    "color": "#45b726",
 *    "createdAt": "2018-05-06T10:16:19.230Z",
 *    "updatedAt": "2018-05-06T10:16:19.230Z"
 *  }
 */


/**
 * @apiDefine IncidentTypesSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    "data": [
 *    {
 *      "_id": "5aeed5f37e422f2743b97eb0",
 *      "nature": "Natural",
 *      "family": "Hydrological",
 *      "code":"NHF",
 *      "cap":"Mat",
 *      "name": "Flood",
 *      "color": "#45b726",
 *      "createdAt": "2018-05-06T10:16:19.230Z",
 *      "updatedAt": "2018-05-06T10:16:19.230Z"
 *     }
 *    ],
 *   "total": 10,
 *   "size": 2,
 *   "limit": 2,
 *   "skip": 0,
 *   "page": 1,
 *   "pages": 5,
 *   "lastModified": "2018-05-06T10:19:04.910Z"
 * }
 *
 */


/* dependencies */
const _ = require('lodash');
const { getString } = require('@lykmapipo/env');
const { include } = require('@lykmapipo/include');
const Router = require('@lykmapipo/express-common').Router;


/* constants */
const API_VERSION = getString('API_VERSION', '1.0.0');
const PATH_LIST = '/incidenttypes';
const PATH_SINGLE = '/incidenttypes/:id';
const PATH_SCHEMA = '/incidenttypes/schema/';


/* declarations */
const IncidentType = include(__dirname, 'incidenttype.model');
const router = new Router({
  version: API_VERSION
});


/**
 * @api {get} /incidenttypes List Incident Types
 * @apiVersion 1.0.0
 * @apiName GetIncidentTypes
 * @apiGroup IncidentType
 * @apiDescription Returns a list of incident types
 * @apiUse RequestHeaders
 * @apiUse IncidentTypes
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentTypesSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_LIST, function getIncidentTypes(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  IncidentType
    .get(options, function onGetIncidentTypes(error, results) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(results);
      }

    });

});


/**
 * @api {get} /incidenttypes/schema Get Incident Type Schema
 * @apiVersion 1.0.0
 * @apiName GetIncidentTypeSchema
 * @apiGroup IncidentType
 * @apiDescription Returns incident type json schema definition
 * @apiUse RequestHeaders
 */
router.get(PATH_SCHEMA, function getIncidentTypeSchema(request, response) {
  const schema = IncidentType.jsonSchema();
  response.status(200);
  response.json(schema);
});


/**
 * @api {post} /incidenttypes Create New Incident Type
 * @apiVersion 1.0.0
 * @apiName PostIncidentType
 * @apiGroup IncidentType
 * @apiDescription Create new incident type
 * @apiUse RequestHeaders
 * @apiUse IncidentType
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentTypeSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .post(PATH_LIST, function postIncidentType(request, response, next) {

    // obtain request body
    const body = _.merge({}, request.body);

    IncidentType
      .post(body, function onPostIncidentType(error, created) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(201);
          response.json(created);
        }

      });

  });


/**
 * @api {get} /incidenttypes/:id Get Existing Incident Type
 * @apiVersion 1.0.0
 * @apiName GetIncidentType
 * @apiGroup IncidentType
 * @apiDescription Get existing incident type
 * @apiUse RequestHeaders
 * @apiUse IncidentType
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentTypeSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .get(PATH_SINGLE, function getIncidentType(request, response, next) {

    // obtain request options
    const options = _.merge({}, request.mquery);

    // obtain incident type id
    options._id = request.params.id;

    IncidentType
      .getById(options, function onGetIncidentType(error, found) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(200);
          response.json(found);
        }

      });

  });


/**
 * @api {patch} /incidenttypes/:id Patch Existing Incident Type
 * @apiVersion 1.0.0
 * @apiName PatchIncidentType
 * @apiGroup IncidentType
 * @apiDescription Patch existing incident type
 * @apiUse RequestHeaders
 * @apiUse IncidentType
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentTypeSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .patch(PATH_SINGLE, function patchIncidentType(request, response, next) {

    // obtain incident type id
    const { id } = request.params;

    // obtain request body
    const patches = _.merge({}, request.body);

    IncidentType
      .patch(id, patches, function onPatchIncidentType(error, patched) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(200);
          response.json(patched);
        }

      });

  });


/**
 * @api {put} /incidenttypes/:id Put Existing Incident Type
 * @apiVersion 1.0.0
 * @apiName PutIncidentType
 * @apiGroup IncidentType
 * @apiDescription Put existing incident type
 * @apiUse RequestHeaders
 * @apiUse IncidentType
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentTypeSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .put(PATH_SINGLE, function putIncidentType(request, response, next) {

    // obtain incident type id
    const { id } = request.params;

    // obtain request body
    const updates = _.merge({}, request.body);

    IncidentType
      .put(id, updates, function onPutIncidentType(error, updated) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(200);
          response.json(updated);
        }

      });

  });


/**
 * @api {delete} /incidenttypes/:id Delete Existing Incident Type
 * @apiVersion 1.0.0
 * @apiName DeleteIncidentType
 * @apiGroup IncidentType
 * @apiDescription Delete existing incident type
 * @apiUse RequestHeaders
 * @apiUse IncidentType
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentTypeSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .delete(PATH_SINGLE, function deleteIncidentType(request, response, next) {

    // obtain incident type id
    const { id } = request.params;

    IncidentType
      .del(id, function onDeleteIncidentType(error, deleted) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(200);
          response.json(deleted);
        }

      });

  });


/* expose incided type router */
exports = module.exports = router;
