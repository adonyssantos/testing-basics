// Spies
const mockGetAll = jest.fn();
const mockCreate = jest.fn();

const request = require('supertest');
const createApp = require('../src/app');
const { generateBooks } = require('../src/fakes/book.fake');

// Fakes
const mockBooks = generateBooks(3);

// Stubs
jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: mockCreate,
})));

describe('Tests for the endpoint: /api/v1/books', () => {
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
    beforeEach(async () => {
      mockGetAll.mockResolvedValue(mockBooks);
    });

    test('should return 200 OK', () => request(app)
      .get('/api/v1/books')
      .expect(200));

    test('should return a list of books', () => request(app)
      .get('/api/v1/books')
      .expect('Content-Type', /json/)
      .then(({ body }) => {
        expect(body).toEqual(expect.any(Array));
        expect(body.length).toBe(3);
      }));
  });
});
