import express from "express";
import { getAnalytics } from "../controllers/analyticsController.js";
import { recordVisit } from "../controllers/visitController.js";

const router = express.Router();

router.get("/", getAnalytics);

// record a view
router.post("/visits", recordVisit);

export default router;
