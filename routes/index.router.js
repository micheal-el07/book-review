const { Router } = require("express");
const { getHomePageHandler } = require("../controllers/page.controller");
const { getAllBookHandler } = require("../controllers/books.controller");

const router = Router();

router.route("/").get(getHomePageHandler);

module.exports = router;
