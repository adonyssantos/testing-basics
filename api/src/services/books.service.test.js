const BooksService = require('./books.service');

const BOOKS_MOCK = [
  {
    _id: '5e6b9e7e7b6d1d2a58c7b5a1',
    name: 'Harry Potter and the Sorcerer\'s stone',
  },
  {
    _id: '5e6b9e7e7b6d1d2a58c7b5a2',
    name: 'Canción de hielo y fuego',
  },
  {
    _id: '5e6b9e7e7b6d1d2a58c7b5a3',
    name: 'El señor de los anillos',
  },
];

const MongoLibStub = {
  getAll: () => Promise.resolve(BOOKS_MOCK),
  create: () => Promise.resolve(BOOKS_MOCK[0]),
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Tests for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Tests for BooksService.getBooks', () => {
    describe('getBooks', () => {
      let books;

      beforeEach(async () => {
        books = await service.getBooks();
      });

      test('should return an array of books', async () => {
        expect(books).toBeInstanceOf(Array);
      });

      test('should return a list of 3 books', async () => {
        expect(books.length).toBe(3);
      });

      test('should return a list of the BOOKS_MOCK', async () => {
        expect(books).toEqual(BOOKS_MOCK);
      });
    });

    describe('createBook', () => {
      let book;

      beforeEach(async () => {
        book = await service.createBook(BOOKS_MOCK[0]);
      });

      test('should create object book', async () => {
        expect(book).toBeInstanceOf(Object);
      });

      test('should create a book with name Harry Potter and the Sorcerer\'s stone', async () => {
        expect(book.name).toBe('Harry Potter and the Sorcerer\'s stone');
      });
    });
  });
});
