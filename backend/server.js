// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import inquiryRoutes from "./routes/inquiryRoutes.js";
// import adminRoutes from "./routes/admin.js";
// import inquiryRoutess from "./routes/inquiries.js";

// dotenv.config({ path: "./.env" });
// console.log("Loaded ENV:", process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);
// connectDB();

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//   })
// );
// app.use(express.json());

// // Routes
// app.use("/api/inquiries", inquiryRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/inquiriess", inquiryRoutess);


// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT} ✔`));




// // server.js (place this file in backend root)
// import 'dotenv/config'           // <-- runs dotenv.config() immediately
// import express from "express";
// import cors from "cors";
// import connectDB from "./config/db.js";

// import inquiryRoutes from "./routes/inquiryRoutes.js";
// import adminRoutes from "./routes/admin.js";
// import inquiryRoutess from "./routes/inquiries.js"; // if this is duplicate, remove one
// import projectRoutes from "./routes/projectRoutes.js";
// import serviceRoutes from "./routes/serviceRoutes.js";
// import analyticsRoutes from "./routes/analyticsRoutes.js";
// // import { fileURLToPath } from "url";
// // import path from "path";

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // optional debug to confirm env loaded (remove after testing)
// console.log("Loaded ENV (server):", process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);

// connectDB();

// const app = express();

// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN || "https://nitish-prajapati-portfolio.vercel.app",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS" ,"PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// // app.options("(.*)", cors());


// app.use(express.json());
// app.use("/uploads", express.static("uploads"));
// // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Routes - ensure you are not mounting inquiries twice
// app.use("/api/inquiries", inquiryRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/inquiriess", inquiryRoutess);
// app.use("/api/projects", projectRoutes);
// app.use("/api/services", serviceRoutes);
// app.use("/api/analytics", analyticsRoutes);

// // remove duplicate mounting if you have it twice

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT} ✔`));






// server.js (place this file in backend root)
import "dotenv/config"; // loads ENV
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import inquiryRoutes from "./routes/inquiryRoutes.js";
import adminRoutes from "./routes/admin.js";
import inquiryRoutess from "./routes/inquiries.js"; 
import projectRoutes from "./routes/projectRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

// Debug env (optional)
console.log("Loaded ENV (server):", process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);

// Connect DB
connectDB();

const app = express();

// CORS
app.use(
  cors({
    origin:
      process.env.CORS_ORIGIN ||
      "https://nitish-prajapati-portfolio.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parser
app.use(express.json());

// ❌ REMOVE local upload folder (NO local images anymore with Cloudinary)
// app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/inquiriess", inquiryRoutess);
app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/analytics", analyticsRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} ✔`)
);
