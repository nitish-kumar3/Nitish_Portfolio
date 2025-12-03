// import React, { useState } from "react";
// import { apiFetch } from "../api";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { BACKEND_URL } from "../../utils/utils";

// const AddProject = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     title: "",
//     desc: "",
//     live: "",
//     github: "",
//   });

//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) return toast.error("Please upload an image");

//     const fd = new FormData();
//     Object.keys(form).forEach((key) => fd.append(key, form[key]));
//     fd.append("image", image);

//     try {
//       await fetch(`${BACKEND_URL}/api/projects`, {
//         method: "POST",
//         body: fd,
//       });

//       toast.success("Project Created");
//       navigate("/admin/projects");
//     } catch (err) {
//       toast.error("Create Failed");
//     }
//   };

//   return (
//     <div className="p-6 bg-green-50 min-h-screen dark:bg-gray-900">
//       <h1 className="text-3xl font-bold text-green-800 dark:text-yellow-300">
//         Add New Project
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow max-w-xl"
//       >
//         <label className="font-semibold">Project Title</label>
//         <input
//           type="text"
//           className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />

//         <label className="font-semibold mt-4 block">Description</label>
//         <textarea
//           className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1"
//           rows="3"
//           value={form.desc}
//           onChange={(e) => setForm({ ...form, desc: e.target.value })}
//         ></textarea>

//         <label className="font-semibold mt-4 block">Live Link</label>
//         <input
//           type="text"
//           className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1"
//           value={form.live}
//           onChange={(e) => setForm({ ...form, live: e.target.value })}
//         />

//         <label className="font-semibold mt-4 block">GitHub Link</label>
//         <input
//           type="text"
//           className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1"
//           value={form.github}
//           onChange={(e) => setForm({ ...form, github: e.target.value })}
//         />

//         <label className="font-semibold mt-4 block">Project Image</label>
//         <input type="file" className="mt-1" onChange={handleImage} />

//         {preview && (
//           <img
//             src={preview}
//             className="w-full h-40 object-cover rounded mt-3 border"
//           />
//         )}

//         <button
//           type="submit"
//           className="mt-5 w-full bg-yellow-400 text-green-900 py-2 font-semibold rounded-lg"
//         >
//           Create Project
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProject;





import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../utils/utils";

const AddProject = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    desc: "",
    live: "",
    github: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return toast.error("Please upload an image");

    const fd = new FormData();
    Object.keys(form).forEach((key) => fd.append(key, form[key]));
    fd.append("image", image);

    try {
      await fetch(`${BACKEND_URL}/api/projects`, {
        method: "POST",
        body: fd,
      });

      toast.success("Project Created");
      navigate("/admin/projects");
    } catch (err) {
      toast.error("Create Failed");
    }
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-green-800 dark:text-yellow-300">
        Add New Project
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow max-w-xl"
      >
        <label className="font-semibold">Project Title</label>
        <input
          type="text"
          className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <label className="font-semibold mt-4 block">Description</label>
        <textarea
          className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1"
          rows="3"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        ></textarea>

        <label className="font-semibold mt-4 block">Live Link</label>
        <input
          type="text"
          className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1"
          value={form.live}
          onChange={(e) => setForm({ ...form, live: e.target.value })}
        />

        <label className="font-semibold mt-4 block">GitHub Link</label>
        <input
          type="text"
          className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1"
          value={form.github}
          onChange={(e) => setForm({ ...form, github: e.target.value })}
        />

        <label className="font-semibold mt-4 block">Project Image</label>
        <input type="file" className="mt-1" onChange={handleImage} />

        {preview && (
          <img
            src={preview}
            className="w-full h-40 object-cover rounded mt-3 border"
          />
        )}

        <button
          type="submit"
          className="mt-5 w-full bg-yellow-400 text-green-900 py-2 font-semibold rounded-lg"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
