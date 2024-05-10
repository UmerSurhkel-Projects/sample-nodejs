const mongoose = require("mongoose");
const {
  Schema: {
    Types: { ObjectId },
  },
} = mongoose;

const Note = new mongoose.Schema(
  {
    title: { type: String, required: true },
    userId: { type: ObjectId, ref: "User", required: true },
    description: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Note", Note);
