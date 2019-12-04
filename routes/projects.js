const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");
//const Project = require("../models/Project");

/*--------------------------------------------------*/

// PROJECT FEED
// GET /api/projects

router.get("/", (req, res) => {
  Project.find({})
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

// PROJECT FORM
// POST /api/projects

router.post("/", (req, res) => {
  Project.create({
    title: req.body.title,
    description: req.body.description,
    remote: req.body.remote,
    status: req.body.status,
    requiredRoles: req.body.requiredRoles,
    owner: req.user._id,
    contributors: [],
    tags: req.body.tags,
    timestamp: new Date()
  })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

// PROJECT DETAIL
// GET/api/projects/:id

router.get("/:id", (req, res) => {
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   res.status(400).json({ message: "ProjectId is not valid" });
  //   return;
  // }

  Project.findById(req.params.id)
    .then(project => {
      if (project) {
        res.json(project);
      } else res.status(404).json({ message: "Project not found" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

// PROJECT FORM
// PUT/api/projects/:id

router.put("/:id", (req, res) => {
  Project.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      remote: req.body.remote,
      status: req.body.status,
      requiredRoles: req.body.requiredRoles,
      owner: req.user._id,
      contributors: [],
      tags: req.body.tags
    },
    { new: true }
  )
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

// PROJECT FORM
// DELETE/api/projects/:id
router.delete("/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(response => res.json({ message: "ok" }))
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

module.exports = router;
