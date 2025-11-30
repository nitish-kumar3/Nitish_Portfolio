// src/admin/ProjectSlideOver.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { apiFetch } from "./api";
import { BACKEND_URL } from "../utils/utils";

const SlideOver = ({ open, onClose, onSaved, project }) => {
  // project = undefined for create, or object for edit
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [live, setLive] = useState("");
  const [github, setGithub] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (project) {
      setTitle(project.title || "");
      setDesc(project.desc || "");
      setLive(project.live || "");
      setGithub(project.github || "");
      setImageFile(null);
    } else {
      setTitle("");
      setDesc("");
      setLive("");
      setGithub("");
      setImageFile(null);
    }
  }, [project, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return toast.error("Title is required");
    setSaving(true);

    try {
      const form = new FormData();
      form.append("title", title);
      form.append("desc", desc);
      form.append("live", live);
      form.append("github", github);
      if (imageFile) form.append("image", imageFile);

      if (project && project._id) {
        // update
        const token = localStorage.getItem("admin-token");
        const resp = await fetch(`${BACKEND_URL}/api/projects/${project._id}`, {
          method: "PUT",
          headers: { Authorization: token ? `Bearer ${token}` : "" },
          body: form,
        });
        if (!resp.ok) throw new Error("Update failed");
        const data = await resp.json();
        toast.success("Project updated");
        onSaved(data.project || data);
      } else {
        // create
        const token = localStorage.getItem("admin-token");
        const resp = await fetch(`${BACKEND_URL}/api/projects`, {
          method: "POST",
          headers: { Authorization: token ? `Bearer ${token}` : "" },
          body: form,
        });
        if (!resp.ok) throw new Error("Create failed");
        const data = await resp.json();
        toast.success("Project created");
        onSaved(data.project || data);
      }
      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to save project");
    } finally {
      setSaving(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute right-0 top-0 h-full w-full md:w-[520px] bg-white dark:bg-gray-800 shadow-xl p-6 overflow-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{project ? "Edit Project" : "Add Project"}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" rows={4} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">Live URL</label>
              <input value={live} onChange={(e) => setLive(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium">GitHub</label>
              <input value={github} onChange={(e) => setGithub(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Image (optional)</label>
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="mt-1 block w-full" />
            {project?.image && !imageFile && (
              <img src={project.image.startsWith("/") ? project.image : project.image} alt="preview" className="mt-3 w-40 h-24 object-cover rounded" />
            )}
          </div>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancel</button>
            <button type="submit" disabled={saving} className="px-4 py-2 rounded-md bg-green-900 text-white">
              {saving ? "Saving..." : project ? "Update Project" : "Create Project"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SlideOver;
