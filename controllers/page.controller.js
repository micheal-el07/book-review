const asyncHandler = require("express-async-handler");
const { getAverageRatings } = require("./books.controller");
const { findManyBooks, findBookById } = require("../services/book.services");
const { findManyReviews } = require("../services/review.services");

const getHomePageHandler = asyncHandler(async (req, res) => {
  const books = await findManyBooks();

  try {
    const plainBooks = books.map((book) => book.toJSON());
    return res.render("../views/index.ejs", { data: plainBooks });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "controllers/page/getHomePageHandler",
      message: "Internal server error.",
      error: error,
    });
  }
});

const getSpecificBookPageHandler = asyncHandler(async (req, res) => {
  const bookId = req.params.id;
  try {
    let book = await findBookById(bookId);
    book = book.toJSON();

    const bookRating = await getAverageRatings(bookId);
    const reviews = await findManyReviews({ bookId: bookId });
    const plainReview = reviews.map((review) => review.toJSON());

    return res.render("book.ejs", {
      book: book,
      reviews: plainReview,
      rating: bookRating,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "controllers/page/getSpecificBookPageHandler",
      message: "Internal server error.",
      error: error,
    });
  }
});

const getAddBookPageHandler = (req, res) => {
  res.render("../views/add.ejs");
};

module.exports = {
  getHomePageHandler,
  getAddBookPageHandler,
  getSpecificBookPageHandler,
};
