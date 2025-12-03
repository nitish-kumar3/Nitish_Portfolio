// // src/admin/ProjectCard.jsx
// import React from "react";

// const ProjectCard = ({ project, onEdit, onDelete }) => {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col group hover:shadow-lg transition">
//       <div className="h-40 overflow-hidden rounded-md">
//         <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition" />
//       </div>

//       <div className="mt-3 flex-1">
//         <h4 className="font-semibold text-lg text-green-900 dark:text-yellow-300">{project.title}</h4>
//         <p className="text-sm text-gray-600 mt-1 line-clamp-3">{project.desc}</p>
//       </div>

//       <div className="mt-3 flex items-center justify-between">
//         <div className="flex gap-2">
//           <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs bg-yellow-400 text-green-900 px-3 py-1 rounded-full">Live</a>
//           <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs border border-yellow-400 text-yellow-400 px-3 py-1 rounded-full">Code</a>
//         </div>

//         <div className="flex gap-2">
//           <button onClick={() => onEdit(project)} className="px-3 py-1 bg-green-900 text-white rounded-md text-sm">Edit</button>
//           <button onClick={() => onDelete(project._id)} className="px-3 py-1 bg-red-600 text-white rounded-md text-sm">Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


// // // src/admin/ProjectCard.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const ProjectCard = ({ project, onEdit, onDelete }) => {
//   const img =
//     project.image ||
//     project.imageUrl ||
//     project.thumbnail ||
//     project.projectImage ||
//     "";

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="bg-white dark:bg-gray-800 border border-green-300 rounded-xl shadow-lg overflow-hidden"
//     >
//       {/* Project Image */}
//       <div className="h-40 w-full overflow-hidden">
//         {img ? (
//           <img
//             src={img}
//             alt={project.title}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
//             <span className="text-gray-600 dark:text-gray-300">No Image</span>
//           </div>
//         )}
//       </div>

//       <div className="p-4">
//         <h3 className="font-semibold text-lg text-green-900 dark:text-yellow-300">
//           {project.title}
//         </h3>

//         <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
//           {project.description?.slice(0, 80)}...
//         </p>

//         <div className="flex justify-between mt-4">
//           <button
//             onClick={() => onEdit(project)}
//             className="px-3 py-1 bg-yellow-400 text-green-800 rounded-md"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => onDelete(project._id)}
//             className="px-3 py-1 bg-red-600 text-white rounded-md"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;





import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onEdit, onDelete }) => {
  const img = project.image || project.imageUrl || "";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 border border-green-300 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="h-40 w-full overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-600 dark:text-gray-300">No Image</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-green-900 dark:text-yellow-300">
          {project.title}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
          {project.desc?.slice(0, 80)}...
        </p>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => onEdit(project)}
            className="px-3 py-1 bg-yellow-400 text-green-800 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(project._id)}
            className="px-3 py-1 bg-red-600 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
