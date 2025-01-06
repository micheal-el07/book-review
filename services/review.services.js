const { Review } = require("../models");

const createNewReview = (body) => {
  try {
    return Review.create({ ...body });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "services/review/createNewReview",
      message: "Internal server error.",
      error: error,
    });
  }
};

const findManyReviews = (searchParam) => {
  try {
    return Review.findAll({ where: { ...searchParam } });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "services/review/findManyReviews",
      message: "Internal server error.",
      error: error,
    });
  }
};

module.exports = { createNewReview, findManyReviews };
