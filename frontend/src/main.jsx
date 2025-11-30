// // // src/main.jsx
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import { Toaster } from "react-hot-toast";

// // import Layout from "./admin/Layout";
// // import Dashboard from "./admin/Dashboard";
// // import Inquiries from "./admin/Inquiries";
// // import AdminLogin from "./admin/AdminLogin"; // your existing admin login page
// // import ProtectedRoute from "./admin/ProtectedRoute";

// // import "./index.css"; // tailwind

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <Toaster position="top-right" />
// //       <Routes>
// //         <Route path="/admin/login" element={<AdminLogin />} />
// //         <Route path="/admin" element={<Layout />}>
// //           <Route path="/admin/dashboard" element={
// //             <ProtectedRoute>
// //               <Dashboard />
// //             </ProtectedRoute>
// //           }
// //           />
// //           <Route path="inquiries" element={<Inquiries />} />
// //         </Route>
// //       </Routes>
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );




// // src/main.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import App from "./App"; // <- your frontend full website
// import Layout from "./admin/Layout";
// import Dashboard from "./admin/Dashboard";
// import Inquiries from "./admin/Inquiries";
// import AdminLogin from "./admin/AdminLogin";
// import ProtectedRoute from "./admin/ProtectedRoute";
// import ProjectList from "./admin/projects/ProjectList";
// import AddProject from "./admin/projects/AddProject";
// import EditProject from "./admin/projects/EditProject";




// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Toaster position="top-right" />

//       <Routes>
//         {/* PUBLIC WEBSITE */}
//         <Route path="/" element={<App />} />

//         {/* ADMIN LOGIN */}
//         <Route path="/admin/login" element={<AdminLogin />} />

//         {/* ADMIN LAYOUT */}
//         <Route path="/admin" element={<Layout />}>
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="inquiries"
//             element={
//               <ProtectedRoute>
//                 <Inquiries />
//               </ProtectedRoute>
//             }
//           />

//           <Route path="/admin/projects" element={<ProjectList />} />
//           <Route path="/admin/projects/new" element={<AddProject />} />
//           <Route path="/admin/projects/edit/:id" element={<EditProject />} />

//         </Route>

//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );



// // src/main.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import App from "./App";

// // ADMIN IMPORTS
// import Layout from "./admin/Layout";
// import Dashboard from "./admin/Dashboard";
// import Inquiries from "./admin/Inquiries";
// import AdminLogin from "./admin/AdminLogin";
// import ProtectedRoute from "./admin/ProtectedRoute";

// // PROJECT PAGES (if still needed)
// import ProjectList from "./admin/projects/ProjectList";
// import AddProject from "./admin/projects/AddProject";
// import EditProject from "./admin/projects/EditProject";


// import ServiceList from "./admin/services/ServiceList";

// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Toaster position="top-right" />

//       <Routes>

//         {/* PUBLIC WEBSITE */}
//         <Route path="/" element={<App />} />

//         {/* ADMIN LOGIN */}
//         <Route path="/admin/login" element={<AdminLogin />} />

//         {/* ADMIN PANEL (PROTECTED) */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <Layout />
//             </ProtectedRoute>
//           }
//         >

//           {/* default route: /admin → dashboard */}
//           <Route index element={<Dashboard />} />

//           {/* /admin/inquiries */}
//           <Route path="inquiries" element={<Inquiries />} />

//           {/* /admin/projects */}
//           <Route path="projects" element={<ProjectList />} />
//           <Route path="projects/new" element={<AddProject />} />
//           <Route path="projects/edit/:id" element={<EditProject />} />

//           <Route path="services" element={<ProtectedRoute><ServiceList /></ProtectedRoute>} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );




// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";

// ADMIN IMPORTS
import Layout from "./admin/Layout";
import Dashboard from "./admin/Dashboard";
import Inquiries from "./admin/Inquiries";
import AdminLogin from "./admin/AdminLogin";
import ProtectedRoute from "./admin/ProtectedRoute";

// PROJECT CRUD
import ProjectList from "./admin/projects/ProjectList";
import AddProject from "./admin/projects/AddProject";
import EditProject from "./admin/projects/EditProject";

// SERVICE CRUD
import ServiceList from "./admin/services/ServiceList";
import AddService from "./admin/services/AddService";
import EditService from "./admin/services/EditService";

import Settings from "./admin/Setting";

// import ServiceList from "./admin/services/ServiceList";
// import AddService from "./admin/services/ServiceCard";
// import EditService from "./admin/services/ServiceSlideOver";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>

        {/* PUBLIC WEBSITE */}
        <Route path="/" element={<App />} />

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN PANEL */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >

          {/* /admin → Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Inquiries */}
          <Route path="inquiries" element={<Inquiries />} />

          {/* PROJECTS CRUD */}
          <Route path="projects" element={<ProjectList />} />
          <Route path="projects/new" element={<AddProject />} />
          <Route path="projects/edit/:id" element={<EditProject />} />

          {/* SERVICES CRUD */}
          <Route path="services" element={<ServiceList />} />
          <Route path="services/new" element={<AddService />} />
          <Route path="services/edit/:id" element={<EditService />} />

          <Route path="/admin/settings" element={<Settings />} />



        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
