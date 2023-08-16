const config = require('config');

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Sushiro HK Waiting Groups App API',
    version: '1.0.0',
  },
  servers: [
    {
      url: `${config.get('api.baseUrl')}${config.get('api.prefix')}`,
    },
  ],
  tags: {
    name: 'store',
  },
  components: {
    schemas: {
      Store: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          name: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          area: {
            type: 'string',
          },
          region: {
            type: 'string',
          },
          latitude: {
            type: 'number',
          },
          longitude: {
            type: 'number',
          },
          waitingGroup: {
            type: 'integer',
          },
          open: {
            type: 'boolean',
          },
          localTicketing: {
            type: 'boolean',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
      ValidationError: {
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                value: {},
                msg: {
                  type: 'string',
                },
                param: {
                  type: 'string',
                },
                location: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
  paths: {
    '/healthCheck': {
      get: {
        summary: 'Health Check',
        description: 'Provide real-time information about the health status of the application.',
        parameters: [
          {
            name: 'x-api-key',
            in: 'header',
            description: 'API key is required for authentication or origin header must be from an allowed domain.',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                example: {
                  status: 'OK',
                  data: {
                    version: '1.0.0',
                    config: {
                      environment: 'production',
                      mockData: false,
                    },
                  },
                },
              },
            },
          },
          401: {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  errors: [
                    'Not allowed',
                  ],
                },
              },
            },
          },
          500: {
            description: 'Internal server error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  errors: [
                    'Internal server error',
                  ],
                },
              },
            },
          },
        },
      },
    },
    '/store': {
      get: {
        tags: ['store'],
        summary: 'Get Store Information',
        description: 'Fetch store information from the API of the official Sushiro HK app.',
        parameters: [
          {
            name: 'x-api-key',
            in: 'header',
            description: 'API key is required for authentication or origin header must be from an allowed domain.',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Store',
                      },
                    },
                    timestamp: {
                      type: 'integer',
                    },
                  },
                },
                example: {
                  data: [
                    {
                      id: 16,
                      name: '荃灣廣場店',
                      address: '香港荃灣區新界荃灣大壩街4-30號荃灣廣場第3層301-302號鋪',
                      area: '荃灣區',
                      region: '新界',
                      latitude: 22.3711547045452,
                      longitude: 114.11113489072233,
                      waitingGroup: 126,
                      open: true,
                      localTicketing: true,
                    },
                    {
                      id: 11,
                      name: '坑口店',
                      address: '香港新界將軍澳常寧路2號TKO Gateway西翼1樓W101A號舖',
                      area: '西貢區',
                      region: '新界',
                      latitude: 22.3170625205288,
                      longitude: 114.26431245851346,
                      waitingGroup: 68,
                      open: true,
                      localTicketing: true,
                    },
                  ],
                  timestamp: 1691608855187,
                },
              },
            },
          },
          400: {
            description: 'Bad Request',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ValidationError',
                },
                example: {
                  errors: [
                    {
                      value: [],
                      msg: 'Invalid value',
                      param: 'stores',
                      location: 'body',
                    },
                  ],
                },
              },
            },
          },
          401: {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  errors: [
                    'Not allowed',
                  ],
                },
              },
            },
          },
          500: {
            description: 'Internal server error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  errors: [
                    'Internal server error',
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
};
