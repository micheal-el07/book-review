const getHomeHandler = (req, res) => {
  // Need to render the home page, need to get all of the books available in the db.

  // Render home page
  res.render("../views/index.ejs"); // Still need to add the data for the list of books
};

const getAddBookPageHandler = (req, res) => {
  res.render("../views/add.ejs")
}

// const getAddBookPageHandler = (req, res) => {
//   res.render("../views/add.ejs")
// }

module.exports = { getHomeHandler, getAddBookPageHandler };
