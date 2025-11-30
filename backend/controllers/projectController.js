import fs from "fs";
import Project from "../model/Project.js";

/* ----------------------------- CREATE PROJECT ----------------------------- */
export const createProject = async (req, res) => {
  try {
    const { title, desc, live, github } = req.body;

    const project = new Project({
      title,
      desc,
      live,
      github,
      image: "/uploads/" + req.file.filename,
    });

    await project.save();
    res.json({ success: true, project });
  } catch (err) {
    res.status(500).json({ error: "Failed to create project" });
  }
};

/* ------------------------------- GET ALL ---------------------------------- */
export const getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};

/* ----------------------------- UPDATE PROJECT ----------------------------- */
export const updateProject = async (req, res) => {
  try {
    const { title, desc, live, github } = req.body;

    const existing = await Project.findById(req.params.id);
    if (!existing) return res.status(404).json({ error: "Not found" });

    let imagePath = existing.image;

    // If new image is uploaded
    if (req.file) {
      const oldPath = "." + existing.image;

      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);

      imagePath = "/uploads/" + req.file.filename;
    }

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      { title, desc, live, github, image: imagePath },
      { new: true }
    );

    res.json({ success: true, project: updated });
  } catch (err) {
    res.status(500).json({ error: "Failed to update project" });
  }
};

/* ----------------------------- DELETE PROJECT ----------------------------- */
export const deleteProject = async (req, res) => {
  try {
    const existing = await Project.findById(req.params.id);
    if (!existing) return res.status(404).json({ error: "Not found" });

    // Delete image
    const img = "." + existing.image;
    if (fs.existsSync(img)) fs.unlinkSync(img);

    await Project.findByIdAndDelete(req.params.id);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete project" });
  }
};


/* --------------------------- GET PROJECT BY ID ---------------------------- */
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

