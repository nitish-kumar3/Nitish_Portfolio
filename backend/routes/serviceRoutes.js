// // backend/routes/serviceRoutes.js
// import express from "express";
// import multer from "multer";
// import {
//   listServices,
//   getService,
//   createService,
//   updateService,
//   deleteService,
// } from "../controllers/serviceController.js";
// import { adminAuth } from "../middleware/authmiddleware.js"; // protect create/update/delete

// const router = express.Router();

// // multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, "-")),
// });
// const upload = multer({ storage });

// router.get("/", listServices);
// router.get("/:id", getService);

// // protect admin operations
// router.post("/", adminAuth, upload.single("image"), createService);
// router.put("/:id", adminAuth, upload.single("image"), updateService);
// router.delete("/:id", adminAuth, deleteService);

// export default router;




// backend/routes/serviceRoutes.js
import express from "express";
import {
  listServices,
  getService,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";
import { adminAuth } from "../middleware/authmiddleware.js";

// ⬅️ Cloudinary upload middleware
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.get("/", listServices);
router.get("/:id", getService);

// Admin-protected routes
router.post("/", adminAuth, upload.single("image"), createService);
router.put("/:id", adminAuth, upload.single("image"), updateService);
router.delete("/:id", adminAuth, deleteService);

export default router;
