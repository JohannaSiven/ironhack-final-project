const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDKEY,
  api_secret: process.env.CLOUDSECRET
});

const trimExtension = fileName => {
  return fileName
    .split(".")
    .slice(0, -1)
    .join(".");
};

const storage = cloudinaryStorage({
  cloudinary,
  folder: "userPhoto",
  allowedFormats: ["jpg", "png"],
  transformation: [
    {
      width: 500,
      height: 500,
      crop: "lfill",
      gravity: "face"
      // radius: "max",
    }
  ],
  filename: (req, file, cb) => {
    cb(null, trimExtension(file.originalname));
    // The file on cloudinary would have the same name as the original file name, and we trim the extension (because cloudinary appends it on top)
  }
});

const uploadCloud = multer({ storage });
module.exports = uploadCloud;
