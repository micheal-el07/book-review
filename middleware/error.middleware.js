const errorHandler = (err, req, res, next) => {
  console.log(err, "in errorHandler");
  res.json({
    error: {
      success: false,
      message: err.message,
    },
  });
};

module.exports = errorHandler;
