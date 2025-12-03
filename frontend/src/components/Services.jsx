// import React, { useState, useMemo, useEffect } from "react";
// import {
//   Search,
//   Filter,
//   Code,
//   Server,
//   Cpu,
//   Database,
//   GitBranch,
//   Zap,
//   MessageSquare
// } from "lucide-react";
// import Marquee from 'react-fast-marquee';

// const SERVICES_DATA = [
//   {
//     id: "fullstack",
//     title: "Full-stack Development",
//     category: "MERN",
//     short: "Frontend + backend + database — end-to-end web apps.",
//     description:
//       "I build production-ready web apps: React/Next frontend, Node/Express, MongoDB / SQL databases, authentication, and deployment pipelines.",
//     badges: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
//     icon: <Code size={20} />
//   },
//   {
//     id: "frontend",
//     title: "Frontend Development",
//     category: "React / Next",
//     short: "Fast, accessible, pixel-perfect UIs.",
//     description:
//       "I craft performant UI using React, Next.js, Tailwind CSS, accessibility (a11y), and component-driven design. Great focus on responsive & animation polish.",
//     badges: ["React", "Next.js", "Tailwind"],
//     icon: <GitBranch size={20} />
//   },
//   {
//     id: "backend",
//     title: "Backend Development",
//     category: "Node / Express / Django",
//     short: "Robust APIs, auth, and services.",
//     description:
//       "API design (REST / GraphQL), microservices, background jobs, authentication (JWT / OAuth), and integration with third-party APIs.",
//     badges: ["Node.js", "Express", "Postgres / MongoDB"],
//     icon: <Server size={20} />
//   },
//   {
//     id: "ai",
//     title: "AI & Automation",
//     category: "AI / Scripting",
//     short: "Automations, ML integration & bots.",
//     description:
//       "Automate workflows, integrate LLMs or ML microservices, build conversational assistants or data pipelines for automation and efficiency.",
//     badges: ["Python", "LLMs", "Automation"],
//     icon: <Zap size={20} />
//   },
//   {
//     id: "devops",
//     title: "Deployment & DevOps",
//     category: "Deploy / CI",
//     short: "Deploy, monitor, scale.",
//     description:
//       "CI/CD pipelines, containerization (Docker), deployment to AWS / DigitalOcean / Vercel, monitoring, and basic infra as code.",
//     badges: ["Docker", "CI/CD", "AWS"],
//     icon: <Cpu size={20} />
//   },
//   {
//     id: "cms",
//     title: "WordPress & CMS",
//     category: "WordPress / CMS",
//     short: "Custom themes, plugins, migrations.",
//     description:
//       "Custom WordPress themes and plugin development, headless WordPress, content migrations, and performance optimizations.",
//     badges: ["WordPress", "PHP", "Headless"],
//     icon: <Database size={20} />
//   }
// ];



// /* CATEGORY PILL */
// const CategoryPill = ({ children, active, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`px-3 py-1 rounded-full text-sm font-medium font-displayer transition cursor-pointer
//       ${active
//         ? "bg-yellow-500 text-white shadow-lg"
//         : "bg-white/80 backdrop-blur border border-gray-300 text-gray-800 hover:bg-gray-100 cursor-pointer"
//       }`}
//     aria-pressed={active}
//   >
//     {children}
//   </button>
// );

// /* SERVICE CARD */
// const ServiceCard = ({ service, onOpen }) => {
//   return (
//     <article
//       className="group relative bg-white/90 backdrop-blur-sm border border-green-100 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col justify-between cursor-pointer"
//       aria-labelledby={`service-${service.id}`}
//     >
//       <div>
//         <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-900 text-yellow-400 mb-4">
//           {service.icon}
//         </div>
//         <h3
//           id={`service-${service.id}`}
//           className="text-lg font-semibold font-display text-gray-900"
//         >
//           {service.title}
//         </h3>
//         <p className="text-sm font-displayer text-gray-600 mt-2">{service.short}</p>
//       </div>

//       <div className="mt-6 flex items-center justify-between">
//         <div className="flex gap-2 flex-wrap">
//           {service.badges.slice(0, 3).map((b) => (
//             <span
//               key={b}
//               className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700"
//             >
//               {b}
//             </span>
//           ))}
//         </div>

//         <button
//           onClick={() => onOpen(service)}
//           className="text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-900 font-display transition bg-yellow-400 cursor-pointer"
//           aria-label={`View more about ${service.title}`}
//         >
//           Learn more
//         </button>
//       </div>

//       {/* Ribbon */}
//       <div className="absolute -top-3 -left-3 px-3 py-1 rounded-br-lg bg-yellow-500 text-xs text-white font-semibold font-displayer">
//         {service.category}
//       </div>
//     </article>
//   );
// };

// export default function Services() {
//   const [q, setQ] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("relevance");
//   const [modalService, setModalService] = useState(null);

//   // Load Google fonts dynamically for this component
//   useEffect(() => {
//     const id = "nitish-service-fonts";
//     if (document.getElementById(id)) return;
//     const link = document.createElement("link");
//     link.id = id;
//     link.rel = "stylesheet";
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@300;400;500;700&display=swap";
//     document.head.appendChild(link);
//     return () => {
//       // optional cleanup: do not remove if other parts of app may use them
//       // document.head.removeChild(link);
//     };
//   }, []);

//   const categories = useMemo(
//     () => ["All", ...Array.from(new Set(SERVICES_DATA.map((s) => s.category)))],
//     []
//   );

//   const filtered = useMemo(() => {
//     const qLower = q.trim().toLowerCase();
//     let arr = SERVICES_DATA.filter((s) => {
//       if (category !== "All" && s.category !== category) return false;
//       if (!qLower) return true;
//       return (
//         s.title.toLowerCase().includes(qLower) ||
//         s.short.toLowerCase().includes(qLower) ||
//         s.description.toLowerCase().includes(qLower) ||
//         s.badges.join(" ").toLowerCase().includes(qLower)
//       );
//     });

//     if (sort === "alpha")
//       arr = arr.slice().sort((a, b) => a.title.localeCompare(b.title));

//     return arr;
//   }, [q, category, sort]);

//   async function submitInquiry(service, values) {
//     try {
//       const resp = await fetch("/api/inquiries", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ serviceId: service.id, ...values })
//       });
//       if (!resp.ok) throw new Error("Network error");
//       return await resp.json();
//     } catch (err) {
//       console.error("Inquiry failed", err);
//       throw err;
//     }
//   }

//   return (
//     <>
//       <div
//         className="relative bg-gradient-to-r from-green-800 via-yellow-500 to-green-700 py-3 overflow-hidden shadow-lg cursor-pointer"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-transparent to-green-400/20 blur-2xl"></div>

//         <Marquee
//           direction="left"
//           pauseOnHover={true}
//           speed={70}
//           gradient={false}
//           className="relative whitespace-nowrap text-white font-semibold text-lg flex items-center gap-12 py-3 cursor-pointer"
//         >
//           <div className="flex items-center gap-12 tracking-wide">
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">
//               ⭐ Hii Welcome to Nitish Portfolio Site. Click and Go to My
//             </span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">
//               ⭐ <a href="https://www.linkedin.com/in/nitish-kumar-531352270/" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Linkedin</a>
//             </span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">
//               ⭐ <a href="https://github.com/nitish-kumar3" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Github</a>
//             </span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">
//               ⭐ <a href="https://www.facebook.com/profile.php?id=100047232771418" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Facebook</a>
//             </span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">
//               ⭐ <a href="https://www.instagram.com/prajapati_nitish_123/" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Instagram</a>
//             </span>
//           </div>
//         </Marquee>
//       </div>


//       <main
//         id="services"
//         className="py-16 md:py-24 min-h-screen bg-gradient-to-br from-gray-300 via-green-400 to-gray-900 font-display"
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           {/* Header */}
//           <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer">
//             <div>
//               <p className="text-sm font-medium font-display text-yellow-500 inline-flex items-center gap-2">
//                 <Filter size={16} /> Services
//               </p>
//               <h1
//                 className="mt-2 text-3xl md:text-4xl font-extrabold font-display text-gray-900"
//               >
//                 What I do — Fullstack, Frontend, Backend & AI Automation
//               </h1>
//               <p className="mt-3 text-gray-900 max-w-xl font-displayer">
//                 I provide tailored development services across the stack — from
//                 pixel-perfect React UI to scalable backend APIs and AI-powered
//                 automations. Filter by category, search, and view details.
//               </p>
//             </div>

//             <div className="w-full md:w-auto flex gap-3 items-center cursor-pointer">
//               <div className="relative cursor-text">
//                 <Search
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   size={16}
//                 />
//                 <input
//                   value={q}
//                   onChange={(e) => setQ(e.target.value)}
//                   placeholder="Search services, tools, keywords..."
//                   className="pl-10 pr-3 py-2 border border-yellow-300 bg-white/90 backdrop-blur rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-green-700"
//                   aria-label="Search services"
//                 />
//               </div>

//               <select
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value)}
//                 className="py-2 px-3 border rounded-full bg-white/90 backdrop-blur font-displayer cursor-pointer"
//                 aria-label="Sort services"
//               >
//                 <option value="relevance">Most relevant</option>
//                 <option value="alpha">A → Z</option>
//               </select>
//             </div>
//           </header>

//           {/* Category Filters */}
//           <div className="mt-8 flex gap-3 flex-wrap cursor-pointer">
//             {categories.map((cat) => (
//               <CategoryPill
//                 key={cat}
//                 active={cat === category}
//                 onClick={() => setCategory(cat)}
//               >
//                 {cat}
//               </CategoryPill>
//             ))}
//           </div>

//           {/* Grid */}
//           <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
//             {filtered.map((s) => (
//               <ServiceCard key={s.id} service={s} onOpen={setModalService} />
//             ))}

//             {filtered.length === 0 && (
//               <div className="col-span-full text-center py-12 bg-white/90 backdrop-blur border border-gray-200 rounded-2xl">
//                 <p className="text-gray-500 font-displayer">
//                   No services match your search. Try another filter.
//                 </p>
//               </div>
//             )}
//           </section>

//           {/* CTA */}
//           <div className="mt-12 bg-white/90 backdrop-blur border border-green-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
//             <div>
//               <h3
//                 className="text-lg font-semibold font-display text-gray-900 cursor-pointer"
//               >
//                 Have a project in mind?
//               </h3>
//               <p className="text-sm font-displayer text-gray-900 cursor-pointer">
//                 Tell me about it — I’ll respond quickly with a clear plan &
//                 estimate.
//               </p>
//             </div>

//             <div className="flex items-center gap-3 cursor-pointer">
//               <a
//                 href="#contact"
//                 className="bg-yellow-500 text-white font-displayer px-5 py-2.5 rounded-full font-semibold shadow hover:bg-yellow-600"
//               >
//                 Let's talk
//               </a>
//               <a
//                 href="/#portfolio"
//                 className="border border-yellow-200 px-4 py-2 rounded-full text-white-900 bg-green-800 hover:bg-green-900 shadow font-medium font-displayer"
//               >
//                 View recent work
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Modal */}
//         {modalService && (
//           <div
//             role="dialog"
//             aria-modal="true"
//             className="fixed inset-0 z-50 flex items-center justify-center p-6 cursor-pointer"
//           >
//             <div
//               className="absolute inset-0 bg-black/40 cursor-pointer"
//               onClick={() => setModalService(null)}
//             />
//             <div className="relative bg-white/95 backdrop-blur border border-green-200 w-full max-w-3xl rounded-2xl p-6 shadow-2xl z-10 cursor-pointer" style={{ fontFamily: "'Roboto', sans-serif" }}>
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h2 className="text-2xl font-bold font-display text-gray-900">
//                     {modalService.title}
//                   </h2>
//                   <p className="mt-2 text-sm font-displayer text-gray-700">
//                     {modalService.description}
//                   </p>

//                   <div className="mt-4 flex gap-2 flex-wrap">
//                     {modalService.badges.map((b) => (
//                       <span
//                         key={b}
//                         className="text-xs bg-gray-100 px-2 py-1 rounded-full"
//                       >
//                         {b}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <button
//                     onClick={() => setModalService(null)}
//                     className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-4 py-2 font-medium cursor-pointer"
//                   >
//                     Close
//                   </button>

//                   <button
//                     onClick={async () => {
//                       try {
//                         const service = modalService;

//                         const resp = await fetch("http://localhost:5000/api/inquiries", {
//                           method: "POST",
//                           headers: { "Content-Type": "application/json" },
//                           body: JSON.stringify({
//                             serviceId: service.id,
//                             name: "Nitish",
//                             email: "nitish6206774025@gmail.com",
//                             message: `Hi, I am interested in your ${service.title} service.`,
//                           }),
//                         });

//                         if (!resp.ok) throw new Error("Failed to send");

//                         alert("Inquiry sent — I will contact you soon!");
//                       } catch (err) {
//                         console.error("Inquiry failed", err);
//                         alert("Failed to send inquiry");
//                       }

//                       setModalService(null);
//                     }}
//                     className="inline-flex items-center gap-2 bg-green-900 text-white font-displayer px-4 py-2 rounded-full cursor-pointer"
//                   >
//                     <MessageSquare size={16} /> Request Quote
//                   </button>

//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </>
//   );
// }




// // src/components/Services.jsx
// import React, { useState, useMemo, useEffect } from "react";
// import {
//   Search,
//   Filter,
//   Code,
//   Server,
//   Cpu,
//   Database,
//   GitBranch,
//   Zap,
//   MessageSquare
// } from "lucide-react";
// import { toast } from "react-hot-toast";
// import Marquee from "react-fast-marquee";


// const SERVICES_DATA = [
//   { id: "fullstack", title: "Full-stack Development", category: "MERN", short: "Frontend + backend + database — end-to-end web apps.", description: "I build production-ready web apps: React/Next frontend, Node/Express, MongoDB / SQL databases, authentication, and deployment pipelines.", badges: ["React", "Next.js", "Node.js", "Express", "MongoDB"], icon: <Code size={20} /> },
//   { id: "frontend", title: "Frontend Development", category: "React / Next", short: "Fast, accessible, pixel-perfect UIs.", description: "I craft performant UI using React, Next.js, Tailwind CSS, accessibility (a11y), and component-driven design. Great focus on responsive & animation polish.", badges: ["React", "Next.js", "Tailwind"], icon: <GitBranch size={20} /> },
//   { id: "backend", title: "Backend Development", category: "Node / Express / Django", short: "Robust APIs, auth, and services.", description: "API design (REST / GraphQL), microservices, background jobs, authentication (JWT / OAuth), and integration with third-party APIs.", badges: ["Node.js", "Express", "Postgres / MongoDB"], icon: <Server size={20} /> },
//   { id: "ai", title: "AI & Automation", category: "AI / Scripting", short: "Automations, ML integration & bots.", description: "Automate workflows, integrate LLMs or ML microservices, build conversational assistants or data pipelines for automation and efficiency.", badges: ["Python", "LLMs", "Automation"], icon: <Zap size={20} /> },
//   { id: "devops", title: "Deployment & DevOps", category: "Deploy / CI", short: "Deploy, monitor, scale.", description: "CI/CD pipelines, containerization (Docker), deployment to AWS / DigitalOcean / Vercel, monitoring, and basic infra as code.", badges: ["Docker", "CI/CD", "AWS"], icon: <Cpu size={20} /> },
//   { id: "cms", title: "WordPress & CMS", category: "WordPress / CMS", short: "Custom themes, plugins, migrations.", description: "Custom WordPress themes and plugin development, headless WordPress, content migrations, and performance optimizations.", badges: ["WordPress", "PHP", "Headless"], icon: <Database size={20} /> }
// ];

// /* CATEGORY PILL */
// const CategoryPill = ({ children, active, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`px-3 py-1 rounded-full text-sm font-medium font-displayer transition cursor-pointer
//       ${active ? "bg-yellow-500 text-white shadow-lg" : "bg-white/80 backdrop-blur border border-gray-300 text-gray-800 hover:bg-gray-100 cursor-pointer"}`}
//     aria-pressed={active}
//   >
//     {children}
//   </button>
// );

// /* SERVICE CARD */
// const ServiceCard = ({ service, onOpen }) => {
//   return (
//     <article
//       className="group relative bg-white/90 backdrop-blur-sm border border-green-100 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col justify-between cursor-pointer"
//       aria-labelledby={`service-${service.id}`}
//       onClick={() => onOpen(service)}
//     >
//       <div>
//         <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-900 text-yellow-400 mb-4">
//           {service.icon}
//         </div>
//         <h3 id={`service-${service.id}`} className="text-lg font-semibold font-display text-gray-900">
//           {service.title}
//         </h3>
//         <p className="text-sm font-displayer text-gray-600 mt-2">{service.short}</p>
//       </div>

//       <div className="mt-6 flex items-center justify-between">
//         <div className="flex gap-2 flex-wrap">
//           {service.badges.slice(0, 3).map((b) => (
//             <span key={b} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{b}</span>
//           ))}
//         </div>

//         <button
//           onClick={(e) => { e.stopPropagation(); onOpen(service); }}
//           className="text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-900 font-display transition bg-yellow-400 cursor-pointer"
//           aria-label={`View more about ${service.title}`}
//         >
//           Learn more
//         </button>
//       </div>

//       {/* Ribbon */}
//       <div className="absolute -top-3 -left-3 px-3 py-1 rounded-br-lg bg-yellow-500 text-xs text-white font-semibold font-displayer">
//         {service.category}
//       </div>
//     </article>
//   );
// };

// export default function Services() {
//   const [q, setQ] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("relevance");
//   const [modalService, setModalService] = useState(null);

//   // form states inside modal
//   const [formName, setFormName] = useState("");
//   const [formEmail, setFormEmail] = useState("");
//   const [formMessage, setFormMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Load Google fonts dynamically for this component
//   useEffect(() => {
//     const id = "nitish-service-fonts";
//     if (document.getElementById(id)) return;
//     const link = document.createElement("link");
//     link.id = id;
//     link.rel = "stylesheet";
//     link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@300;400;500;700&display=swap";
//     document.head.appendChild(link);
//     // no cleanup to avoid removing while other pages might use fonts
//   }, []);

//   const categories = useMemo(() => ["All", ...Array.from(new Set(SERVICES_DATA.map((s) => s.category)))], []);

//   const filtered = useMemo(() => {
//     const qLower = q.trim().toLowerCase();
//     let arr = SERVICES_DATA.filter((s) => {
//       if (category !== "All" && s.category !== category) return false;
//       if (!qLower) return true;
//       return (
//         s.title.toLowerCase().includes(qLower) ||
//         s.short.toLowerCase().includes(qLower) ||
//         s.description.toLowerCase().includes(qLower) ||
//         s.badges.join(" ").toLowerCase().includes(qLower)
//       );
//     });

//     if (sort === "alpha") arr = arr.slice().sort((a, b) => a.title.localeCompare(b.title));
//     return arr;
//   }, [q, category, sort]);

//   // FRONTEND submitInquiry calls backend; keep full URL (adjust on deployment)
//   async function submitInquiryAPI(payload) {
//     // const BACKEND = process.env.REACT_APP_API_URL || "http://localhost:5000";
//     // const resp = await fetch(`${BACKEND}/api/inquiries`, {
//     const resp = await fetch("http://localhost:5000/api/inquiries", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });
//     if (!resp.ok) {
//       const text = await resp.text().catch(() => null);
//       throw new Error(text || "Network error");
//     }
//     return resp.json();
//   }

//   const openModal = (service) => {
//     setModalService(service);
//     // reset form fields when modal opens
//     setFormName("");
//     setFormEmail("");
//     setFormMessage("");
//   };

//   const handleSend = async () => {
//     // basic validation
//     if (!formName.trim()) return alert("Please enter your name");
//     if (!formEmail.trim() || !/^\S+@\S+\.\S+$/.test(formEmail)) return alert("Please enter a valid email");
//     if (!formMessage.trim()) return alert("Please enter a message");

//     setLoading(true);
//     try {
//       await submitInquiryAPI({
//         serviceId: modalService.id,
//         name: formName,
//         email: formEmail,        // <-- user's email is sent to backend
//         message: formMessage,
//       });

//       // alert("Inquiry sent — I will contact you soon!");
//       toast.success("Inquiry sent successfully — I will contact you soon!");

//       // Reset form after success
//       setFormName("");
//       setFormEmail("");
//       setFormMessage("");

//       // Close modal
//       setModalService(null);
//     } catch (err) {
//       console.error("Inquiry failed", err);
//       toast.error("Failed to send inquiry. Please try again later.")
//       // alert("Failed to send inquiry. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="relative bg-gradient-to-r from-green-800 via-yellow-500 to-green-700 py-3 overflow-hidden shadow-lg cursor-pointer">
//         <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-transparent to-green-400/20 blur-2xl"></div>
//         <Marquee direction="left" pauseOnHover speed={70} gradient={false} className="relative whitespace-nowrap text-white font-semibold text-lg flex items-center gap-12 py-3 cursor-pointer">
//           <div className="flex items-center gap-12 tracking-wide">
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">⭐ Hii Welcome to Nitish Portfolio Site. Click and Go to My</span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">⭐ <a href="https://www.linkedin.com/in/nitish-kumar-531352270/" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Linkedin</a></span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">⭐ <a href="https://github.com/nitish-kumar3" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Github</a></span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">⭐ <a href="https://www.facebook.com/profile.php?id=100047232771418" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Facebook</a></span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">⭐ <a href="https://www.instagram.com/prajapati_nitish_123/" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Instagram</a></span>
//           </div>
//         </Marquee>
//       </div>

//       <main id="services" className="py-16 md:py-24 min-h-screen bg-gradient-to-br from-gray-300 via-green-400 to-gray-900 font-display">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           {/* Header */}
//           <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer">
//             <div>
//               <p className="text-sm font-medium font-display text-yellow-500 inline-flex items-center gap-2"><Filter size={16} /> Services</p>
//               <h1 className="mt-2 text-3xl md:text-4xl font-extrabold font-display text-gray-900">What I do — Fullstack, Frontend, Backend & AI Automation</h1>
//               <p className="mt-3 text-gray-900 max-w-xl font-displayer">I provide tailored development services across the stack — from pixel-perfect React UI to scalable backend APIs and AI-powered automations. Filter by category, search, and view details.</p>
//             </div>

//             <div className="w-full md:w-auto flex gap-3 items-center cursor-pointer">
//               <div className="relative cursor-text">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//                 <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search services, tools, keywords..." className="pl-10 pr-3 py-2 border border-yellow-300 bg-white/90 backdrop-blur rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-green-700" aria-label="Search services" />
//               </div>

//               <select value={sort} onChange={(e) => setSort(e.target.value)} className="py-2 px-3 border rounded-full bg-white/90 backdrop-blur font-displayer cursor-pointer" aria-label="Sort services">
//                 <option value="relevance">Most relevant</option>
//                 <option value="alpha">A → Z</option>
//               </select>
//             </div>
//           </header>

//           {/* Category Filters */}
//           <div className="mt-8 flex gap-3 flex-wrap cursor-pointer">
//             {categories.map((cat) => (
//               <CategoryPill key={cat} active={cat === category} onClick={() => setCategory(cat)}>{cat}</CategoryPill>
//             ))}
//           </div>

//           {/* Grid */}
//           <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
//             {filtered.map((s) => (
//               <ServiceCard key={s.id} service={s} onOpen={openModal} />
//             ))}

//             {filtered.length === 0 && (
//               <div className="col-span-full text-center py-12 bg-white/90 backdrop-blur border border-gray-200 rounded-2xl">
//                 <p className="text-gray-500 font-displayer">No services match your search. Try another filter.</p>
//               </div>
//             )}
//           </section>

//           {/* CTA */}
//           <div className="mt-12 bg-white/90 backdrop-blur border border-green-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
//             <div>
//               <h3 className="text-lg font-semibold font-display text-gray-900 cursor-pointer">Have a project in mind?</h3>
//               <p className="text-sm font-displayer text-gray-900 cursor-pointer">Tell me about it — I’ll respond quickly with a clear plan & estimate.</p>
//             </div>

//             <div className="flex items-center gap-3 cursor-pointer">
//               <a href="#contact" className="bg-yellow-500 text-white font-displayer px-5 py-2.5 rounded-full font-semibold shadow hover:bg-yellow-600">Let's talk</a>
//               <a href="/#portfolio" className="border border-yellow-200 px-4 py-2 rounded-full text-white-900 bg-green-800 hover:bg-green-900 shadow font-medium font-displayer">View recent work</a>
//             </div>
//           </div>
//         </div>

//         {/* Modal */}
//         {modalService && (
//           <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-6">
//             <div className="absolute inset-0 bg-black/40" onClick={() => setModalService(null)} />
//             <div className="relative bg-white/95 backdrop-blur border border-green-200 w-full max-w-3xl rounded-2xl p-6 shadow-2xl z-10" style={{ fontFamily: "'Roboto', sans-serif" }}>
//               <div className="flex flex-col gap-4">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <h2 className="text-2xl font-bold font-display text-gray-900">{modalService.title}</h2>
//                     <p className="mt-2 text-sm font-displayer text-gray-700">{modalService.description}</p>

//                     <div className="mt-4 flex gap-2 flex-wrap">
//                       {modalService.badges.map((b) => (
//                         <span key={b} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{b}</span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-2">
//                     <button onClick={() => setModalService(null)} className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-4 py-2 font-medium cursor-pointer">Close</button>
//                   </div>
//                 </div>

//                 {/* FORM */}
//                 <div className="mt-2">
//                   <label className="block text-sm font-medium text-gray-700">Your Name</label>
//                   <input value={formName} onChange={(e) => setFormName(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" placeholder="Enter your name" />

//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-gray-700">Your Email</label>
//                     <input value={formEmail} onChange={(e) => setFormEmail(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" placeholder="Enter your email" />
//                   </div>

//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-gray-700">Message</label>
//                     <textarea value={formMessage} onChange={(e) => setFormMessage(e.target.value)} rows="4" className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" placeholder={`Write your query about ${modalService.title}`} />
//                   </div>

//                   <div className="mt-4 flex items-center justify-end gap-3">
//                     <button onClick={() => setModalService(null)} className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-4 py-2 font-medium cursor-pointer">Cancel</button>

//                     <button onClick={handleSend} disabled={loading} className="inline-flex items-center gap-2 bg-green-900 text-white font-displayer px-4 py-2 rounded-full cursor-pointer">
//                       {loading ? "Sending..." : <>
//                         <MessageSquare size={16} /> Request Quote
//                       </>}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </>
//   );
// }








// // src/components/Services.jsx
// import React, { useState, useMemo, useEffect } from "react";
// import {
//   Search,
//   Filter,
//   Code,
//   Server,
//   Cpu,
//   Database,
//   GitBranch,
//   Zap,
//   MessageSquare,
// } from "lucide-react";
// import { toast } from "react-hot-toast";
// import Marquee from "react-fast-marquee";
// import { BACKEND_URL } from "../utils/utils";

// export default function Services() {
//   const [q, setQ] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("relevance");
//   const [modalService, setModalService] = useState(null);
//   const [services, setServices] = useState([]);

//   // form states inside modal
//   const [formName, setFormName] = useState("");
//   const [formEmail, setFormEmail] = useState("");
//   const [formMessage, setFormMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // load services from backend
//   useEffect(() => {
//     fetchServices();
//   }, []);

//   async function fetchServices() {
//     try {
//       const res = await fetch(`${BACKEND_URL}/api/services`);
//       const data = await res.json();
//       setServices(data);
//     } catch (err) {
//       console.error("Failed to load services", err);
//     }
//   }

//   const categories = useMemo(
//     () => ["All", ...Array.from(new Set(services.map((s) => s.category)))],
//     [services]
//   );

//   const filtered = useMemo(() => {
//     const qLower = q.trim().toLowerCase();
//     let arr = services.filter((s) => {
//       if (category !== "All" && s.category !== category) return false;
//       if (!qLower) return true;
//       return (
//         s.title.toLowerCase().includes(qLower) ||
//         s.short.toLowerCase().includes(qLower) ||
//         s.description.toLowerCase().includes(qLower) ||
//         (s.badges || []).join(" ").toLowerCase().includes(qLower)
//       );
//     });

//     if (sort === "alpha") arr = arr.slice().sort((a, b) => a.title.localeCompare(b.title));
//     return arr;
//   }, [q, category, sort, services]);

//   async function submitInquiryAPI(payload) {
//     const resp = await fetch(`${BACKEND_URL}/api/inquiries`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });
//     if (!resp.ok) {
//       const text = await resp.text().catch(() => null);
//       throw new Error(text || "Network error");
//     }
//     return resp.json();
//   }

//   const openModal = (service) => {
//     setModalService(service);
//     setFormName("");
//     setFormEmail("");
//     setFormMessage("");
//   };

//   const handleSend = async () => {
//     if (!formName.trim()) return toast.error("Please enter your name");
//     if (!formEmail.trim() || !/^\S+@\S+\.\S+$/.test(formEmail)) return toast.error("Please enter a valid email");
//     if (!formMessage.trim()) return toast.error("Please enter a message");

//     setLoading(true);
//     try {
//       await submitInquiryAPI({
//         serviceId: modalService._id || modalService.id,
//         serviceTitle: modalService.title,
//         name: formName,
//         email: formEmail,
//         message: formMessage,
//       });

//       toast.success("Inquiry sent successfully — I will contact you soon!");
//       setFormName("");
//       setFormEmail("");
//       setFormMessage("");
//       setModalService(null);
//     } catch (err) {
//       console.error("Inquiry failed", err);
//       toast.error("Failed to send inquiry. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* Small Service Card (uses backend image if present) */
//   const ServiceCard = ({ s }) => {
//     return (
//       <article
//         className="group relative bg-white/90 backdrop-blur-sm border border-green-100 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col justify-between cursor-pointer"
//         onClick={() => openModal(s)}
//       >
//         <div>
//           <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-900 text-yellow-400 mb-4">
//             {/* If backend stored image (small icon), else show first badge */}
//             {s.image ? (
//               <img src={`${BACKEND_URL}${s.image}`} alt={s.title} className="w-8 h-8 object-cover rounded" />
//             ) : <Code size={20} />}
//           </div>

//           <h3 className="text-lg font-semibold font-display text-gray-900">{s.title}</h3>
//           <p className="text-sm font-displayer text-gray-600 mt-2">{s.short}</p>
//         </div>

//         <div className="mt-6 flex items-center justify-between">
//           <div className="flex gap-2 flex-wrap">
//             {(s.badges || []).slice(0, 3).map((b) => (
//               <span key={b} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{b}</span>
//             ))}
//           </div>

//           <button onClick={(e)=>{ e.stopPropagation(); openModal(s); }} className="text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-900 font-display transition bg-yellow-400 cursor-pointer">
//             Learn more
//           </button>
//         </div>

//         <div className="absolute -top-3 -left-3 px-3 py-1 rounded-br-lg bg-yellow-500 text-xs text-white font-semibold font-displayer">
//           {s.category}
//         </div>
//       </article>
//     );
//   };

//   return (
//     <>
//       <div className="relative bg-gradient-to-r from-green-800 via-yellow-500 to-green-700 py-3 overflow-hidden shadow-lg cursor-pointer">
//         <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-transparent to-green-400/20 blur-2xl"></div>
//         <Marquee direction="left" pauseOnHover speed={70} gradient={false} className="relative whitespace-nowrap text-white font-semibold text-lg flex items-center gap-12 py-3 cursor-pointer">
//           <div className="flex items-center gap-12 tracking-wide">
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">⭐ Hii Welcome to Nitish Portfolio Site. Click and Go to My</span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">⭐ <a href="https://www.linkedin.com/in/nitish-kumar-531352270/" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Linkedin</a></span>
//             <span className="hover:text-yellow-200 font-displayer transition duration-300">⭐ <a href="https://github.com/nitish-kumar3" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-4">Github</a></span>
//           </div>
//         </Marquee>
//       </div>

//       <main id="services" className="py-16 md:py-24 min-h-screen bg-gradient-to-br from-gray-300 via-green-400 to-gray-900 font-display">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer">
//             <div>
//               <p className="text-sm font-medium font-display text-yellow-500 inline-flex items-center gap-2"><Filter size={16} /> Services</p>
//               <h1 className="mt-2 text-3xl md:text-4xl font-extrabold font-display text-gray-900">What I do — Fullstack, Frontend, Backend & AI Automation</h1>
//               <p className="mt-3 text-gray-900 max-w-xl font-displayer">I provide tailored development services across the stack — from pixel-perfect React UI to scalable backend APIs and AI-powered automations. Filter by category, search, and view details.</p>
//             </div>

//             <div className="w-full md:w-auto flex gap-3 items-center cursor-pointer">
//               <div className="relative cursor-text">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//                 <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search services, tools, keywords..." className="pl-10 pr-3 py-2 border border-yellow-300 bg-white/90 backdrop-blur rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-green-700" aria-label="Search services" />
//               </div>

//               <select value={sort} onChange={(e) => setSort(e.target.value)} className="py-2 px-3 border rounded-full bg-white/90 backdrop-blur font-displayer cursor-pointer" aria-label="Sort services">
//                 <option value="relevance">Most relevant</option>
//                 <option value="alpha">A → Z</option>
//               </select>
//             </div>
//           </header>

//           <div className="mt-8 flex gap-3 flex-wrap cursor-pointer">
//             {categories.map((cat) => (
//               <button key={cat} onClick={() => setCategory(cat)} className={`px-3 py-1 rounded-full text-sm font-medium ${cat === category ? "bg-yellow-500 text-white" : "bg-white/80"}`}>{cat}</button>
//             ))}
//           </div>

//           <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filtered.map((s) => <ServiceCard key={s._id} s={s} />)}

//             {filtered.length === 0 && (
//               <div className="col-span-full text-center py-12 bg-white/90 backdrop-blur border border-gray-200 rounded-2xl">
//                 <p className="text-gray-500 font-displayer">No services match your search. Try another filter.</p>
//               </div>
//             )}
//           </section>

//           <div className="mt-12 bg-white/90 backdrop-blur border border-green-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
//             <div>
//               <h3 className="text-lg font-semibold font-display text-gray-900 cursor-pointer">Have a project in mind?</h3>
//               <p className="text-sm font-displayer text-gray-900 cursor-pointer">Tell me about it — I’ll respond quickly with a clear plan & estimate.</p>
//             </div>

//             <div className="flex items-center gap-3 cursor-pointer">
//               <a href="#contact" className="bg-yellow-500 text-white font-displayer px-5 py-2.5 rounded-full font-semibold shadow hover:bg-yellow-600">Let's talk</a>
//               <a href="/#portfolio" className="border border-yellow-200 px-4 py-2 rounded-full text-white-900 bg-green-800 hover:bg-green-900 shadow font-medium font-displayer">View recent work</a>
//             </div>
//           </div>
//         </div>

//         {/* Modal */}
//         {/* {modalService && (
//           <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-6">
//             <div className="absolute inset-0 bg-black/40" onClick={() => setModalService(null)} />
//             <div className="relative bg-white/95 backdrop-blur border border-green-200 w-full max-w-3xl rounded-2xl p-6 shadow-2xl z-10">
//               <div className="flex flex-col gap-4">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <h2 className="text-2xl font-bold font-display text-gray-900">{modalService.title}</h2>
//                     <p className="mt-2 text-sm font-displayer text-gray-700">{modalService.description}</p>

//                     <div className="mt-4 flex gap-2 flex-wrap">
//                       {(modalService.badges || []).map((b) => <span key={b} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{b}</span>)}
//                     </div>

//                     {modalService.image && (
//                       <img src={`http://localhost:5000${modalService.image}`} alt={modalService.title} className="w-full h-48 object-cover rounded mt-4" />
//                     )}
//                   </div>

//                   <div className="flex flex-col gap-2">
//                     <button onClick={() => setModalService(null)} className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-4 py-2 font-medium">Close</button>
//                   </div>
//                 </div>

//                 <div className="mt-2">
//                   <label className="block text-sm font-medium text-gray-700">Your Name</label>
//                   <input value={formName} onChange={(e) => setFormName(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" placeholder="Enter your name" />

//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-gray-700">Your Email</label>
//                     <input value={formEmail} onChange={(e) => setFormEmail(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" placeholder="Enter your email" />
//                   </div>

//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-gray-700">Message</label>
//                     <textarea value={formMessage} onChange={(e) => setFormMessage(e.target.value)} rows="4" className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2" placeholder={`Write your query about ${modalService.title}`} />
//                   </div>

//                   <div className="mt-4 flex items-center justify-end gap-3">
//                     <button onClick={() => setModalService(null)} className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-4 py-2 font-medium">Cancel</button>

//                     <button onClick={handleSend} disabled={loading} className="inline-flex items-center gap-2 bg-green-900 text-white font-displayer px-4 py-2 rounded-full">
//                       {loading ? "Sending..." : <>
//                         <MessageSquare size={16} /> Request Quote
//                       </>}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )} */}

//         {/* Modal */}
// {modalService && (
//   <div
//     role="dialog"
//     aria-modal="true"
//     className="fixed inset-0 z-50 flex items-center justify-center p-4"
//   >
//     <div
//       className="absolute inset-0 bg-black/40"
//       onClick={() => setModalService(null)}
//     />

//     <div className="
//         relative bg-white/95 backdrop-blur
//         border border-green-200 
//         w-full max-w-2xl
//         rounded-xl shadow-xl z-10 
//         p-4
//       "
//     >
//       {/* Header */}
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <h2 className="text-xl font-bold text-gray-900 leading-tight">
//             {modalService.title}
//           </h2>

//           <p className="mt-1 text-sm text-gray-700 leading-snug">
//             {modalService.description}
//           </p>

//           <div className="mt-2 flex gap-2 flex-wrap">
//             {(modalService.badges || []).map((b) => (
//               <span
//                 key={b}
//                 className="text-xs bg-gray-100 px-2 py-0.5 rounded-full"
//               >
//                 {b}
//               </span>
//             ))}
//           </div>

//           {modalService.image && (
//             <img
//               src={`${BACKEND_URL}${modalService.image}`}
//               alt={modalService.title}
//               className="w-full h-40 object-cover rounded mt-3"
//             />
//           )}
//         </div>

//         <button
//           onClick={() => setModalService(null)}
//           className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-3 py-1 text-sm font-medium"
//         >
//           Close
//         </button>
//       </div>

//       {/* Form */}
//       <div className="mt-3 space-y-3 text-sm">
//         <div>
//           <label className="block text-gray-700 mb-1 text-xs font-medium">
//             Your Name
//           </label>
//           <input
//             value={formName}
//             onChange={(e) => setFormName(e.target.value)}
//             className="block w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm"
//             placeholder="Enter your name"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1 text-xs font-medium">
//             Your Email
//           </label>
//           <input
//             value={formEmail}
//             onChange={(e) => setFormEmail(e.target.value)}
//             className="block w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm"
//             placeholder="Enter your email"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1 text-xs font-medium">
//             Message
//           </label>
//           <textarea
//             value={formMessage}
//             onChange={(e) => setFormMessage(e.target.value)}
//             rows="3"
//             className="block w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm"
//             placeholder={`Write your query about ${modalService.title}`}
//           />
//         </div>

//         <div className="flex items-center justify-end gap-2 pt-2">
//           <button
//             onClick={() => setModalService(null)}
//             className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-4 py-1.5 text-sm font-medium"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSend}
//             disabled={loading}
//             className="inline-flex items-center gap-2 bg-green-900 text-white px-4 py-1.5 rounded-full text-sm"
//           >
//             {loading ? "Sending..." : (
//               <>
//                 <MessageSquare size={14} /> Request Quote
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}


//       </main>
//     </>
//   );
// }










// // src/components/Services.jsx
// import React, { useState, useMemo, useEffect } from "react";
// import {
//   Search,
//   Filter,
//   Code,
//   MessageSquare,
// } from "lucide-react";
// import { toast } from "react-hot-toast";
// import Marquee from "react-fast-marquee";
// import { BACKEND_URL } from "../utils/utils";

// export default function Services() {
//   const [q, setQ] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("relevance");
//   const [modalService, setModalService] = useState(null);
//   const [services, setServices] = useState([]);

//   const [formName, setFormName] = useState("");
//   const [formEmail, setFormEmail] = useState("");
//   const [formMessage, setFormMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   async function fetchServices() {
//     try {
//       const res = await fetch(`${BACKEND_URL}/api/services`);
//       const data = await res.json();
//       setServices(data);
//     } catch (err) {
//       console.error("Failed to load services", err);
//     }
//   }

//   const categories = useMemo(
//     () => ["All", ...Array.from(new Set(services.map((s) => s.category)))],
//     [services]
//   );

//   const filtered = useMemo(() => {
//     const qLower = q.trim().toLowerCase();
//     let arr = services.filter((s) => {
//       if (category !== "All" && s.category !== category) return false;
//       if (!qLower) return true;
//       return (
//         s.title.toLowerCase().includes(qLower) ||
//         s.short.toLowerCase().includes(qLower) ||
//         s.description.toLowerCase().includes(qLower) ||
//         (s.badges || []).join(" ").toLowerCase().includes(qLower)
//       );
//     });

//     if (sort === "alpha") arr = arr.slice().sort((a, b) => a.title.localeCompare(b.title));
//     return arr;
//   }, [q, category, sort, services]);

//   async function submitInquiryAPI(payload) {
//     const resp = await fetch(`${BACKEND_URL}/api/inquiries`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });
//     if (!resp.ok) {
//       const text = await resp.text().catch(() => null);
//       throw new Error(text || "Network error");
//     }
//     return resp.json();
//   }

//   const openModal = (service) => {
//     setModalService(service);
//     setFormName("");
//     setFormEmail("");
//     setFormMessage("");
//   };

//   const handleSend = async () => {
//     if (!formName.trim()) return toast.error("Please enter your name");
//     if (!formEmail.trim() || !/^\S+@\S+\.\S+$/.test(formEmail)) return toast.error("Please enter a valid email");
//     if (!formMessage.trim()) return toast.error("Please enter a message");

//     setLoading(true);
//     try {
//       await submitInquiryAPI({
//         serviceId: modalService._id || modalService.id,
//         serviceTitle: modalService.title,
//         name: formName,
//         email: formEmail,
//         message: formMessage,
//       });

//       toast.success("Inquiry sent successfully — I will contact you soon!");
//       setModalService(null);
//     } catch (err) {
//       toast.error("Failed to send inquiry. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const ServiceCard = ({ s }) => {
//     return (
//       <article
//         className="group relative bg-white/90 backdrop-blur-sm border border-green-100 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col justify-between cursor-pointer"
//         onClick={() => openModal(s)}
//       >
//         <div>
//           <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-900 text-yellow-400 mb-4">
//             {s.image ? (
//               <img src={`${BACKEND_URL}${s.image}`} alt={s.title} className="w-8 h-8 object-cover rounded" />
//             ) : <Code size={20} />}
//           </div>

//           <h3 className="text-lg font-semibold font-display text-gray-900">{s.title}</h3>
//           <p className="text-sm font-displayer text-gray-600 mt-2">{s.short}</p>
//         </div>

//         <div className="mt-6 flex items-center justify-between">
//           <div className="flex gap-2 flex-wrap">
//             {(s.badges || []).slice(0, 3).map((b) => (
//               <span key={b} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{b}</span>
//             ))}
//           </div>

//           <button
//             onClick={(e)=>{ e.stopPropagation(); openModal(s); }}
//             className="text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-900 font-display transition bg-yellow-400 cursor-pointer"
//           >
//             Learn more
//           </button>
//         </div>

//         <div className="absolute -top-3 -left-3 px-3 py-1 rounded-br-lg bg-yellow-500 text-xs text-white font-semibold font-displayer">
//           {s.category}
//         </div>
//       </article>
//     );
//   };

//   return (
//     <>
//       {/* Top Marquee */}
//       <div className="relative bg-gradient-to-r from-green-800 via-yellow-500 to-green-700 py-3 overflow-hidden shadow-lg cursor-pointer">
//         <Marquee direction="left" pauseOnHover speed={70} gradient={false} className="relative whitespace-nowrap text-white font-semibold text-lg py-3 cursor-pointer">
//           <span className="hover:text-yellow-200 font-displayer">⭐ Hii Welcome to Nitish Portfolio Site.</span>
//         </Marquee>
//       </div>

//       {/* MAIN */}
//       <main id="services" className="py-16 md:py-24 min-h-screen bg-gradient-to-br from-gray-300 via-green-400 to-gray-900 font-display">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">

//           {/* HEADER */}
//           <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer">

//             <div>
//               <p className="text-sm font-medium font-display text-yellow-500 inline-flex items-center gap-2">
//                 <Filter size={16} /> Services
//               </p>
//               <h1 className="mt-2 text-3xl md:text-4xl font-extrabold font-display text-gray-900">
//                 What I do — Fullstack, Frontend, Backend & AI Automation
//               </h1>
//             </div>

//             {/* SEARCH + SORT */}
//             <div className="w-full md:w-auto flex flex-col md:flex-row gap-3 items-start md:items-center cursor-pointer">

//               {/* Search */}
//               <div className="relative w-full md:w-auto cursor-text">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//                 <input
//                   value={q}
//                   onChange={(e) => setQ(e.target.value)}
//                   placeholder="Search services..."
//                   className="pl-10 pr-3 py-2 border border-yellow-300 bg-white/90 backdrop-blur rounded-full w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-green-700"
//                 />
//               </div>

//               {/* UPDATED RESPONSIVE DROPDOWN */}
//               <select
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value)}
//                 className="
//                   py-2 px-3 
//                   border rounded-full 
//                   bg-white/90 backdrop-blur 
//                   font-displayer cursor-pointer 
//                   w-full max-w-[180px] 
//                   md:max-w-none md:w-auto
//                 "
//               >
//                 <option value="relevance">Most relevant</option>
//                 <option value="alpha">A → Z</option>
//               </select>

//             </div>
//           </header>

//           {/* CATEGORIES */}
//           <div className="mt-8 flex gap-3 flex-wrap cursor-pointer">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setCategory(cat)}
//                 className={`px-3 py-1 rounded-full text-sm font-medium ${
//                   cat === category ? "bg-yellow-500 text-white" : "bg-white/80"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* SERVICES GRID */}
//           <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filtered.map((s) => <ServiceCard key={s._id} s={s} />)}

//             {filtered.length === 0 && (
//               <div className="col-span-full text-center py-12 bg-white/90 backdrop-blur border border-gray-200 rounded-2xl">
//                 <p className="text-gray-500 font-displayer">No services match your search.</p>
//               </div>
//             )}
//           </section>

//         </div>

//         {/* MODAL */}
//         {modalService && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

//             <div className="absolute inset-0 bg-black/40" onClick={() => setModalService(null)} />

//             <div className="
//               relative bg-white/95 backdrop-blur
//               border border-green-200 
//               w-full max-w-lg sm:max-w-xl md:max-w-2xl
//               rounded-xl shadow-xl z-10 
//               p-3 sm:p-4
//             ">
//               {/* Modal header */}
//               <div className="flex items-start justify-between gap-3">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-900">{modalService.title}</h2>
//                   <p className="mt-1 text-sm text-gray-700">{modalService.description}</p>

//                   <div className="mt-2 flex gap-2 flex-wrap">
//                     {(modalService.badges || []).map((b) => (
//                       <span key={b} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{b}</span>
//                     ))}
//                   </div>

//                   {modalService.image && (
//                     <img
//                       src={`${BACKEND_URL}${modalService.image}`}
//                       alt={modalService.title}
//                       className="w-full h-32 sm:h-40 object-cover rounded mt-3"
//                     />
//                   )}
//                 </div>

//                 <button
//                   onClick={() => setModalService(null)}
//                   className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-3 py-1 text-sm font-medium"
//                 >
//                   Close
//                 </button>
//               </div>

//               {/* Modal form */}
//               <div className="mt-3 space-y-3 text-sm">
//                 <div>
//                   <label className="text-xs text-gray-700">Your Name</label>
//                   <input
//                     value={formName}
//                     onChange={(e) => setFormName(e.target.value)}
//                     className="block w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs text-gray-700">Your Email</label>
//                   <input
//                     value={formEmail}
//                     onChange={(e) => setFormEmail(e.target.value)}
//                     className="block w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs text-gray-700">Message</label>
//                   <textarea
//                     value={formMessage}
//                     onChange={(e) => setFormMessage(e.target.value)}
//                     rows="3"
//                     className="block w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm"
//                   />
//                 </div>

//                 <div className="flex justify-end gap-2 pt-2">
//                   <button
//                     onClick={() => setModalService(null)}
//                     className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-4 py-1.5 text-sm font-medium"
//                   >
//                     Cancel
//                   </button>

//                   <button
//                     onClick={handleSend}
//                     disabled={loading}
//                     className="inline-flex items-center gap-2 bg-green-900 text-white px-4 py-1.5 rounded-full text-sm"
//                   >
//                     {loading ? "Sending..." : <><MessageSquare size={14} /> Request Quote</>}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </>
//   );
// }








// src/components/Services.jsx
import React, { useState, useMemo, useEffect } from "react";
import { Search, Filter, Code, MessageSquare } from "lucide-react";
import { toast } from "react-hot-toast";
import Marquee from "react-fast-marquee";
import { BACKEND_URL } from "../utils/utils";

export default function Services() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("relevance");
  const [modalService, setModalService] = useState(null);
  const [services, setServices] = useState([]);

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const res = await fetch(`${BACKEND_URL}/api/services`);
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error("Failed to load services", err);
    }
  }

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(services.map((s) => s.category)))],
    [services]
  );

  const filtered = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    let arr = services.filter((s) => {
      if (category !== "All" && s.category !== category) return false;
      if (!qLower) return true;
      return (
        s.title.toLowerCase().includes(qLower) ||
        s.short.toLowerCase().includes(qLower) ||
        s.description.toLowerCase().includes(qLower) ||
        (s.badges || []).join(" ").toLowerCase().includes(qLower)
      );
    });

    if (sort === "alpha") arr = arr.slice().sort((a, b) => a.title.localeCompare(b.title));
    return arr;
  }, [q, category, sort, services]);

  async function submitInquiryAPI(payload) {
    const resp = await fetch(`${BACKEND_URL}/api/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) {
      const text = await resp.text().catch(() => null);
      throw new Error(text || "Network error");
    }
    return resp.json();
  }

  const openModal = (service) => {
    setModalService(service);
    setFormName("");
    setFormEmail("");
    setFormMessage("");
  };

  const handleSend = async () => {
    if (!formName.trim()) return toast.error("Please enter your name");
    if (!formEmail.trim() || !/^\S+@\S+\.\S+$/.test(formEmail)) return toast.error("Please enter a valid email");
    if (!formMessage.trim()) return toast.error("Please enter a message");

    setLoading(true);
    try {
      await submitInquiryAPI({
        serviceId: modalService._id || modalService.id,
        serviceTitle: modalService.title,
        name: formName,
        email: formEmail,
        message: formMessage,
      });

      toast.success("Inquiry sent successfully — I will contact you soon!");
      setModalService(null);
    } catch (err) {
      toast.error("Failed to send inquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const ServiceCard = ({ s }) => {
    const imgSrc = s.image?.startsWith("http") ? s.image : `${BACKEND_URL}${s.image}`;

    return (
      <article
        className="group relative bg-white/90 backdrop-blur-sm border border-green-100 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col justify-between cursor-pointer"
        onClick={() => openModal(s)}
      >
        <div>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-900 text-yellow-400 mb-4">
            {s.image ? (
              <img src={imgSrc} alt={s.title} className="w-8 h-8 object-cover rounded" />
            ) : (
              <Code size={20} />
            )}
          </div>

          <h3 className="text-lg font-semibold font-display text-gray-900">{s.title}</h3>
          <p className="text-sm font-displayer text-gray-600 mt-2">{s.short}</p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {(s.badges || []).slice(0, 3).map((b) => (
              <span key={b} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{b}</span>
            ))}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); openModal(s); }}
            className="text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-900 font-display transition bg-yellow-400 cursor-pointer"
          >
            Learn more
          </button>
        </div>

        <div className="absolute -top-3 -left-3 px-3 py-1 rounded-br-lg bg-yellow-500 text-xs text-white font-semibold font-displayer">
          {s.category}
        </div>
      </article>
    );
  };

  return (
    <>
      {/* Top Marquee */}
      <div className="relative bg-gradient-to-r from-green-800 via-yellow-500 to-green-700 py-3 overflow-hidden shadow-lg cursor-pointer">
        <Marquee direction="left" pauseOnHover speed={70} gradient={false} className="relative whitespace-nowrap text-white font-semibold text-lg py-3 cursor-pointer">
          <span className="hover:text-yellow-200 font-displayer">⭐ Hii Welcome to Nitish Portfolio Site.</span>
        </Marquee>
      </div>

      {/* MAIN */}
      <main id="services" className="py-16 md:py-24 min-h-screen bg-gradient-to-br from-gray-300 via-green-400 to-gray-900 font-display">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* HEADER */}
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer">
            <div>
              <p className="text-sm font-medium font-display text-yellow-500 inline-flex items-center gap-2">
                <Filter size={16} /> Services
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-extrabold font-display text-gray-900">
                What I do — Fullstack, Frontend, Backend & AI Automation
              </h1>
            </div>

            {/* SEARCH + SORT */}
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-3 items-start md:items-center cursor-pointer">
              <div className="relative w-full md:w-auto cursor-text">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search services..."
                  className="pl-10 pr-3 py-2 border border-yellow-300 bg-white/90 backdrop-blur rounded-full w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="
                  py-2 px-3 
                  border rounded-full 
                  bg-white/90 backdrop-blur 
                  font-displayer cursor-pointer 
                  w-full max-w-[180px] 
                  md:max-w-none md:w-auto
                "
              >
                <option value="relevance">Most relevant</option>
                <option value="alpha">A → Z</option>
              </select>
            </div>
          </header>

          {/* CATEGORIES */}
          <div className="mt-8 flex gap-3 flex-wrap cursor-pointer">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${cat === category ? "bg-yellow-500 text-white" : "bg-white/80"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SERVICES GRID */}
          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => <ServiceCard key={s._id} s={s} />)}

            {filtered.length === 0 && (
              <div className="col-span-full text-center py-12 bg-white/90 backdrop-blur border border-gray-200 rounded-2xl">
                <p className="text-gray-500 font-displayer">No services match your search.</p>
              </div>
            )}
          </section>
        </div>

        {/* MODAL */}
        {modalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40" onClick={() => setModalService(null)} />
            <div className="relative bg-white/95 backdrop-blur border border-green-200 w-full max-w-lg sm:max-w-xl md:max-w-2xl rounded-xl shadow-xl z-10 p-3 sm:p-4">
              {/* Modal header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{modalService.title}</h2>
                  <p className="mt-1 text-sm text-gray-700">{modalService.description}</p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {(modalService.badges || []).map((b) => (
                      <span key={b} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{b}</span>
                    ))}
                  </div>

                  {modalService.image && (
                    <img
                      src={modalService.image?.startsWith("http") ? modalService.image : `${BACKEND_URL}${modalService.image}`}
                      alt={modalService.title}
                      className="w-full h-32 sm:h-40 object-cover rounded mt-3"
                    />
                  )}
                </div>

                <button
                  onClick={() => setModalService(null)}
                  className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-3 py-1 text-sm font-medium"
                >
                  Close
                </button>
              </div>

              {/* Modal form */}
              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <label className="text-xs text-gray-700">Your Name</label>
                  <input
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-700">Your Email</label>
                  <input
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-700">Message</label>
                  <textarea
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    rows="3"
                    className="block w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setModalService(null)}
                    className="text-gray-900 hover:text-gray-800 bg-yellow-400 rounded-full px-4 py-1.5 text-sm font-medium"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSend}
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-green-900 text-white px-4 py-1.5 rounded-full text-sm"
                  >
                    {loading ? "Sending..." : <><MessageSquare size={14} /> Request Quote</>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}


