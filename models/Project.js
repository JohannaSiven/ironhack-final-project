const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    remote: {
      type: Boolean,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ["Open", "On process", "Completed"],
      default: "Open"
    },
    requiredRoles: {
      type: [String],
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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    contributors: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    tags: []
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
