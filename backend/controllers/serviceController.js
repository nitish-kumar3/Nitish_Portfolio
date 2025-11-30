// backend/controllers/serviceController.js
import Service from "../model/Service.js";
import fs from "fs";

export const listServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch services" });
  }
};

export const getService = async (req, res) => {
  try {
    const s = await Service.findById(req.params.id);
    if (!s) return res.status(404).json({ message: "Not found" });
    res.json(s);
  } catch {
    res.status(500).json({ message: "Failed to fetch service" });
  }
};

export const createService = async (req, res) => {
  try {
    const { title, category, short, description, badges } = req.body;
    const badgesArr = badges ? (Array.isArray(badges) ? badges : JSON.parse(badges)) : [];
    const imagePath = req.file ? "/uploads/" + req.file.filename : "";
    const s = new Service({ title, category, short, description, badges: badgesArr, image: imagePath });
    await s.save();
    res.json({ success: true, service: s });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Create failed" });
  }
};

export const updateService = async (req, res) => {
  try {
    const { title, category, short, description, badges } = req.body;
    const badgesArr = badges ? (Array.isArray(badges) ? badges : JSON.parse(badges)) : [];
    const existing = await Service.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: "Not found" });

    // handle new image: delete old file if exists
    if (req.file) {
      const old = existing.image ? "." + existing.image : null;
      if (old && fs.existsSync(old)) fs.unlinkSync(old);
      existing.image = "/uploads/" + req.file.filename;
    }

    existing.title = title ?? existing.title;
    existing.category = category ?? existing.category;
    existing.short = short ?? existing.short;
    existing.description = description ?? existing.description;
    existing.badges = badgesArr.length ? badgesArr : existing.badges;

    await existing.save();
    res.json({ success: true, service: existing });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update failed" });
  }
};

export const deleteService = async (req, res) => {
  try {
    const existing = await Service.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: "Not found" });

    // delete image file
    if (existing.image) {
      const fn = "." + existing.image;
      if (fs.existsSync(fn)) fs.unlinkSync(fn);
    }

    await Service.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Delete failed" });
  }
};
