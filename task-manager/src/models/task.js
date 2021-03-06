const mongoose = require("mongoose");
// const validator = require('validator')

const taskSchema = new mongoose.Schema(
  {
    completed: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.pre("save", async function (next) {
  // console.log("before saving");

  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
