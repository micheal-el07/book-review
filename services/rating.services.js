const { Rating } = require("../models");

const createNewRating = (body) => {
  return Rating.create({ ...body });
};

// const findOneRating = (searchParam) => {
//   return Rating.findOne({ where: { ...searchParam } });
// };

const findManyRatings = (searchParam) => {
  return Rating.findAll({ where: { ...searchParam } });
};

module.exports = { createNewRating, findManyRatings };
