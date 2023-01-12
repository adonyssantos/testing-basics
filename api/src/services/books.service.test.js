const BooksService = require('./books.service');

// Fake
const BOOKS_MOCK = [
  {
    _id: '5e6b9e7e7b6d1d2a58c7b5a1',
    name: "Harry Potter and the Sorcerer's stone",
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

// Spies
const mockGetAll = jest.fn();

// Stubs

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => Promise.resolve(BOOKS_MOCK[0]),
})));

describe('Tests for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('getBooks', () => {
    let books;

    beforeEach(async () => {
      mockGetAll.mockResolvedValue(BOOKS_MOCK);
      books = await service.getBooks({});
    });

    test('should return a Array instance data', async () => {
      expect(books).toBeInstanceOf(Array);
    });

    test('should return a list of 3 books', async () => {
      expect(books.length).toBe(3);
    });

    test('should return a list of the BOOKS_MOCK', async () => {
      expect(books).toEqual(BOOKS_MOCK);
    });

    test('should been called getAll method one time and with the params', async () => {
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });

  // describe('createBook', () => {
  //   let book;

  //   beforeEach(async () => {
  //     book = await service.createBook(BOOKS_MOCK[0]);
  //   });

  //   test('should create object book', async () => {
  //     expect(book).toBeInstanceOf(Object);
  //   });

  //   test("should create a book with name Harry Potter and the Sorcerer's stone", async () => {
  //     expect(book.name).toBe("Harry Potter and the Sorcerer's stone");
  //   });
  // });
});
