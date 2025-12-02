// // src/admin/Sidebar.jsx
// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Sidebar = ({ isOpen, setIsOpen }) => {
//   const { pathname } = useLocation();
//   const menu = [
//     { label: "Dashboard", path: "/admin" },
//     { label: "Inquiries", path: "/admin/inquiries" },
//   ];

//   return (
//     <aside
//       className={`fixed z-50 top-0 left-0 h-screen transition-all duration-300
//         ${isOpen ? "w-64" : "w-16"} bg-gradient-to-b from-green-800 to-green-700 text-white shadow-lg`}
//     >
//       <div className="h-16 flex items-center px-4">
//         <button
//           onClick={() => setIsOpen((s) => !s)}
//           className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition cursor-pointer"
//         >
//           ☰
//         </button>
//         {isOpen && (
//           <div className="ml-3 text-lg font-bold flex items-center gap-1">
//             <span className="text-yellow-300 font-display">Nitish</span><span className="text-yellow-400"></span>
//           </div>
//         )}
//       </div>

//       <nav className="mt-6 px-2">
//         {menu.map((m) => {
//           const active = pathname === m.path || (m.path === "/admin" && pathname === "/admin");
//           return (
//             <Link
//               key={m.path}
//               to={m.path}
//               className={`flex items-center gap-3 px-3 py-3 my-1 rounded-lg transition
//                 ${active ? "bg-yellow-400/20 ring-1 ring-yellow-400 text-white" : "text-white/90 hover:bg-white/10"}`}
//             >
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center ${active ? "bg-yellow-400 text-green-900" : "bg-white/10"}`}>
//                 {m.label.charAt(0)}
//               </div>
//               {isOpen && <span className="font-medium">{m.label}</span>}
//             </Link>
//           );
//         })}
//       </nav>

//       <div className="absolute bottom-6 w-full px-3">
//         <button
//           onClick={() => {
//             localStorage.removeItem("admin-token");
//             window.location.href = "/admin/login";
//           }}
//           className="w-full px-3 py-2 rounded-md bg-yellow-400 text-green-900 font-semibold hover:bg-yellow-500 transition cursor-pointer"
//         >
//           {isOpen ? "Logout" : "⎋"}
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;




// // src/admin/Sidebar.jsx
// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Sidebar = ({ isOpen, setIsOpen }) => {
//   const { pathname } = useLocation();
//   const menu = [
//     { label: "Dashboard", path: "/admin" },
//     { label: "Inquiries", path: "/admin/inquiries" },
//     { label: "Projects", path: "/admin/projects" },
//     { label: "Services", path: "/admin/services" },
//   ];

//   return (
//     <aside
//       className={`fixed z-40 top-0 left-0 h-screen transition-all duration-300
//         ${isOpen ? "w-64" : "w-16"} bg-gradient-to-b from-green-900 to-green-800 text-white shadow-lg`}
//     >
//       <div className="h-16 flex items-center px-3">
//         <button
//           onClick={() => setIsOpen((s) => !s)}
//           className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
//         >
//           ☰
//         </button>
//         {isOpen && (
//           <div className="ml-3 text-lg font-bold flex items-center gap-1">
//             <span className="text-yellow-300">Nitish</span>
//             <span className="text-yellow-400">Admin</span>
//           </div>
//         )}
//       </div>

//       <nav className="mt-6 px-2">
//         {menu.map((m) => {
//           const active = pathname === m.path || (m.path === "/admin" && pathname === "/admin");
//           return (
//             <Link
//               key={m.path}
//               to={m.path}
//               className={`flex items-center gap-3 px-3 py-3 my-1 rounded-lg transition
//                 ${active ? "bg-yellow-400/20 ring-1 ring-yellow-400 text-white" : "text-white/90 hover:bg-white/10"}`}
//             >
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center ${active ? "bg-yellow-400 text-green-900" : "bg-white/10"}`}>
//                 {m.label.charAt(0)}
//               </div>
//               <span className={`${isOpen ? "" : "hidden"}`}>{m.label}</span>
//             </Link>
//           );
//         })}
//       </nav>

//       <div className="absolute bottom-6 w-full px-3">
//         <button
//           onClick={() => {
//             localStorage.removeItem("admin-token");
//             window.location.href = "/admin/login";
//           }}
//           className="w-full px-3 py-2 rounded-md bg-yellow-400 text-green-900 font-semibold hover:bg-yellow-500 transition"
//         >
//           {isOpen ? "Logout" : "⎋"}
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;




// src/admin/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation();
  const menu = [
    { label: "Dashboard", path: "/admin" },
    { label: "Inquiries", path: "/admin/inquiries" },
    { label: "Projects", path: "/admin/projects" },
    { label: "Services", path: "/admin/services" },
  ];

  return (
    <>
      {/* BACKDROP (only mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed z-40 top-0 left-0 h-screen 
          bg-gradient-to-b from-green-900 to-green-800 text-white shadow-lg 
          transition-all duration-300 ease-in-out
          
          /* Desktop: width change only */
          md:${isOpen ? "w-64" : "w-16"}

          /* Mobile: slide in/out */
          ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"} 
        `}
      >
        <div className="h-16 flex items-center px-3">
          <button
            onClick={() => setIsOpen((s) => !s)}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            ☰
          </button>

          {/* Show title only when open */}
          {isOpen && (
            <div className="ml-3 text-lg font-bold flex items-center gap-1">
              <span className="text-yellow-300">Nitish</span>
              <span className="text-yellow-400">Admin</span>
            </div>
          )}
        </div>

        <nav className="mt-6 px-2">
          {menu.map((m) => {
            const active =
              pathname === m.path ||
              (m.path === "/admin" && pathname === "/admin");

            return (
              <Link
                key={m.path}
                to={m.path}
                className={`flex items-center gap-3 px-3 py-3 my-1 rounded-lg transition
                ${
                  active
                    ? "bg-yellow-400/20 ring-1 ring-yellow-400 text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    active
                      ? "bg-yellow-400 text-green-900"
                      : "bg-white/10"
                  }`}
                >
                  {m.label.charAt(0)}
                </div>
                <span className={`${isOpen ? "" : "hidden md:inline"}`}>
                  {m.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 w-full px-3">
          <button
            onClick={() => {
              localStorage.removeItem("admin-token");
              window.location.href = "/admin/login";
            }}
            className="w-full px-3 py-2 rounded-md bg-yellow-400 text-green-900 font-semibold hover:bg-yellow-500 transition"
          >
            {isOpen ? "Logout" : "⎋"}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
