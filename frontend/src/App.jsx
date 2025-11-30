// import React from 'react'
// // import App from './App.css'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// // import ParticleBackground from './components/Particle'
// import About from './components/About'
// import Projects from './components/Projects'
// import Testimonials from './components/Testimonials'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Marquee from 'react-fast-marquee'
// // import Hero2 from './components/Hero2'
// import Process from './components/Process'
// import Services from './components/Services'
// import { Toaster } from "react-hot-toast";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import AdminLogin from "./admin/AdminLogin";
// import Dashboard from "./admin/Dashboard";
// import Inquiries from "./admin/Inquiries";
// import ProtectedRoute from "./admin/ProtectedRoute";
// import Layout from "./admin/Layout";


// const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/admin/login" element={<AdminLogin />} />

//           <Route path="/admin" element={<Layout />} />

//           <Route
//             path="/admin/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/admin/inquiries"
//             element={
//               <ProtectedRoute>
//                 <Inquiries />
//               </ProtectedRoute>
//             }
//           />

//         </Routes>
//       </Router>

//       {/* https://my-portfolio-delta-five-72.vercel.app/ */}
//       {/* <ParticleBackground /> */}
//       <Toaster position="top-right" />
//       <Navbar />
//       <br />
//       <Hero />
//       <Services />

//       {/* <Marquee direction="left"
//       pauseOnHover='true'
//       play='true'
//       speed={100}
//       scrollamount='40'
//       className='text-2xl text-amber-300 bg-blue-950 font-bold font-sans cursor-pointer'>Hii welcome to <span className='text-red-600 m-2'>Nitish</span> Portfolio site.<pre> Click and Go to my <a href="https://www.linkedin.com/in/nitish-kumar-531352270/" className='text-blue-200'>Linkedin,</a> <a href="https://github.com/nitish-kumar3" className='text-red-200'>Github,</a> <a href="https://www.facebook.com/profile.php?id=100047232771418" className='text-red-500'>Facebook,</a> <a href="https://www.instagram.com/prajapati_nitish_123/">Instagram</a>.</pre></Marquee> */}

//       {/* <hr className='color-red bg-amber-500 h-3 ' /> */}
//       <About />
//       <br />
//       {/* <hr className='color-red bg-red-900 h-3 ' /> */}
//       <Projects />
//       <Process />
//       <Testimonials />
//       <Contact />
//       <Footer />





//       {/* <Router>
//         <Routes>
//           <Route exact path="/" element={<Hero/>} />
//           <Route exact path="/about" element={<About/>} />
//           <Route exact path="/projects" element={<Projects/>} />
//           <Route exact path="/testimonials" element={<Testimonials/>} />
//           <Route exact path="/contact" element={<Contact/>} />
//         </Routes>
//       </Router>
//       <Footer/> */}
//     </>
//   )
// }

// export default App

import React from "react";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Process from './components/Process'
import Services from './components/Services'
import { Toaster } from "react-hot-toast";





const App = () => {
  return (
    <>
      <Toaster position="top-right" />

      <Navbar />
      <br />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
