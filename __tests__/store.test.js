const request = require('supertest');
const nock = require('nock');
const config = require('config');
const app = require('../app');

describe('Test for store API', () => {
  test('Unauthorized', (done) => {
    request(app)
      .get('/api/store')
      .expect(401, done);
  });

  test('Get store list', (done) => {
    request(app)
      .get('/api/store')
      .set('x-api-key', process.env.API_KEY)
      .expect((res) => {
        expect(res.body).toHaveProperty('data', expect.any(Array));
        expect(res.body.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              address: expect.any(String),
              area: expect.any(String),
              region: expect.any(String),
              latitude: expect.any(Number),
              longitude: expect.any(Number),
              waitingGroup: expect.any(Number),
              open: expect.any(Boolean),
              localTicketing: expect.any(Boolean),
            }),
          ]),
        );
        expect(res.body).toHaveProperty('timestamp', expect.any(Number));
      })
      .expect(200, done);
  });

  test('Get store list error', (done) => {
    nock(`${config.get('sushiroApi.baseUrl')}`)
      .get('/info/storelist')
      .reply(200, []);
    request(app)
      .get('/api/store')
      .set('x-api-key', process.env.API_KEY)
      .expect((res) => {
        expect(res.body).toEqual({
          errors: [{
            value: [],
            msg: 'Invalid value',
            param: 'stores',
            location: 'body',
          }],
        });
      })
      .expect(400, done);
  });
});
