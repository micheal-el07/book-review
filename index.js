const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { router } = require("./routes");
const { PORT } = require("./config/env.config");
const { db } = require("./models");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

// Error handling middleware
app.use(errorHandler);

// Send all invalid request endpoint to specific error page
app.all("*", function (req, res) {
  res.status(404).render("../views/error-page.ejs", {
    result: {
      status: "Invalid endpoint.",
      message: "Please enter a valid endpoint!",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  db.sync();
});
