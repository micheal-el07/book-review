const { Book } = require("../models");

const createNewBook = (body) => {
  try {
    return Book.create({ ...body });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "services/book/createNewBook",
      message: "Internal server error.",
      error: error,
    });
  }
};

const findOneBook = (searchParam) => {
  try {
    return Book.findOne({ where: { ...searchParam } });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "services/book/findOneBook",
      message: "Internal server error.",
      error: error,
    });
  }
};

const findBookById = async (id) => {
  try {
    const book = await Book.findByPk(id);
    if (!book) return null;
    return book;
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "services/book/findBookById",
      message: "Internal server error.",
      error: error,
    });
  }
};

const findManyBooks = (searchParam) => {
  try {
    return Book.findAll({ where: { ...searchParam } });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "services/book/findManyBooks",
      message: "Internal server error.",
      error: error,
    });
  }
};

const deleteBookById = async (searchParam) => {
  try {
    const id = searchParam;
    return Book.destroy({
      where: { id },
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "services/book/deleteBookById",
      message: "Internal server error.",
      error: error,
    });
  }
};

module.exports = {
  createNewBook,
  findOneBook,
  findBookById,
  findManyBooks,
  deleteBookById,
};
