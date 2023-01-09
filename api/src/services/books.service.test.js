const BooksService = require('./books.service');

describe('Tests for BooksService', () => {
  let booksService;

  beforeEach(() => {
    booksService = new BooksService();
  });

  describe('Tests for BooksService.getBooks', () => {
    test('should return an array of books', async () => {
      const books = await booksService.getBooks();

      console.log(books);

      expect(books).toBeInstanceOf(Array);
      // expect(books.length).toBe();
    });
  });
});
