// src/admin/InquiriesPanel.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { apiFetch } from "./api";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../utils/utils";

const InquiriesPanel = ({ compact = false, data = [], refresh }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!confirm("Delete this inquiry?")) return;
    try {
      await apiFetch(`${BACKEND_URL}/api/inquiriess/${id}`, { method: "DELETE" });
      toast.success("Deleted");
      if (refresh) refresh();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const toggleRead = async (id, read) => {
    try {
      await apiFetch(`http://localhost:5000/api/inquiriess/${id}/read`, {
        method: "PATCH",
        body: JSON.stringify({ read: !read }),
      });
      toast.success(!read ? "Marked read" : "Marked unread");
      if (refresh) refresh();
    } catch (err) {
      toast.error("Failed to update read status");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Recent Inquiries</h3>
        <button onClick={() => navigate("/admin/inquiries")} className="text-green-600 dark:text-yellow-300 text-sm hover:underline">View All →</button>
      </div>

      <div className="mt-4 space-y-3">
        {data.length === 0 ? (
          <div className="py-6 text-center text-gray-500">No recent inquiries.</div>
        ) : data.map((inq) => (
          <motion.div key={inq._id} whileHover={{ scale: 1.01 }} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-green-900 dark:text-yellow-300">{inq.name}</p>
                <span className="text-xs text-gray-400">• {new Date(inq.date || inq.createdAt).toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{inq.message.slice(0, 100)}...</p>
            </div>

            <div className="flex flex-col gap-2 ml-4">
              <button onClick={() => toggleRead(inq._id, inq.read)} className={`px-3 py-1 rounded-full text-sm ${inq.read ? "bg-gray-200 text-gray-700" : "bg-green-800 text-white"}`}>
                {inq.read ? "Mark unread" : "Mark read"}
              </button>
              <button onClick={() => handleDelete(inq._id)} className="px-3 py-1 rounded-full bg-red-600 text-white">Delete</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InquiriesPanel;
