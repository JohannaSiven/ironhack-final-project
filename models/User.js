const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Mobile Developer",
  "UI/UX Designer",
  "Project Manager",
  "Data Analyst",
  "Quality Assurance",
  "Software Tester",
  "Other"
];

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String
    },
    linkedinId: String,
    email: String,
    profilePic: String,
    location: String,
    role: {
      type: String,
      enum: projectRoles,
      default: "Other"
    },
    skills: [],
    portfolio: [],
    tags: []
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

exports = projectRoles;
