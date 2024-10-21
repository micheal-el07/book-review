const { Router } = require("express");
const { getHomeHandler } = require("../controllers/page.controller");

const router = Router();

router.route("/").get(getHomeHandler);

module.exports = router;
