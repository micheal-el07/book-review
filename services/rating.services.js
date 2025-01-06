const { Rating } = require("../models");

const createNewRating = (body) => {
  try {
    return Rating.create({ ...body });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "services/rating/createNewRating",
      message: "Internal server error.",
      error: error,
    });
  }
};

const findManyRatings = (searchParam) => {
  try {
    return Rating.findAll({ where: { ...searchParam } });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "services/rating/findManyRatings",
      message: "Internal server error.",
      error: error,
    });
  }
};

module.exports = { createNewRating, findManyRatings };
