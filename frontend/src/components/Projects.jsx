// import React from "react";
// import Blogapp from "../assets/blog-app.png";
// import Chatapp from "../assets/chatapp1.png";
// import QuickAi from "../assets/QuickAi1.png";
// import home from "../assets/home.png";
// import Portfolio from "../assets/Portfolio1.png";

// const Projects = () => {
//   const projectJson = [
//     {
//       title: "Portfolio",
//       desc: "Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.",
//       image: Portfolio,
//       live: "https://your-portfolio-demo-link.com",
//       github: "https://github.com/yourusername/portfolio",
//     },
//     {
//       title: "Blogs-App",
//       desc: "A full MERN Stack Blogs App where users can create, read, like, and comment on blogs. Clean UI and modern design.",
//       image: Blogapp,
//       live: "https://your-blog-app-demo-link.com",
//       github: "https://github.com/nitish-kumar3/Blog-App",
//     },
//     {
//       title: "QuickAi",
//       desc: "Building an AI-powered platform that offers multiple work in one platform like quick and accurate responses to user queries, Image generation, CV Review, Background Remover, Object Remover etc.",
//       image: QuickAi,
//       live: "https://your-youtube-clone-demo-link.com",
//       github: "https://github.com/yourusername/youtube-clone",
//     },
//     {
//       title: "Chat-App",
//       desc: "Real-time Chat App that connects users instantly. Built with React, Node, Express, and Socket.io for seamless communication.",
//       image: Chatapp,
//       live: "https://your-chat-app-demo-link.com",
//       github: "https://github.com/nitish-kumar3/Chat-App",
//     },
//     {
//       title: "E-Commerce(EasyMart)",
//       desc: "A full MERN stack E-commerce platform that have saparate user and admin section where user can order and add to cart etc. and admin have access of dashboard where upload product ,check order-details etc.,",
//       image: home,
//       live: "https://your-course-selling-demo-link.com",
//       github: "https://github.com/nitish-kumar3/Course-Selling-App",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="relative bg-green-900 text-white py-20 px-6 md:px-16 overflow-hidden"
//     >
//       {/* Decorative Glow */}
//       <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-yellow-400 uppercase tracking-widest font-semibold font-display text-sm">
//             — My Work
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
//             Featured <span className="text-yellow-400">Projects</span>
//           </h2>
//           <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projectJson.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-800/80 backdrop-blur-sm border border-yellow-500 border-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-gray-400/40 hover:-translate-y-2 transition-all duration-500 group"
//             >
//               {/* Project Image */}
//               <div className="overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-7 flex flex-col justify-between space-y-1">
//                 <h3 className="text-2xl font-semibold font-display text-yellow-400 mb-1">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 font-displayer text-sm leading-relaxed">
//                   {item.desc}
//                 </p>

//                 {/* Buttons */}
//                 <div className="flex items-center gap-3 pt-7">
//                   <a
//                     href={item.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-yellow-400 text-gray-900 font-semibold font-displayer px-4 py-2 rounded-full text-sm hover:bg-yellow-500 transition"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     href={item.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="border border-yellow-400 text-yellow-400 font-semibold font-displayer px-4 py-2 rounded-full text-sm hover:bg-yellow-400 hover:text-gray-900 transition"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



// // src/components/Projects.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadProjects = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/projects");
//         setProjects(res.data);
//       } catch (error) {
//         console.error("Failed to load projects:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProjects();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-20 text-xl font-semibold">
//         Loading projects...
//       </div>
//     );
//   }

//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
//           Recent Projects
//         </h2>

//         {projects.length === 0 && (
//           <p className="text-center text-gray-600">No projects available.</p>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project._id}
//               className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
//             >
//               {project.image && (
//                 <img
//                   src={`http://localhost:5000${project.image}`}
//                   alt={project.title}
//                   className="w-full h-56 object-cover"
//                 />
//               )}

//               <div className="p-5">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   {project.description?.substring(0, 80)}...
//                 </p>

//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {project.tags?.split(",").map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-2 py-1 text-xs bg-gray-200 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <button className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// // src/components/Projects.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKEND_URL } from "../utils/utils";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadProjects = async () => {
//       try {
//         const res = await axios.get(`${BACKEND_URL}/api/projects`);
//         setProjects(res.data);
//       } catch (error) {
//         console.error("Failed to load projects:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProjects();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-20 text-xl font-semibold text-white">
//         Loading projects...
//       </div>
//     );
//   }

//   return (
//     <section
//       id="projects"
//       className="relative bg-green-900 text-white py-20 px-6 md:px-16 overflow-hidden"
//     >
//       {/* Decorative Glow */}
//       <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-yellow-400 uppercase tracking-widest font-semibold font-display text-sm">
//             — My Work
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
//             Featured <span className="text-yellow-400">Projects</span>
//           </h2>
//           <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((item) => (
//             <div
//               key={item._id}
//               className="bg-gray-800/80 backdrop-blur-sm border border-yellow-500 border-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-gray-400/40 hover:-translate-y-2 transition-all duration-500 group"
//             >
//               {/* Project Image */}
//               <div className="overflow-hidden">
//                 <img
//                   src={`${BACKEND_URL}${item.image}`}
//                   alt={item.title}
//                   className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-7 flex flex-col justify-between space-y-1">
//                 <h3 className="text-2xl font-semibold font-display text-yellow-400 mb-1">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-300 font-displayer text-sm leading-relaxed">
//                   {item.desc}
//                 </p>

//                 {/* Buttons */}
//                 <div className="flex items-center gap-25 pt-7">
//                   {item.live && (
//                     <a
//                       href={item.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-yellow-400 text-gray-900 font-semibold font-displayer px-4 py-2 rounded-full text-sm hover:bg-yellow-500 transition"
//                     >
//                       Live Demo
//                     </a>
//                   )}

//                   {item.github && (
//                     <a
//                       href={item.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="border border-yellow-400 text-yellow-400 font-semibold font-displayer px-4 py-2 rounded-full text-sm hover:bg-yellow-400 hover:text-gray-900 transition"
//                     >
//                       GitHub
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {projects.length === 0 && (
//           <p className="text-center text-gray-300 text-lg mt-10">
//             No projects added yet.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;





// src/components/Projects.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils/utils";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/projects`);
        setProjects(res.data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-white">
        Loading projects...
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="relative bg-green-900 text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold font-display text-sm">
            — My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((item) => {
            const imgSrc = item.image?.startsWith("http") ? item.image : `${BACKEND_URL}${item.image}`;

            return (
              <div
                key={item._id}
                className="bg-gray-800/80 backdrop-blur-sm border border-yellow-500 border-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-gray-400/40 hover:-translate-y-2 transition-all duration-500 group"
              >
                {/* Project Image */}
                <div className="overflow-hidden">
                  {item.image && (
                    <img
                      src={imgSrc}
                      alt={item.title}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col justify-between space-y-1">
                  <h3 className="text-2xl font-semibold font-display text-yellow-400 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 font-displayer text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex items-center gap-25 pt-7">
                    {item.live && (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-gray-900 font-semibold font-displayer px-4 py-2 rounded-full text-sm hover:bg-yellow-500 transition"
                      >
                        Live Demo
                      </a>
                    )}

                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-yellow-400 text-yellow-400 font-semibold font-displayer px-4 py-2 rounded-full text-sm hover:bg-yellow-400 hover:text-gray-900 transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-gray-300 text-lg mt-10">
            No projects added yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
