import express from "express";
import Inquiry from "../model/Inquiry.js";
import { adminAuth } from "../middleware/authmiddleware.js";

const router = express.Router();

// GET all inquiries
router.get("/", adminAuth, async (req, res) => {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });
  res.json(inquiries);
});

// DELETE inquiry
router.delete("/:id", adminAuth, async (req, res) => {
  await Inquiry.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// PATCH - mark read/unread
router.patch("/:id/read", adminAuth, async (req, res) => {
  const { read } = req.body;

  const inquiry = await Inquiry.findByIdAndUpdate(
    req.params.id,
    { read },
    { new: true }
  );

  if (!inquiry) return res.status(404).json({ message: "Inquiry not found" });

  res.json({ success: true, inquiry });
});

export default router;
