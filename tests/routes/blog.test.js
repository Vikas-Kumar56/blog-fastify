const build = require('../../src/app');

let app;
describe('Post routes', () => {
  beforeAll(() => {
    app = build();
  });

  afterAll(() => {
    // At the end of your tests it is highly recommended to call `.close()`
    // to ensure that all connections to external services get closed.
    app.close();
  });

  it('should return empty posts list', async () => {
    const res = await app.inject({
      url: '/api/v1/blogs/',
    });

    expect(res.statusCode).toBe(200);
  });

  it('should save post when called with valid post data', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/blogs/',
      payload: {
        title: 'test',
        body: 'test body',
      },
    });

    expect(res.statusCode).toBe(201);
    expect(res.json().id).toBeDefined();
  });
});
