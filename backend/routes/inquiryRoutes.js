import express from "express";
import { sendInquiry } from "../controllers/inquiryControllers.js";

const router = express.Router();

router.post("/", sendInquiry);

export default router;


