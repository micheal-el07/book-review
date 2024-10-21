const { Router } = require("express");
const indexRouter = require("../routes/index.router");
const bookRouter = require("../routes/books.router");

const router = Router();

router.use("/", indexRouter);
router.use("/books", bookRouter);

module.exports = { router };
