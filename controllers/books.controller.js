const asyncHandler = require("express-async-handler");
const { findManyBooks, findBookById } = require("../services/book.services");

// For all of the books in the main page?
const getAllBookHandler = asyncHandler(async (req, res) => {
    const books = await findManyBooks({...req.query});
    res.status(200).json({status:"success", message:"Books is successfully retreived.", result:books});
});

// For specific book page?
const getSingleBookHandler = asyncHandler(async (req, res) => {
    const book = await findBookById(req.body.id);
    res.status(200).json({status:"success", message:"Books is successfully retreived.", result:book});
});

const bookPageHandler = asyncHandler(async (req, res) => {});

const getAddBookPageHandler = asyncHandler(async (req, res) => {
    res.render
});

const addBookHandler = asyncHandler(async (req, res) => {})

module.exports = { getAllBookHandler, getSingleBookHandler, bookPageHandler, addBookHandler, getAddBookPageHandler };
