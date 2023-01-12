const BooksService = require('./books.service');
const { generateBooks } = require('../fakes/book.fake');

// Fakes
const mockBooks = generateBooks(3);

// Spies
const mockGetAll = jest.fn();
const mockCreate = jest.fn();

// Stubs
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: mockCreate,
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

    test('should return a list of the mockBook', async () => {
      expect(books).toEqual(mockBooks);
    });

    test('should been called getAll method one time and with the params', async () => {
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('createBook', () => {
    let book;

    beforeEach(async () => {
      mockCreate.mockResolvedValue(mockBooks[0]);
      book = await service.createBook(mockBooks[0]);
    });

    test('should return an Object instance data', async () => {
      expect(book).toBeInstanceOf(Object);
    });

    test('should return the mockBook', async () => {
      expect(book).toEqual(mockBooks[0]);
    });

    test('should been called getAll method one time and with the params', () => {
      expect(mockCreate).toHaveBeenCalled();
      expect(mockCreate).toHaveBeenCalledWith('books', mockBooks[0]);
      expect(mockCreate).toHaveBeenCalledTimes(1);
    });
  });
});
