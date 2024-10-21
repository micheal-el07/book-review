const { Book } = require("../models");

const createNewBook = (body) => {
  return Book.create({ ...body });
};

const findOneBook = (searchParam) => {
  return Book.findOne({ where: { ...searchParam } });
};

const findBookById = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) return null;
  return book;
};

const findManyBooks = (searchParam) => {
  return Book.findAll({ where: { ...searchParam } });
};

module.exports = { createNewBook, findOneBook, findBookById, findManyBooks };
