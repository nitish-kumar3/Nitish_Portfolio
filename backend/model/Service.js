// backend/models/Service.js
import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: "General" },
  short: { type: String, default: "" },
  description: { type: String, default: "" },
  badges: { type: [String], default: [] },
  image: { type: String, default: "" }, // will store path like /uploads/filename.jpg
}, { timestamps: true });

export default mongoose.model("Service", ServiceSchema);
