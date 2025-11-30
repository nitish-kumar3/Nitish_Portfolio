// import mongoose from "mongoose";

// const inquirySchema = new mongoose.Schema({
//   serviceId: String,
//   name: String,
//   email: String,
//   message: String,
//   date: { type: Date, default: Date.now },
// });

// const Inquiry = mongoose.model("Inquiry", inquirySchema);

// export default Inquiry;

import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
  serviceId: String,
  name: String,
  email: String,
  message: String,
  read: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

const Inquiry = mongoose.model("Inquiry", inquirySchema);
export default Inquiry;
