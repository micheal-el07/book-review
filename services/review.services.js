const { Review } = require("../models");

const createNewReview = (body) => {
  return Review.create({ ...body });
};

// const findOneBook = (searchParam) => {
//   return Book.findOne({ where: { ...searchParam } });
// };

// const findBookById = async (id) => {
//   const book = await Book.findByPk(id);
//   if (!book) return null;
//   return book;
// };

const findManyReviews = (searchParam) => {
  return Review.findAll({ where: { ...searchParam } });
};

module.exports = { createNewReview, findManyReviews };
