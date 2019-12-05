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
        "https://res.cloudinary.com/jeffmoraes/image/upload/v1574348835/images/unknown-user.jpg.jpg"
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
