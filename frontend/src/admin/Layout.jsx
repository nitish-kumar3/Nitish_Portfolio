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




import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import ThemeToggle from "./ThemeToggle";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">

      {/* SIDEBAR */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* MAIN CONTENT (RIGHT SIDE) */}
      <div
        className={`
          flex-1 p-6 transition-all duration-300
          ${isSidebarOpen ? "ml-64" : "ml-16"}
        `}
      >
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          {/* Hamburger only for mobile */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            ☰
          </button>

          {/* Theme Toggle */}
          {/* <ThemeToggle /> */}
        </div>

        {/* Page Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
