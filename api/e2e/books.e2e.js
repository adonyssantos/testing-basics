const { MongoClient } = require('mongodb');
const request = require('supertest');
const createApp = require('../src/app');
const { config } = require('../src/config');
const { generateBooks } = require('../src/fakes/book.fake');

// Fakes
const mockBooks = generateBooks(3);

describe('Tests for the endpoint: /api/v1/books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);

    const client = new MongoClient(config.testDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    database = client.db(config.testDbName);
  });

  afterAll(async () => {
    await server.close();
    // await database.close();
  });

  describe('GET /', () => {
    let seedData = null;

    beforeEach(async () => {
      seedData = await database.collection('books').insertMany(mockBooks);
    });

    // afterEach(async () => {
    //   await database.collection('books').deleteMany({});
    // });

    test('should return 200 OK', () => request(app).get('/api/v1/books').expect(200));

    test('should return a list of books', () => request(app)
      .get('/api/v1/books')
      .expect('Content-Type', /json/)
      .then(({ body }) => {
        expect(body).toBe(seedData.ops);
        expect(body).toEqual(expect.any(Array));
        expect(body.length).toBe(seedData.insertedCount);
      }));
  });
});
