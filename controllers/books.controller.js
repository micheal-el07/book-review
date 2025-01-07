const expressAsyncHandler = require("express-async-handler");
const {
  findManyBooks,
  findBookById,
  createNewBook,
  deleteBookById,
} = require("../services/book.services");
const { createNewReview } = require("../services/review.services");
const {
  findManyRatings,
  createNewRating,
} = require("../services/rating.services");

const getAverageRatings = async (bookId) => {
  try {
    const ratings = await findManyRatings({ bookId: bookId });
    const totalRating = ratings.reduce(
      (average, rating) => average + rating.rating,
      0
    );
    const averageRating = totalRating / ratings.length;
    const oneDecimalPlaceAverage = Math.ceil(averageRating * 10) / 10;
    return oneDecimalPlaceAverage;
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "controllers/books/getAverageRatings",
      message: "Internal server error.",
      error: error,
    });
  }
};

const getAllBookHandler = expressAsyncHandler(async (req, res) => {
  const books = await findManyBooks();

  try {
    return res.send({
      status: true,
      message: "Books is successfully retreived.",
      result: books,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "controllers/books/getAllBookHandler",
      message: "Internal server error.",
      error: error,
    });
  }
});

const getSingleBookHandler = expressAsyncHandler(async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await findBookById(req.body.id);
    res.status(200).json({
      status: "success",
      message: "Books is successfully retreived.",
      result: book,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "controllers/books/getSingleBookHandler",
      message: "Internal server error.",
      error: error,
    });
  }
});

const addBookHandler = expressAsyncHandler(async (req, res) => {
  const userInput = req.body;
  const bookImage = req.file ? req.file.filename : null; // Get uploaded file info

  try {
    if (userInput.bookName === "" || userInput.bookAuthor === "") {
      return res.status(409).render("../views/error-page.ejs", {
        result: {
          status: "Error adding book.",
          message: "Please enter the books details properly!",
        },
      });
    }

    const details = {
      bookName: userInput.bookName,
      bookAuthor: userInput.bookAuthor,
      description: userInput.description,
      bookImage: bookImage ? `/uploads/${bookImage}` : userInput.bookImage,
    };

    const book = await createNewBook(details);

    if (!book) {
      return res.status(409).render("../views/error-page.ejs", {
        result: {
          status: "Book not added.",
          message: "Please try again!",
        },
      });
    }

    res.redirect("../../");
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "controllers/books/addBookHandler",
      message: "Internal server error.",
      error: error.message,
    });
  }
});

const addBookReviewHandler = expressAsyncHandler(async (req, res) => {
  let review = req.body;
  const bookId = req.params;

  try {
    review = review.newReview;
    const newReview = await createNewReview({
      review: review,
      bookId: bookId.id,
    });

    res.redirect(`../../${bookId.id}`);
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "controllers/books/addBookReviewHandler",
      message: "Internal server error.",
      error: error,
    });
  }
});

const addBookRatingHandler = expressAsyncHandler(async (req, res) => {
  const bookId = req.params.id;
  const rating = req.body.rating;
  try {
    const rate = await createNewRating({
      rating: rating.rating,
      bookId: bookId,
    });

    res.redirect(`../../${bookId}`);
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "controllers/books/addBookRatingHandler",
      message: "Internal server error.",
      error: error,
    });
  }
});

const deleteBookHandler = expressAsyncHandler(async (req, res) => {
  const bookId = req.params.id;

  try {
    const result = await deleteBookById(bookId);

    if (result) {
      res.status(200).json({
        status: true,
        message: `Book with ID ${bookId} deleted successfully.`,
      });
    } else {
      res.status(404).json({ message: `Book with ID ${bookId} not found.` });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      location: "controllers/books/deleteBookHandler",
      message: "Internal server error.",
      error: error,
    });
  }
});

module.exports = {
  getAllBookHandler,
  getSingleBookHandler,
  addBookHandler,
  addBookReviewHandler,
  addBookRatingHandler,
  getAverageRatings,
  deleteBookHandler,
};
