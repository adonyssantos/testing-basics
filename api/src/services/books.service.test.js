const BooksService = require('./books.service');
const { generateBooks } = require('../fakes/book.fake');

// Fakes
const mockBooks = generateBooks(3);

// Spies
const mockGetAll = jest.fn();

// Stubs

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => Promise.resolve(mockBooks[0]),
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
      mockGetAll.mockResolvedValue(mockBooks);
      books = await service.getBooks({});
    });

    test('should return a Array instance data', async () => {
      expect(books).toBeInstanceOf(Array);
    });

    test('should return a list of 3 books', async () => {
      expect(books.length).toBe(3);
    });

    test('should return a list of the BOOKS_MOCK', async () => {
      expect(books).toEqual(mockBooks);
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
