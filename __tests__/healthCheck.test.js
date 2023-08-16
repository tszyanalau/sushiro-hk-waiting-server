const request = require('supertest');
const app = require('../app');
const getStoreList = require('../api/getStoreList');

describe('Test for Sushiro API', () => {
  test('Fetch store list', async () => {
    const response = await getStoreList();
    expect(response.length).toBeGreaterThan(0);
  });
});

describe('Test for healthCheck API', () => {
  test('Unauthorized', (done) => {
    request(app)
      .get('/api/healthCheck')
      .expect(401, done);
  });

  test('Config', (done) => {
    request(app)
      .get('/api/healthCheck')
      .set('x-api-key', process.env.API_KEY)
      .expect((res) => {
        const { status, data } = res.body;
        expect(status).toBe('OK');
        expect(data.config.environment).toBe('production');
        expect(data.config.mockData).toBe(false);
      })
      .expect(200, done);
  });
});
