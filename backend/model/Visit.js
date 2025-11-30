import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema({
  path: { type: String, default: "/" }, // e.g. "/portfolio"
  ip: { type: String }, // optional: store client ip (if needed)
  ua: { type: String }, // optional: user-agent
}, { timestamps: true });

export default mongoose.model("Visit", VisitSchema);
