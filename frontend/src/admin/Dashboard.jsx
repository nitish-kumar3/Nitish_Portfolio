
// // src/admin/Dashboard.jsx
// import React, { useEffect, useState } from "react";
// import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { apiFetch } from "./api";
// import toast from "react-hot-toast";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import SlideOver from "./ProjectSlideOver";
// import ProjectCard from "./ProjectCard";
// import InquiriesPanel from "./InquiriesPanel";

// const Dashboard = () => {
//   const [inquiries, setInquiries] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [analytics, setAnalytics] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [isSlideOpen, setIsSlideOpen] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);

//   const navigate = useNavigate();

//   const loadAll = async () => {
//     setLoading(true);
//     try {
//       const [inq, prj] = await Promise.all([
//         apiFetch("http://localhost:5000/api/inquiriess"),
//         apiFetch("http://localhost:5000/api/projects"),
//       ]);
//       setInquiries(inq);
//       setProjects(prj);
//       // attempt analytics
//       try {
//         const a = await apiFetch("http://localhost:5000/api/analytics");
//         setAnalytics(a);
//       } catch {
//         setAnalytics({
//           viewsToday: 120,
//           viewsThisWeek: prj.length * 10 + 100,
//           labels: [
//             { name: "Mon", inquiries: 3 },
//             { name: "Tue", inquiries: 6 },
//             { name: "Wed", inquiries: 4 },
//             { name: "Thu", inquiries: 7 },
//             { name: "Fri", inquiries: 5 },
//             { name: "Sat", inquiries: 8 },
//             { name: "Sun", inquiries: 2 },
//           ],
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load dashboard");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadAll();
//   }, []);

//   const chartData = analytics?.labels || [];
//   const unread = inquiries.filter((i) => !i.read).length;

//   const openCreate = () => {
//     setEditingProject(null);
//     setIsSlideOpen(true);
//   };

//   const openEdit = (project) => {
//     setEditingProject(project);
//     setIsSlideOpen(true);
//   };

//   const handleDelete = async (id) => {
//     if (!confirm("Delete this project?")) return;
//     try {
//       await apiFetch(`http://localhost:5000/api/projects/${id}`, { method: "DELETE" });
//       toast.success("Project deleted");
//       setProjects((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to delete");
//     }
//   };

//   const handleSaved = (project) => {
//     // if created new then API returns created project; if updated may return updated
//     setProjects((prev) => {
//       const idx = prev.findIndex((p) => p._id === project._id);
//       if (idx === -1) return [project, ...prev];
//       const next = [...prev];
//       next[idx] = project;
//       return next;
//     });
//   };

//   return (
//     <div className="p-6 bg-gradient-to-b from-green-100 to-green-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
//       <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold text-green-900 dark:text-yellow-300">Dashboard Overview</h1>
//           <p className="text-gray-600 dark:text-gray-300 mt-1">Live insights of your portfolio</p>
//         </div>

//         <div className="flex items-center gap-3">
//           <button onClick={() => navigate("/admin/inquiries")} className="px-4 py-2 rounded-md bg-yellow-400 text-green-900">Go to Inquiries</button>
//           <button onClick={openCreate} className="px-4 py-2 rounded-md bg-green-900 text-white">Add Project</button>
//         </div>
//       </motion.div>

//       {/* stats */}
//       <div className="grid md:grid-cols-3 gap-6 mt-6">
//         <motion.div whileHover={{ scale: 1.02 }} onClick={() => navigate("/admin/inquiries")} className="p-6 bg-yellow-400 dark:bg-gray-800 rounded-xl shadow cursor-pointer">
//           <div className="flex justify-between items-center">
//             <div><div className="text-sm text-gray-800">Total Inquiries</div><div className="text-3xl font-bold text-green-900">{inquiries.length}</div></div>
//             <div className="bg-green-900 text-yellow-300 w-12 h-12 rounded-full flex items-center justify-center text-xl">✉</div>
//           </div>
//           <div className="text-sm text-gray-700 mt-3">Unread: <span className="font-semibold text-red-600">{unread}</span></div>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-green-300 dark:bg-gray-800 rounded-xl shadow">
//           <div className="flex justify-between items-center">
//             <div><div className="text-sm text-gray-800">Portfolio Views</div><div className="text-3xl font-bold text-green-900">{analytics?.viewsThisWeek}</div></div>
//             <div className="bg-yellow-300 text-green-900 w-12 h-12 rounded-full flex items-center justify-center text-xl">👁</div>
//           </div>
//           <div className="text-sm text-gray-700 mt-3">Today: {analytics?.viewsToday}</div>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.02 }} onClick={() => navigate("/admin/inquiries")} className="p-6 bg-yellow-400 dark:bg-gray-800 rounded-xl shadow cursor-pointer">
//           <div className="flex justify-between items-center">
//             <div><div className="text-sm text-gray-800">Messages</div><div className="text-3xl font-bold text-green-900">{inquiries.filter(i => i.message).length}</div></div>
//             <div className="bg-green-800 text-yellow-300 w-12 h-12 rounded-full flex items-center justify-center text-xl">💬</div>
//           </div>
//           <div className="text-sm text-gray-700 mt-3">Last 7 Days</div>
//         </motion.div>
//       </div>

//       {/* quick actions */}
//       <h3 className="mt-10 text-xl font-semibold text-green-800 dark:text-yellow-300">Quick Actions</h3>
//       <div className="grid md:grid-cols-4 gap-4 mt-4">
//         {[
//           { label: "View All Inquiries", icon: "📬", route: "/admin/inquiries" },
//           { label: "Manage Projects", icon: "🗂", route: "/admin/projects" },
//           { label: "Add New Project", icon: "➕", route: "/admin/projects/new" },
//           { label: "Settings", icon: "⚙", route: "/admin/settings" },
//         ].map((item, idx) => (
//           <motion.div key={idx} whileHover={{ scale: 1.05 }} onClick={() => navigate(item.route)} className="p-4 bg-white dark:bg-gray-800 shadow rounded-xl cursor-pointer flex items-center gap-3">
//             <span className="text-2xl">{item.icon}</span>
//             <p className="text-gray-800 dark:text-gray-200">{item.label}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Projects section */}
//       <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
//         <div className="flex justify-between items-center">
//           <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Projects</h3>
//           <div className="text-sm text-gray-500">{projects.length} projects</div>
//         </div>

//         <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map(p => (
//             <ProjectCard key={p._id} project={p} onEdit={openEdit} onDelete={handleDelete} />
//           ))}
//         </div>
//       </div>

//       {/* Inquiries panel */}
//       <div className="mt-8">
//         <InquiriesPanel compact data={inquiries.slice(0, 6)} refresh={loadAll} />
//       </div>

//       {/* Analytics chart */}
//       <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
//         <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Inquiries - Last 7 Days</h3>
//         <div className="mt-4" style={{ height: 260 }}>
//           <ResponsiveContainer>
//             <AreaChart data={chartData}>
//               <XAxis dataKey="name" stroke="#94a3b8" />
//               <YAxis stroke="#94a3b8" />
//               <Tooltip />
//               <Area type="monotone" dataKey="inquiries" stroke="#16a34a" fill="#bbf7d0" />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <SlideOver
//         open={isSlideOpen}
//         onClose={() => setIsSlideOpen(false)}
//         onSaved={handleSaved}
//         project={editingProject}
//       />
//     </div>
//   );
// };

// export default Dashboard;




// src/admin/Dashboard.jsx
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { apiFetch } from "./api";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SlideOver from "./ProjectSlideOver";
import ProjectCard from "./ProjectCard";
import InquiriesPanel from "./InquiriesPanel";
import { BACKEND_URL } from "../utils/utils";

const Dashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const navigate = useNavigate();

  const loadAll = async () => {
    setLoading(true);
    try {
      const [inq, prj, srv] = await Promise.all([
        apiFetch(`${BACKEND_URL}/api/inquiriess`),
        apiFetch(`${BACKEND_URL}/api/projects`),
        apiFetch(`${BACKEND_URL}/api/services`),
      ]);
      setInquiries(inq);
      setProjects(prj);
      setServices(srv);

      // try analytics; if backend not present, fallback to a computed/demo object
      try {
        const a = await apiFetch(`${BACKEND_URL}/api/analytics`);
        setAnalytics(a);
      } catch {
        setAnalytics({
          viewsToday: 120,
          viewsThisWeek: prj.length * 10 + 100,
          labels: [
            { name: "Mon", inquiries: 3 },
            { name: "Tue", inquiries: 6 },
            { name: "Wed", inquiries: 4 },
            { name: "Thu", inquiries: 7 },
            { name: "Fri", inquiries: 5 },
            { name: "Sat", inquiries: 8 },
            { name: "Sun", inquiries: 2 },
          ],
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
    // eslint-disable-next-line
  }, []);

  const chartData = analytics?.labels || [];
  const unread = inquiries.filter((i) => !i.read).length;

  const openCreate = () => {
    setEditingProject(null);
    setIsSlideOpen(true);
  };

  const openEdit = (project) => {
    setEditingProject(project);
    setIsSlideOpen(true);
  };

  const handleDeleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;
    try {
      await apiFetch(`${BACKEND_URL}/api/projects/${id}`, {
        method: "DELETE",
      });
      toast.success("Project deleted");
      setProjects((p) => p.filter((x) => x._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete project");
    }
  };

  const handleSaved = (project) => {
    // update or prepend
    setProjects((prev) => {
      const idx = prev.findIndex((p) => p._id === project._id);
      if (idx === -1) return [project, ...prev];
      const next = [...prev];
      next[idx] = project;
      return next;
    });
  };

  /* ---------------- SERVICES HANDLERS ---------------- */
  const goToServices = () => navigate("/admin/services");
  const goToAddService = () => navigate("/admin/services");
  // const goToAddService = () => navigate("/admin/services/new");

  const handleDeleteService = async (id) => {
    if (!confirm("Delete this service?")) return;
    try {
      await apiFetch(`${BACKEND_URL}/api/services/${id}`, {
        method: "DELETE",
      });
      toast.success("Service deleted");
      setServices((s) => s.filter((x) => x._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete service");
    }
  };

  const handleEditService = (service) => {
    // navigate to admin services edit page - implement service editor route there
    navigate("/admin/services");
    // navigate(`/admin/services/edit/${service._id}`);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-green-100 to-green-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-green-900 dark:text-yellow-300">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Live insights of your portfolio
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/admin/inquiries")}
            className="px-4 py-2 rounded-md bg-yellow-400 text-green-900"
          >
            Go to Inquiries
          </button>
          <button
            onClick={openCreate}
            className="px-4 py-2 rounded-md bg-green-900 text-white"
          >
            Add Project
          </button>
        </div>
      </motion.div>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate("/admin/inquiries")}
          className="p-6 bg-yellow-400 dark:bg-gray-800 rounded-xl shadow cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-800">Total Inquiries</div>
              <div className="text-3xl font-bold text-green-900">
                {inquiries.length}
              </div>
            </div>
            <div className="bg-green-900 text-yellow-300 w-12 h-12 rounded-full flex items-center justify-center text-xl">
              ✉
            </div>
          </div>
          <div className="text-sm text-gray-700 mt-3">
            Unread: <span className="font-semibold text-red-600">{unread}</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 bg-green-300 dark:bg-gray-800 rounded-xl shadow"
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-800">Portfolio Views</div>
              <div className="text-3xl font-bold text-green-900">
                {analytics?.viewsThisWeek}
              </div>
            </div>
            <div className="bg-yellow-300 text-green-900 w-12 h-12 rounded-full flex items-center justify-center text-xl">
              👁
            </div>
          </div>
          <div className="text-sm text-gray-700 mt-3">
            Today: {analytics?.viewsToday}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate("/admin/inquiries")}
          className="p-6 bg-yellow-400 dark:bg-gray-800 rounded-xl shadow cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-800">Messages</div>
              <div className="text-3xl font-bold text-green-900">
                {inquiries.filter((i) => i.message).length}
              </div>
            </div>
            <div className="bg-green-800 text-yellow-300 w-12 h-12 rounded-full flex items-center justify-center text-xl">
              💬
            </div>
          </div>
          <div className="text-sm text-gray-700 mt-3">Last 7 Days</div>
        </motion.div>
      </div>

      {/* QUICK ACTIONS */}
      <h3 className="mt-10 text-xl font-semibold text-green-800 dark:text-yellow-300">
        Quick Actions
      </h3>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {[
          { label: "View All Inquiries", icon: "📬", route: "/admin/inquiries" },
          { label: "Manage Projects", icon: "🗂", route: "/admin/projects" },
          { label: "Add New Project", icon: "➕", route: "/admin/projects/new" },
          { label: "Manage Services", icon: "🛠️", route: "/admin/services" },
          { label: "Add New Services", icon: "➕", route: "/admin/services/new" },
          { label: "Settings", icon: "⚙", route: "/admin/settings" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(item.route)}
            className="p-4 bg-white dark:bg-gray-800 shadow rounded-xl cursor-pointer flex items-center gap-3"
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="text-gray-800 dark:text-gray-200">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* PROJECTS */}
      {/* <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
            Projects
          </h3>
          <div className="text-sm text-gray-500">{projects.length} projects</div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p._id}
              project={p}
              onEdit={openEdit}
              onDelete={handleDeleteProject}
            />
          ))}
        </div>
      </div> */}

      {/* SERVICES */}
      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
            Services
          </h3>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500 mr-3">{services.length} services</div>
            <button
              onClick={goToAddService}
              className="px-3 py-1 rounded-md bg-green-900 text-white"
            >
              Add Service
            </button>
            <button
              onClick={goToServices}
              className="px-3 py-1 rounded-md bg-yellow-400 text-green-900"
            >
              Manage Services
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div
              key={s._id}
              whileHover={{ scale: 1.015 }}
              className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-900 text-yellow-400 mb-3 text-xl">
                  {s.icon ? <img src={s.icon} alt="" className="w-8 h-8 object-cover rounded" /> : "⚙"}
                </div>
                <h4 className="font-semibold text-green-900 dark:text-yellow-300">{s.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{s.short || s.desc || ""}</p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditService(s)}
                    className="px-3 py-1 rounded-full bg-yellow-400 text-green-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteService(s._id)}
                    className="px-3 py-1 rounded-full bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </div>
                <button
                  onClick={() => navigate("/admin/services")}
                  className="text-xs text-gray-500 hover:underline"
                >
                  Open →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* INQUIRIES PANEL */}
      <div className="mt-8">
        <InquiriesPanel compact data={inquiries.slice(0, 6)} refresh={loadAll} />
      </div>

      {/* ANALYTICS CHART */}
      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
          Inquiries - Last 7 Days
        </h3>
        <div className="mt-4" style={{ height: 260 }}>
          <ResponsiveContainer>
            <AreaChart data={chartData}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Area type="monotone" dataKey="inquiries" stroke="#16a34a" fill="#bbf7d0" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <SlideOver
        open={isSlideOpen}
        onClose={() => setIsSlideOpen(false)}
        onSaved={handleSaved}
        project={editingProject}
      />
    </div>
  );
};

export default Dashboard;
