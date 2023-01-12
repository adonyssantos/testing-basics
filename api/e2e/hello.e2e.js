const request = require('supertest');
const createApp = require('../src/app');

describe('Tests for the endpoint: /', () => {
  let app;
  let server;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('GET /', () => {
    test('should return 200 OK', () => request(app)
      .get('/')
      .expect(200));

    test('should return "Hello World!"', () => request(app)
      .get('/')
      .expect('Hello World!'));
  });
});
