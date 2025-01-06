const errorHandler = (err, req, res, next) => {
  console.log("Error occured in server.");
  res.status(500).json({
    success: false,
    message: "Error occured during the process.",
    error: err.message,
  });
};

module.exports = errorHandler;
