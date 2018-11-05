define({ "api": [
  {
    "type": "delete",
    "url": "/incidenttypes/:id",
    "title": "Delete Existing Incident Type",
    "version": "1.0.0",
    "name": "DeleteIncidentType",
    "group": "IncidentType",
    "description": "<p>Delete existing incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of an incident type(or disaster) i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of an incident(or disaster) i.e Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable given code of an incident type(or disaster). If not specified it will be generated from first letters of nature, family and name of incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "cap",
            "defaultValue": "Other",
            "description": "<p>Human readable Common Alert Protocol(CAP) code(or category) of an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an incident type(or disaster) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an incident type if available i.e additional details that clarify what is an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate incident types(or disaster) visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "characteristics",
            "description": "<p>Human readable typical or noticeable features associated with an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>Human readable possible actions or conditions that may lead to an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "areas",
            "description": "<p>Areas(i.e city, state, village etc) liable to suffer from an incident type(or disaster) events.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "risks",
            "description": "<p>Human readable possible risks or injuries that may be caused by an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"code\":\"NHF\",\n  \"cap\":\"Mat\",\n  \"name\": \"Flood\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/incidenttypes/:id",
    "title": "Get Existing Incident Type",
    "version": "1.0.0",
    "name": "GetIncidentType",
    "group": "IncidentType",
    "description": "<p>Get existing incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of an incident type(or disaster) i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of an incident(or disaster) i.e Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable given code of an incident type(or disaster). If not specified it will be generated from first letters of nature, family and name of incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "cap",
            "defaultValue": "Other",
            "description": "<p>Human readable Common Alert Protocol(CAP) code(or category) of an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an incident type(or disaster) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an incident type if available i.e additional details that clarify what is an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate incident types(or disaster) visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "characteristics",
            "description": "<p>Human readable typical or noticeable features associated with an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>Human readable possible actions or conditions that may lead to an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "areas",
            "description": "<p>Areas(i.e city, state, village etc) liable to suffer from an incident type(or disaster) events.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "risks",
            "description": "<p>Human readable possible risks or injuries that may be caused by an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"code\":\"NHF\",\n  \"cap\":\"Mat\",\n  \"name\": \"Flood\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/incidenttypes/schema",
    "title": "Get Incident Type Schema",
    "version": "1.0.0",
    "name": "GetIncidentTypeSchema",
    "group": "IncidentType",
    "description": "<p>Returns incident type json schema definition</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/incidenttypes",
    "title": "List Incident Types",
    "version": "1.0.0",
    "name": "GetIncidentTypes",
    "group": "IncidentType",
    "description": "<p>Returns a list of incident types</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of incident types</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nature",
            "description": "<p>Human readable nature(or origin) of an incident type(or disaster) i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.family",
            "description": "<p>Human readable family(group) of an incident(or disaster) i.e Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.code",
            "description": "<p>Human readable given code of an incident type(or disaster). If not specified it will be generated from first letters of nature, family and name of incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.cap",
            "defaultValue": "Other",
            "description": "<p>Human readable Common Alert Protocol(CAP) code(or category) of an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name of an incident type(or disaster) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary(definition) about an incident type if available i.e additional details that clarify what is an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate incident types(or disaster) visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "data.characteristics",
            "description": "<p>Human readable typical or noticeable features associated with an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "data.causes",
            "description": "<p>Human readable possible actions or conditions that may lead to an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "data.areas",
            "description": "<p>Areas(i.e city, state, village etc) liable to suffer from an incident type(or disaster) events.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "data.risks",
            "description": "<p>Human readable possible risks or injuries that may be caused by an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of incident types</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of incident types returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest incident types was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"data\": [\n   {\n     \"_id\": \"5aeed5f37e422f2743b97eb0\",\n     \"nature\": \"Natural\",\n     \"family\": \"Hydrological\",\n     \"code\":\"NHF\",\n     \"cap\":\"Mat\",\n     \"name\": \"Flood\",\n     \"color\": \"#45b726\",\n     \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n     \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n    }\n   ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/incidenttypes/:id",
    "title": "Patch Existing Incident Type",
    "version": "1.0.0",
    "name": "PatchIncidentType",
    "group": "IncidentType",
    "description": "<p>Patch existing incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of an incident type(or disaster) i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of an incident(or disaster) i.e Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable given code of an incident type(or disaster). If not specified it will be generated from first letters of nature, family and name of incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "cap",
            "defaultValue": "Other",
            "description": "<p>Human readable Common Alert Protocol(CAP) code(or category) of an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an incident type(or disaster) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an incident type if available i.e additional details that clarify what is an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate incident types(or disaster) visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "characteristics",
            "description": "<p>Human readable typical or noticeable features associated with an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>Human readable possible actions or conditions that may lead to an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "areas",
            "description": "<p>Areas(i.e city, state, village etc) liable to suffer from an incident type(or disaster) events.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "risks",
            "description": "<p>Human readable possible risks or injuries that may be caused by an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"code\":\"NHF\",\n  \"cap\":\"Mat\",\n  \"name\": \"Flood\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/incidenttypes",
    "title": "Create New Incident Type",
    "version": "1.0.0",
    "name": "PostIncidentType",
    "group": "IncidentType",
    "description": "<p>Create new incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of an incident type(or disaster) i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of an incident(or disaster) i.e Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable given code of an incident type(or disaster). If not specified it will be generated from first letters of nature, family and name of incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "cap",
            "defaultValue": "Other",
            "description": "<p>Human readable Common Alert Protocol(CAP) code(or category) of an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an incident type(or disaster) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an incident type if available i.e additional details that clarify what is an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate incident types(or disaster) visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "characteristics",
            "description": "<p>Human readable typical or noticeable features associated with an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>Human readable possible actions or conditions that may lead to an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "areas",
            "description": "<p>Areas(i.e city, state, village etc) liable to suffer from an incident type(or disaster) events.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "risks",
            "description": "<p>Human readable possible risks or injuries that may be caused by an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"code\":\"NHF\",\n  \"cap\":\"Mat\",\n  \"name\": \"Flood\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/incidenttypes/:id",
    "title": "Put Existing Incident Type",
    "version": "1.0.0",
    "name": "PutIncidentType",
    "group": "IncidentType",
    "description": "<p>Put existing incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of an incident type(or disaster) i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of an incident(or disaster) i.e Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable given code of an incident type(or disaster). If not specified it will be generated from first letters of nature, family and name of incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "cap",
            "defaultValue": "Other",
            "description": "<p>Human readable Common Alert Protocol(CAP) code(or category) of an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an incident type(or disaster) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an incident type if available i.e additional details that clarify what is an incident type(or disaster).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate incident types(or disaster) visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "characteristics",
            "description": "<p>Human readable typical or noticeable features associated with an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>Human readable possible actions or conditions that may lead to an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "areas",
            "description": "<p>Areas(i.e city, state, village etc) liable to suffer from an incident type(or disaster) events.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "risks",
            "description": "<p>Human readable possible risks or injuries that may be caused by an incident type(or disaster) event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"code\":\"NHF\",\n  \"cap\":\"Mat\",\n  \"name\": \"Flood\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  }
] });
