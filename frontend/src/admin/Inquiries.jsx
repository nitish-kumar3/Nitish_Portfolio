
// // src/admin/Inquiries.jsx
// import React, { useEffect, useState } from "react";
// import { apiFetch } from "./api";
// import toast from "react-hot-toast";
// import { motion, AnimatePresence } from "framer-motion";

// const Inquiries = () => {
//   const [inquiries, setInquiries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const load = async () => {
//     setLoading(true);
//     try {
//       const data = await apiFetch("http://localhost:5000/api/inquiriess");
//       // ensure 'read' property exists
//       setInquiries(data.map(i => ({ ...i, read: i.read ?? false })));
//     } catch (err) {
//       toast.error("Failed to load inquiries");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!confirm("Delete this inquiry?")) return;
//     try {
//       await apiFetch(`http://localhost:5000/api/inquiriess/${id}`, { method: "DELETE" });
//       toast.success("Deleted");
//       setInquiries(prev => prev.filter(i => i._id !== id));
//     } catch (err) {
//       toast.error("Delete failed");
//     }
//   };

//   const toggleRead = async (id, current) => {
//     // optimistic UI update
//     setInquiries(prev => prev.map(i => i._id === id ? { ...i, read: !current } : i));
//     try {
//       // try to call backend patch; if not implemented backend will 404 and we revert on error
//       await apiFetch(`http://localhost:5000/api/inquiriess/${id}/read`, {
//         method: "PATCH",
//         body: JSON.stringify({ read: !current })
//       });
//       toast.success(!current ? "Marked read" : "Marked unread");
//     } catch (err) {
//       // revert
//       setInquiries(prev => prev.map(i => i._id === id ? { ...i, read: current } : i));
//       toast.error("Failed to update read status (backend may not implement PATCH)");
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold text-green-900 dark:text-yellow-300">Inquiries</h1>
//       <p className="text-sm text-gray-500 mt-1">Manage user messages and requests</p>

//       <div className="mt-6">
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
//           {loading ? (
//             <div className="py-20 text-center text-gray-500">Loading…</div>
//           ) : inquiries.length === 0 ? (
//             <div className="py-12 text-center text-gray-500">No inquiries yet.</div>
//           ) : (
//             <div className="space-y-3 bg-gray-500 dark:bg-gray-900 p-3 rounded-lg">
//               <AnimatePresence>
//                 {inquiries.map((inq) => (
//                   <motion.div
//                     key={inq._id}
//                     layout
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     className={`flex items-start justify-between gap-4 p-4 rounded-lg border
//                       ${inq.read ? "bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-700" : "bg-white dark:bg-gray-800 border-green-100 dark:border-green-900"}`}
//                   >
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2">
//                         <h3 className="font-semibold text-gray-800 dark:text-white">{inq.name}</h3>
//                         <span className="text-sm text-gray-400">• {new Date(inq.date || inq.createdAt).toLocaleString()}</span>
//                         {!inq.read && <span className="ml-2 px-2 py-0.5 bg-yellow-400 text-xs rounded">new</span>}
//                       </div>
//                       <div className="text-sm text-gray-600 dark:text-gray-300">{inq.email}</div>
//                       <p className="mt-2 text-gray-700 dark:text-gray-200">{inq.message}</p>
//                     </div>

//                     <div className="flex flex-col items-end gap-2">
//                       <button
//                         onClick={() => toggleRead(inq._id, inq.read)}
//                         className={`px-3 py-1 rounded-full text-sm cursor-pointer font-medium ${inq.read ? "bg-gray-200 text-gray-700" : "bg-green-800 text-white"}`}
//                       >
//                         {inq.read ? "Mark unread" : "Mark read"}
//                       </button>

//                       <button
//                         onClick={() => handleDelete(inq._id)}
//                         className="px-3 py-1 rounded-full bg-red-600 text-white text-lg cursor-pointer"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Inquiries;




// src/admin/Inquiries.jsx
import React, { useEffect, useState } from "react";
import { apiFetch } from "./api";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { BACKEND_URL } from "../utils/utils";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch(`${BACKEND_URL}/api/inquiriess`);
      setInquiries(data.map(i => ({ ...i, read: i.read ?? false })));
    } catch (err) {
      console.error(err);
      toast.error("Failed to load inquiries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this inquiry?")) return;
    try {
      await apiFetch(`${BACKEND_URL}/api/inquiriess/${id}`, { method: "DELETE" });
      toast.success("Deleted");
      setInquiries(prev => prev.filter(i => i._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  const toggleRead = async (id, current) => {
    // optimistic UI update
    setInquiries(prev => prev.map(i => i._id === id ? { ...i, read: !current } : i));
    try {
    //   await apiFetch(`${BACKEND_URL}/api/inquiriess/${id}/read`, {
    //     method: "PATCH",
    //     body: JSON.stringify({ read: !current }),
    //   });
    await apiFetch(`${BACKEND_URL}/api/inquiriess/${id}/read`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !current }),
    });

    toast.success(!current ? "Marked read" : "Marked unread");
  } catch (err) {
    // revert on failure
    setInquiries(prev => prev.map(i => i._id === id ? { ...i, read: current } : i));
    console.error(err);
    toast.error("Failed to update read status");
  }
};

return (
  <div className="bg-gradient-to-b from-green-100 to-green-50 dark:from-gray-900 dark:to-gray-800 min-h-screen p-6">
    <h1 className="text-2xl font-semibold text-green-900 dark:text-yellow-300 font-display">Inquiries</h1>
    <p className="text-sm text-gray-500 mt-1 font-display">Manage user messages and requests</p>

    <div className="mt-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
        {loading ? (
          <div className="py-20 text-center text-gray-500 font-display">Loading…</div>
        ) : inquiries.length === 0 ? (
          <div className="py-12 text-center text-gray-500 font-display">No inquiries yet.</div>
        ) : (
          <div className="space-y-3 bg-gray-500 dark:bg-gray-900 p-3 rounded-lg">
            <AnimatePresence>
              {inquiries.map((inq) => (
                <motion.div
                  key={inq._id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-start justify-between gap-4 p-4 rounded-lg border
                      ${inq.read ? "bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-700" : "bg-white dark:bg-gray-800 border-green-100 dark:border-green-900"}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-800 dark:text-white font-display">{inq.name}</h3>
                      <span className="text-sm text-gray-400 font-display">• {new Date(inq.date || inq.createdAt).toLocaleString()}</span>
                      {!inq.read && <span className="ml-2 px-2 py-0.5 bg-yellow-400 text-xs rounded font-display">new</span>}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-displayer">{inq.email}</div>
                    <p className="mt-2 text-gray-700 dark:text-gray-200 font-displayer">{inq.message}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => toggleRead(inq._id, inq.read)}
                      className={`px-3 py-1 rounded-full text-sm cursor-pointer font-medium ${inq.read ? "bg-gray-200 text-gray-700" : "bg-green-800 text-white"}`}
                    >
                      {inq.read ? "Mark unread" : "Mark read"}
                    </button>

                    <button
                      onClick={() => handleDelete(inq._1d || inq._id)}
                      className="px-3 py-1 rounded-full bg-red-600 text-white text-lg cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default Inquiries;
