const { faker } = require('@faker-js/faker');

const generateBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateBooks = (size = 10) => {
  const books = [];

  for (let i = 0; i < size; i += 1) {
    books.push(generateBook());
  }

  return books;
};

module.exports = {
  generateBook,
  generateBooks,
};
