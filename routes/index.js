const { Router } = require("express");
const homeRouter = require("./index.router");
const bookRouter = require("../routes/books.router");

const router = Router();

router.use("/", homeRouter);
router.use("/books", bookRouter);

module.exports = { router };
