// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import ThemeToggle from "./ThemeToggle";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
//           >
//             ☰
//           </button>

//           <ThemeToggle />
//         </div>

//         {/* Inject Page Content */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;




// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// // import ThemeToggle from "./ThemeToggle";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">

//       {/* SIDEBAR */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//       />

//       {/* MAIN CONTENT (RIGHT SIDE) */}
//       <div
//         className={`
//           flex-1 p-6 transition-all duration-300
//           ${isSidebarOpen ? "ml-64" : "ml-16"}
//         `}
//       >
//         {/* TOP BAR */}
//         <div className="flex justify-between items-center mb-6">
//           {/* Hamburger only for mobile */}
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
//           >
//             ☰
//           </button>

//           {/* Theme Toggle */}
//           {/* <ThemeToggle /> */}
//         </div>

//         {/* Page Content */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;





// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Auto-open sidebar on desktop
//   useEffect(() => {
//     if (window.innerWidth >= 768) {
//       setIsSidebarOpen(true);
//     }
//   }, []);

//   return (
//     <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen overflow-hidden">

//       {/* SIDEBAR - FIXED LEFT */}
//       <div className="fixed left-0 top-0 h-full z-40">
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       </div>

//       {/* MAIN CONTENT (SHIFTED RIGHT WHEN SIDEBAR OPEN) */}
//       <div
//         className={`
//           flex-1 p-6 transition-all duration-300

//           ${isSidebarOpen ? "md:ml-64" : "md:ml-16"} 
//           ml-0
//         `}
//       >
//         {/* TOP BAR */}
//         <div className="flex justify-between items-center mb-6">
//           {/* Hamburger only on mobile */}
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
//           >
//             ☰
//           </button>
//         </div>

//         {/* PAGE CONTENT */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;




// src/admin/Layout.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Auto-open on desktop only
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(true);
    }
  }, []);

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen relative">

      {/* SIDEBAR (always FIXED left) */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 
          transition-transform duration-300 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>

      {/* MOBILE BACKDROP */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* PAGE CONTENT */}
      <div
        className={`
          flex-1 p-4 md:p-6 transition-all duration-300 
          md:ml-${isSidebarOpen ? "64" : "16"} 
          ml-0
        `}
      >
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          {/* Mobile hamburger */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            ☰
          </button>
        </div>

        {/* PAGE CONTENT */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
