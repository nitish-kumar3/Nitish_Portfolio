// import React, { useEffect, useState } from "react";
// import { apiFetch } from "../api";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { BACKEND_URL } from "../../utils/utils";

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const navigate = useNavigate();

//   const loadProjects = async () => {
//     try {
//       const data = await apiFetch(`${BACKEND_URL}/api/projects`);
//       setProjects(data);
//     } catch (err) {
//       toast.error("Failed to load projects");
//     }
//   };

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   const deleteProject = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this project?")) return;

//     try {
//       await apiFetch(`${BACKEND_URL}/api//projects/${id}`, {
//         method: "DELETE",
//       });
//       toast.success("Project deleted");
//       loadProjects();
//     } catch (err) {
//       toast.error("Delete failed");
//     }
//   };


//   return (
//     <div className="p-6 bg-green-100 min-h-screen dark:bg-gray-900">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-green-800 dark:text-yellow-300">Projects</h1>
//         <button
//           onClick={() => navigate("/admin/projects/new")}
//           className="bg-yellow-400 text-green-900 px-4 py-2 font-semibold rounded-lg"
//         >
//           ➕ Add Project
//         </button>
//       </div>

//       <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((p) => (
//           <div
//             key={p._id}
//             className="bg-white dark:bg-gray-800 rounded-xl shadow border border-yellow-400 overflow-hidden"
//           >
//             <img src={`${BACKEND_URL}${p.image}`} className="h-44 w-full object-cover" />

//             <div className="p-4">
//               <h2 className="text-xl font-bold text-green-800 dark:text-yellow-300">{p.title}</h2>
//               <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{p.desc}</p>

//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={() => navigate(`/admin/projects/edit/${p._id}`)}
//                   className="bg-green-600 text-white px-3 py-1 rounded-lg"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => deleteProject(p._id)}
//                   className="bg-red-600 text-white px-3 py-1 rounded-lg"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectList;



import React, { useEffect, useState } from "react";
import { apiFetch } from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../../utils/utils";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await apiFetch(`${BACKEND_URL}/api/projects`);
      // if your API returns { projects: [...] } adjust accordingly
      setProjects(Array.isArray(data) ? data : data?.projects ?? []);
    } catch (err) {
      console.error("loadProjects error:", err);
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const deleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    setDeletingId(id);
    try {
      // FIXED: removed the accidental double slash here
      await apiFetch(`${BACKEND_URL}/api/projects/${id}`, {
        method: "DELETE",
      });

      toast.success("Project deleted");
      // Optimistically update UI without another network request
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("deleteProject error:", err);
      toast.error("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-6 bg-green-100 min-h-screen dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-800 dark:text-yellow-300">Projects</h1>
        <button
          onClick={() => navigate("/admin/projects/new")}
          className="bg-yellow-400 text-green-900 px-4 py-2 font-semibold rounded-lg"
        >
          ➕ Add Project
        </button>
      </div>

      <div className="mt-6">
        {loading ? (
          <p className="text-sm text-gray-700 dark:text-gray-300">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-sm text-gray-700 dark:text-gray-300">No projects found.</p>
        ) : (
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow border border-yellow-400 overflow-hidden"
              >
                <img
                  src={p.image ? `${BACKEND_URL}${p.image}` : "/placeholder.png"}
                  alt={p.title ?? "Project image"}
                  className="h-44 w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/placeholder.png";
                  }}
                />

                <div className="p-4">
                  <h2 className="text-xl font-bold text-green-800 dark:text-yellow-300">{p.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{p.desc}</p>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => navigate(`/admin/projects/edit/${p._id}`)}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProject(p._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg disabled:opacity-60"
                      disabled={deletingId === p._id}
                    >
                      {deletingId === p._id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;

