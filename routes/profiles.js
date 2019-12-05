const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const uploadCloud = require("../config/cloudinary");

const User = require("../models/User");

/*--------------------------------------------------*/

// PROFILE FEED
// GET /api/profiles

router.get("/", (req, res) => {
  User.find({})
    .then(profiles => {
      res.json(profiles);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

// PROFILE
// GET /api/profiles/:id

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(profile => {
      if (profile) {
        res.json(profile);
      } else res.status(404).json({ message: "Profile not found" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

// PROFILE
// PUT /api/profiles/:id

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      role: req.body.role,
      description: req.body.description,
      location: req.body.location,
      skills: req.body.skills,
      portfolio: req.body.portfolio,
      tags: req.body.tags,
      photo: req.body.photo
    },
    { new: true }
  )
    .then(profile => {
      res.json(profile);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

// PROFILE
// POST /api/profiles/upload
router.post("/upload", uploadCloud.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ secure_url: req.file.secure_url });
});

/*--------------------------------------------------*/

module.exports = router;
