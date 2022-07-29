const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('nfls routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/nfls returns list of teams', async () => {
    const resp = await request(app).get('/nfls');
    expect(resp.body.length).toEqual(5);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });

  it('/nfls/:id returns team details', async () => {
    const res = await request(app).get('/nfls/1');
    const cardinals = {
      id: '1',
      name: 'Cardinals',
      city: 'Phoenix',
      state: 'Arizona',
      url: 'https://en.wikipedia.org/wiki/Arizona_Cardinals'
    };
    expect(res.body).toEqual(cardinals);
  });

  afterAll(() => {
    pool.end();
  });
});
