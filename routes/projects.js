const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//mongoose.set("debug", true);

const User = require("../models/User");
const Project = require("../models/Project");

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
    contributors: [req.user._id],
    tags: req.body.tags
  })
    .then(project => {
      console.log(project);
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

// PROJECT DETAIL
// GET /api/projects/:id

router.get("/:id", (req, res) => {
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   res.status(400).json({ message: "ProjectId is not valid" });
  //   return;
  // }

  Project.findById(req.params.id)
    .populate("contributors")
    .populate("owner")
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
// POST /api/projects/apply/:id

router.put("/apply/:id", (req, res) => {
  console.log("### new application submitted")
  Project.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { applications: { user: req.body.user, role: req.body.role } }
    },
    {
      new: true
    }
  )
    .populate("contributors")
    .populate("owner")
    .then(project => {
      console.log("### new application created in db: ", project.applications);
      res.json(project);
    })
    .catch(err => res.status(500).json(err));
});

/*--------------------------------------------------*/

// PROJECT FORM
// PUT /api/projects/:id

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
      contributors: [req.user._id],
      tags: req.body.tags,
      applications: req.body.applications
    },
    { new: true }
  ).populate("owner")
    .populate("contributors")
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/applications/reject", (req, res) => {
  const { applicant, project } = req.body;

  Project.findByIdAndUpdate(
    { _id: project },
    {
      $pull: {
        applications: {
          user: applicant
        }
      }
    }
  )
    .then(project => {
      console.log("### applicant rejected: ", applicant);
      res.json(project);
    })
    .catch(err => res.status(500).json(err));
});

router.post("/applications/accept", (req, res) => {
  const { applicant, project } = req.body;

  Project.findByIdAndUpdate(
    { _id: project },
    {
      $push: {
        contributors: applicant
      }
    },
    { new: true }
  )
    .then(project => {
      res.json(project);
    })
    .catch(err => res.status(500).json(err));
});

router.post("/applications/roleUpdate", (req, res) => {
  const { project, role } = req.body;
  console.log("project:", project, "role:", role);

  Project.findById(project)
    .then(specific => {
      const updatedRequiredRoles = specific.requiredRoles.map(el => {
        if (el.name === role) {
          el.open = false;
          return el;
        }
        return el;
      });
      Project.findByIdAndUpdate(
        project,
        { requiredRoles: updatedRequiredRoles },
        { new: true }
      ).then(result => {
        res.json(result);
      });
    })
    .catch(err => res.status(500).json(err));
});

/*--------------------------------------------------*/

// PROJECT FORM
// DELETE /api/projects/:id
router.delete("/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(response => res.json({ message: "ok" }))
    .catch(err => {
      res.status(500).json(err);
    });
});

/*--------------------------------------------------*/

module.exports = router;
