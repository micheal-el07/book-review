const { Router } = require("express");
const {
  getAddBookPageHandler,
  getSpecificBookPageHandler,
} = require("../controllers/page.controller");
const {
  addBookHandler,
  addBookReviewHandler,
  addBookRatingHandler,
  getAverageRatings,
  deleteBookHandler,
} = require("../controllers/books.controller");
// const { upload } = require("../utils/picture-upload.utils");

const multer = require("multer");
const uploadMiddleware = require("../middleware/upload.middleware");
const upload = multer({ dest: "uploads/" });

const router = Router();

router.route("/:id").get(getSpecificBookPageHandler).delete(deleteBookHandler);
router
  .route("/books/add")
  .get(getAddBookPageHandler)
  .post(uploadMiddleware, addBookHandler);
router.route("/books/review/:id").post(addBookReviewHandler);
router
  .route("/books/ratings/:id")
  .post(addBookRatingHandler)
  .get(getAverageRatings);

module.exports = router;
