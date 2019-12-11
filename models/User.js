const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String
    },
    description: String,
    linkedinId: String,
    email: String,
    location: String,
    photo: {
      type: String,
      default:
        "https://res.cloudinary.com/jeffmoraes/image/upload/v1576061366/userPhoto/default-profile.png"
    },
    role: {
      type: String,
      enum: [
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
      ],
      default: "Other"
    },
    skills: [],
    portfolio: {
      type: [],
      default: [
        {
          site: "linkedin",
          baseUrl: "linkedin.com/in/",
          icon: "FaLinkedin",
          url: ""
        },
        {
          site: "github",
          baseUrl: "github.com/",
          icon: "FaGithub",
          url: ""
        },
        {
          site: "dribbble",
          baseUrl: "dribbble.com/",
          icon: "FaDribbble",
          url: ""
        },
        {
          site: "behance",
          baseUrl: "behance.net/",
          icon: "FaBehance",
          url: ""
        },
        {
          site: "medium",
          baseUrl: "medium.com/",
          icon: "FaMedium",
          url: ""
        }
      ]
    },
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
