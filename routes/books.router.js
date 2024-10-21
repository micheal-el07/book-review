const { Router } = require("express");
const {
  bookPageHandler,
  addBookHandler,
} = require("../controllers/books.controller");

const router = Router();

router.route("/:id").get(bookPageHandler);
// .get(getAddPageBookHandler)
router.route("/add").post(addBookHandler);

module.exports = router;
