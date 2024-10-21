const { Sequelize } = require("sequelize");

const {
  DB_DIALECT,
  DB_DATABASE,
  DB_PASSWORD,
  DB_PORT,
  DB_HOST,
  DB_USERNAME,
} = require("../config/env.config");
const { bookModel } = require("./book.model");
const { ratingModel } = require("./rating.model");
const { reviewModel } = require("./review.model");

const db = new Sequelize({
  dialect: DB_DIALECT,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

const Book = bookModel(db);
const Rating = ratingModel(db);
const Review = reviewModel(db);

Book.hasMany(Rating, { foreignKey: "bookId" });
Rating.belongsTo(Book, { foreignKey: "bookId" });

Book.hasMany(Review, { foreignKey: "bookId" });
Review.belongsTo(Book, { foreignKey: "bookId" });

module.exports = { db, Book, Rating, Review };
