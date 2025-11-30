import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  live: { type: String, required: true },
  github: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Project", projectSchema);


