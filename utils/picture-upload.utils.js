const multer = require("multer");
const path = require("path");

// ------------------------------ Multer for uploading image ------------------------------
// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define the folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
  },
});

// File filter for images only
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only image files are allowed!"), false); // Reject the file
  }
};

// Initialize multer with storage and filter
const upload = multer({ dest: "uploads/" });

// ------------------------------ Multer for uploading image ------------------------------

module.exports = { upload };
