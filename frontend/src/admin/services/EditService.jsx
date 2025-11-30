// src/admin/services/ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../../utils/utils";

const EditService = ({ service, onEdit, onDelete }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-xl shadow flex flex-col justify-between">
      <div>
        <div className="w-full h-40 bg-gray-100 rounded overflow-hidden mb-3">
          {service.image ? <img src={`${BACKEND_URL}${service.image}`} alt={service.title} className="w-full h-full object-cover" /> : null}
        </div>
        <h3 className="font-semibold text-lg">{service.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{service.short}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={() => onEdit(service)} className="px-3 py-1 bg-yellow-400 text-green-900 rounded">Edit</button>
        <button onClick={() => onDelete(service._id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
      </div>
    </motion.div>
    </div>
    </div>

  );
};

export default EditService;
