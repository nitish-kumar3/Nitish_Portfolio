// import express from "express";
// import {
//   createProject,
//   getProjects,
//   updateProject,
//   deleteProject,
//   getProjectById,
// } from "../controllers/projectController.js";

// import { upload } from "../middleware/upload.js";

// const router = express.Router();

// // Create
// router.post("/", upload.single("image"), createProject);


// router.get("/:id", getProjectById);

// // Get all
// router.get("/", getProjects);

// // Update
// router.put("/:id", upload.single("image"), updateProject);

// // Delete
// router.delete("/:id", deleteProject);

// export default router;



import express from "express";
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProjectById,
} from "../controllers/projectController.js";

import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), createProject);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.put("/:id", upload.single("image"), updateProject);
router.delete("/:id", deleteProject);

export default router;
