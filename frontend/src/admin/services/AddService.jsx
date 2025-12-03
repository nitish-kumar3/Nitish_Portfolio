// // src/admin/services/ServiceSlideOver.jsx
// import React, { useEffect, useState } from "react";
// import { apiFetch } from "../api";
// import toast from "react-hot-toast";

// const ServiceSlideOver = ({ open, onClose, onSaved, service }) => {
//   const [form, setForm] = useState({ title: "", category: "", short: "", description: "", badges: [], imageFile: null, imagePreview: "" });

//   useEffect(() => {
//     if (service) {
//       setForm({
//         title: service.title || "",
//         category: service.category || "",
//         short: service.short || "",
//         description: service.description || "",
//         badges: service.badges || [],
//         imageFile: null,
//         imagePreview: service.image ? `http://localhost:5000${service.image}` : "",
//       });
//     } else {
//       setForm({ title: "", category: "", short: "", description: "", badges: [], imageFile: null, imagePreview: "" });
//     }
//   }, [service]);

//   const handleFile = (e) => {
//     const f = e.target.files[0];
//     if (!f) return;
//     setForm(prev => ({ ...prev, imageFile: f, imagePreview: URL.createObjectURL(f) }));
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       const fd = new FormData();
//       fd.append("title", form.title);
//       fd.append("category", form.category);
//       fd.append("short", form.short);
//       fd.append("description", form.description);
//       fd.append("badges", JSON.stringify(form.badges));
//       if (form.imageFile) fd.append("image", form.imageFile);

//       const url = service ? `http://localhost:5000/api/services/${service._id}` : `http://localhost:5000/api/services`;
//       const method = service ? "PUT" : "POST";

//       const token = localStorage.getItem("admin-token");
//       const res = await fetch(url, { method, body: fd, headers: token ? { Authorization: `Bearer ${token}` } : undefined });
//       if (!res.ok) throw new Error(await res.text());

//       const json = await res.json();
//       toast.success("Saved");
//       onSaved(json.service);
//     } catch (err) {
//       console.error(err);
//       toast.error("Save failed");
//     }
//   };

//   return (
//     <div className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}>
//       <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
//       <div className="absolute right-0 top-0 h-full w-96 bg-white p-6 overflow-auto">
//         <h2 className="text-xl font-bold mb-4">{service ? "Edit Service" : "Add Service"}</h2>

//         <form onSubmit={handleSave}>
//           <label className="block text-sm">Title</label>
//           <input className="w-full p-2 rounded bg-gray-100 mb-3" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} />

//           <label className="block text-sm">Category</label>
//           <input className="w-full p-2 rounded bg-gray-100 mb-3" value={form.category} onChange={(e) => setForm({...form, category: e.target.value})} />

//           <label className="block text-sm">Short</label>
//           <input className="w-full p-2 rounded bg-gray-100 mb-3" value={form.short} onChange={(e) => setForm({...form, short: e.target.value})} />

//           <label className="block text-sm">Description</label>
//           <textarea className="w-full p-2 rounded bg-gray-100 mb-3" rows="4" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} />

//           <label className="block text-sm">Badges (comma separated)</label>
//           <input className="w-full p-2 rounded bg-gray-100 mb-3" value={form.badges.join(",")} onChange={(e) => setForm({...form, badges: e.target.value.split(",").map(x => x.trim()).filter(Boolean)})} />

//           <label className="block text-sm">Image</label>
//           <input type="file" className="mb-3" onChange={handleFile} />
//           {form.imagePreview && <img src={form.imagePreview} alt="preview" className="w-full h-40 object-cover rounded mb-3" />}

//           <button className="w-full bg-green-900 text-white py-2 rounded">{service ? "Update" : "Create"}</button>
//         </form>

//         <button className="mt-3 w-full text-red-600" onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default ServiceSlideOver;




// // src/admin/services/AddService.jsx
// import React, { useEffect, useState } from "react";
// import { apiFetch } from "../api";
// import toast from "react-hot-toast";
// import { BACKEND_URL } from "../../utils/utils";

// const AddService = ({ open, onClose, onSaved, service }) => {
//   const [form, setForm] = useState({
//     title: "",
//     category: "",
//     short: "",
//     description: "",
//     badges: [],
//     imageFile: null,
//     imagePreview: "",
//   });

//   useEffect(() => {
//     if (service) {
//       setForm({
//         title: service.title || "",
//         category: service.category || "",
//         short: service.short || "",
//         description: service.description || "",
//         badges: service.badges || [],
//         imageFile: null,
//         imagePreview: service.image
//           ? `${BACKEND_URL}${service.image}`
//           : "",
//       });
//     } else {
//       setForm({
//         title: "",
//         category: "",
//         short: "",
//         description: "",
//         badges: [],
//         imageFile: null,
//         imagePreview: "",
//       });
//     }
//   }, [service]);

//   const handleFile = (e) => {
//     const f = e.target.files[0];
//     if (!f) return;
//     setForm((prev) => ({
//       ...prev,
//       imageFile: f,
//       imagePreview: URL.createObjectURL(f),
//     }));
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       const fd = new FormData();
//       fd.append("title", form.title);
//       fd.append("category", form.category);
//       fd.append("short", form.short);
//       fd.append("description", form.description);
//       fd.append("badges", JSON.stringify(form.badges));
//       if (form.imageFile) fd.append("image", form.imageFile);

//       const url = service
//         ? `${BACKEND_URL}/api/services/${service._id}`
//         : `${BACKEND_URL}/api/services`;

//       const method = service ? "PUT" : "POST";

//       const token = localStorage.getItem("admin-token");
//       const res = await fetch(url, {
//         method,
//         body: fd,
//         headers: token ? { Authorization: `Bearer ${token}` } : undefined,
//       });

//       if (!res.ok) throw new Error(await res.text());

//       const json = await res.json();
//       toast.success("Saved");
//       onSaved(json.service);
      
//     } catch (err) {
//       console.error(err);
//       toast.error("Save failed");
//     }
//   };

//   return (
//     <div className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}>
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/40"
//         onClick={onClose}
//       ></div>

//       {/* Panel */}
//       <div className="absolute right-0 top-0 h-full w-96 bg-green-50 dark:bg-gray-900 shadow-xl overflow-auto p-6 transform transition-all duration-300">
//         <h1 className="text-2xl font-bold text-green-800 dark:text-yellow-300 mb-4">
//           {service ? "Edit Service" : "Add New Service"}
//         </h1>

//         <form className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
//           <label className="font-semibold text-sm">Title</label>
//           <input
//             className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
//             value={form.title}
//             onChange={(e) =>
//               setForm({ ...form, title: e.target.value })
//             }
//           />

//           <label className="font-semibold text-sm">Category</label>
//           <input
//             className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
//             value={form.category}
//             onChange={(e) =>
//               setForm({ ...form, category: e.target.value })
//             }
//           />

//           <label className="font-semibold text-sm">Short</label>
//           <input
//             className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
//             value={form.short}
//             onChange={(e) =>
//               setForm({ ...form, short: e.target.value })
//             }
//           />

//           <label className="font-semibold text-sm">Description</label>
//           <textarea
//             rows="4"
//             className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
//             value={form.description}
//             onChange={(e) =>
//               setForm({ ...form, description: e.target.value })
//             }
//           />

//           <label className="font-semibold text-sm">Badges (comma separated)</label>
//           <input
//             className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
//             value={form.badges.join(",")}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 badges: e.target.value
//                   .split(",")
//                   .map((x) => x.trim())
//                   .filter(Boolean),
//               })
//             }
//           />

//           <label className="font-semibold text-sm">Image</label>
//           <input type="file" className="mt-1 mb-2" onChange={handleFile} />

//           {form.imagePreview && (
//             <img
//               src={form.imagePreview}
//               alt="preview"
//               className="w-full h-40 object-cover rounded border mb-3"
//             />
//           )}

//           <button
//             onClick={handleSave}
//             className="mt-3 w-full bg-yellow-400 text-green-900 py-2 font-semibold rounded-lg"
//           >
//             {service ? "Update Service" : "Create Service"}
//           </button>
//         </form>

//         <button
//           className="mt-4 w-full text-red-600 text-sm font-semibold"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddService;








import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../../utils/utils";

const AddService = ({ open, onClose, onSaved, service }) => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    short: "",
    description: "",
    badges: [],
    imageFile: null,
    imagePreview: "",
  });

  useEffect(() => {
    if (service) {
      setForm({
        title: service.title || "",
        category: service.category || "",
        short: service.short || "",
        description: service.description || "",
        badges: service.badges || [],
        imageFile: null,
        imagePreview: service.image || "",  // Cloudinary full URL
      });
    } else {
      setForm({
        title: "",
        category: "",
        short: "",
        description: "",
        badges: [],
        imageFile: null,
        imagePreview: "",
      });
    }
  }, [service]);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setForm((prev) => ({
      ...prev,
      imageFile: f,
      imagePreview: URL.createObjectURL(f),
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("category", form.category);
      fd.append("short", form.short);
      fd.append("description", form.description);
      fd.append("badges", JSON.stringify(form.badges));
      if (form.imageFile) fd.append("image", form.imageFile);

      const url = service
        ? `${BACKEND_URL}/api/services/${service._id}`
        : `${BACKEND_URL}/api/services`;

      const method = service ? "PUT" : "POST";

      const token = localStorage.getItem("admin-token");
      const res = await fetch(url, {
        method,
        body: fd,
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });

      if (!res.ok) throw new Error(await res.text());

      const json = await res.json();
      toast.success("Saved");
      onSaved(json.service);
      
    } catch (err) {
      console.error(err);
      toast.error("Save failed");
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}>
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      <div className="absolute right-0 top-0 h-full w-96 bg-green-50 dark:bg-gray-900 shadow-xl overflow-auto p-6">
        <h1 className="text-2xl font-bold text-green-800 dark:text-yellow-300 mb-4">
          {service ? "Edit Service" : "Add New Service"}
        </h1>

        <form className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
          <label className="font-semibold text-sm">Title</label>
          <input
            className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <label className="font-semibold text-sm">Category</label>
          <input
            className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <label className="font-semibold text-sm">Short</label>
          <input
            className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
            value={form.short}
            onChange={(e) =>
              setForm({ ...form, short: e.target.value })
            }
          />

          <label className="font-semibold text-sm">Description</label>
          <textarea
            rows="4"
            className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <label className="font-semibold text-sm">Badges</label>
          <input
            className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1 mb-3"
            value={form.badges.join(",")}
            onChange={(e) =>
              setForm({
                ...form,
                badges: e.target.value
                  .split(",")
                  .map((x) => x.trim())
                  .filter(Boolean),
              })
            }
          />

          <label className="font-semibold text-sm">Image</label>
          <input type="file" className="mt-1 mb-2" onChange={handleFile} />

          {form.imagePreview && (
            <img
              src={form.imagePreview}
              alt="preview"
              className="w-full h-40 object-cover rounded border mb-3"
            />
          )}

          <button
            onClick={handleSave}
            className="mt-3 w-full bg-yellow-400 text-green-900 py-2 font-semibold rounded-lg"
          >
            {service ? "Update Service" : "Create Service"}
          </button>
        </form>

        <button
          className="mt-4 w-full text-red-600 text-sm font-semibold"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddService;