// src/admin/services/ServiceList.jsx
import React, { useEffect, useState } from "react";
import { apiFetch } from "../api";
import toast from "react-hot-toast";
import ServiceCard from "./EditService";
import ServiceSlideOver from "./AddService";
import { BACKEND_URL } from "../../utils/utils";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    try {
      const data = await apiFetch(`${BACKEND_URL}/api/services`);
      setServices(data);
    } catch (err) {
      toast.error("Failed to load");
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete service?")) return;
    try {
      await apiFetch(`${BACKEND_URL}/api/services/${id}`, { method: "DELETE" });
      toast.success("Deleted");
      setServices((p) => p.filter((s) => s._id !== id));
    } catch {
      toast.error("Delete failed");
    }
  };

  const openEdit = (s) => { setEditing(s); setOpen(true); };
  const openCreate = () => { setEditing(null); setOpen(true); };

  return (
    <div className="p-6 bg-green-100 min-h-screen dark:bg-gray-900">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Services</h1>
        <button onClick={openCreate} className="px-4 py-2 bg-green-900 text-white rounded">Add Service</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <ServiceCard key={s._id} service={s} onEdit={openEdit} onDelete={handleDelete} />
        ))}
      </div>

      <ServiceSlideOver
        open={open}
        onClose={() => setOpen(false)}
        onSaved={(saved) => {
          setServices((prev) => {
            const idx = prev.findIndex(p => p._id === saved._id);
            if (idx === -1) return [saved, ...prev];
            const next = [...prev]; next[idx] = saved; return next;
          });
          setOpen(false);
        }}
        service={editing}
      />
    </div>
  );
};

export default ServiceList;
