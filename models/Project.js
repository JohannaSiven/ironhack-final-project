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
      enum: ["Open", "In progress", "Completed"],
      default: "Open"
    },
    requiredRoles: [{}],
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
    applications: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User"
        },
        role: String
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
