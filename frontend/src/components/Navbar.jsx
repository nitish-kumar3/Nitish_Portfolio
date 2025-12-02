// import React, { useState } from 'react'
// import Logo from '../assets/logos.png'
// import sun from '../assets/sun.png'
// import moon from '../assets/moon.png'
// import { Menu, X } from 'lucide-react'
// import index from '../index.css'

// const Navbar = () => {
//     const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)


//     // const setDarkMode =() =>{
//     //     document.documentElement.classList.toggle('dark')
//     // }
//     // const setDarkMode =() =>{
//     //     document.querySelector("body").setAttribute("data-theme", "dark");
//     //     localStorage.setItem('theme', 'dark')
//     // }

//     // const setLightMode =()=>{
//     //    document.querySelector("body").setAttribute("data-theme", "light");
//     //    localStorage.setItem('theme', 'light')
//     // }

//     // const toggleTheme = (e) => {
//     //     if(e.target.checked) setDarkMode();
//     //     else setLightMode();
//     // }

//     // const theme = localStorage.getItem("theme")

//     // if(theme === 'dark'){
//     //   setDarkMode();
//     // }else{
//     //   setLightMode();
//     // }



//   return (
//     <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gray-500 px-4 lg:px-0'>
//       <div className=' max-w-7xl mx-auto flex h-14 items-center'>
//         <div className='md:mr-4 flex justify-between w-full'>
//             <a href="#" className='mr-6 flex items-center space-x-2 size-20'>
//                 <img src={Logo} alt="" className='w-36' />
//             </a>

//             {/* <div className='mr-12 flex items-center space-x-2 size-20'> */}
//                 {/* <img src={sun} alt="" className='w-6' onClick={setLightMode}/>
//                 <img src={moon} alt="" className='w-6' onClick={setDarkMode}/> */}
//                 {/* <input className='' type="checkbox" id='darkmode-toggle' onChange={toggleTheme} defaultChecked={theme === "dark"} />
              
//                 <lavel for='darkmode-toggle' className='flex items-center space-x-2'>
//                     <span>🌞</span>
//                     <span>🌛</span>
//                 </lavel>
//             </div> */}

//             <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
//                 <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60'>About</a>
//                 <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60'>Projects</a>
//                 <a href="#testimonials" className='transition-colors hover:text-foreground/80 text-foreground/60'>Testimonials</a>
//                 <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</a>
//             </nav>
//         </div>
//         <button className='inline-flex items-center justify-center rounded-md md:hidden'
//         // onclick={()=>setmMobileMenuOpen(preveState => !preveState)} 
//         onClick={()=>setmMobileMenuOpen(!mobileMenuOpen)}
//         >
//            <span className='sr-only'>Open main menu</span>
//            {mobileMenuOpen ? (
//             <X className='h-6 w-6' aria-hidden="true"/>
//            ):(
//             <Menu className='h-6 w-6' aria-hidden="true"/>
//            )}
//         </button>
//       </div>
//       {mobileMenuOpen && (
//         <div className='md:hidden'>
//             <div className='space-y-1 px-2 pb-3 pt-2'>
//                 <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>About</a>
//                 <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Project</a>
//                 <a href="#testimonials" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Testimonials</a>
//                 <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Contact</a>
//             </div>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar





// import React, { useState, useEffect } from 'react'
// import Logo from '../assets/logos.png'
// import sun from '../assets/sun.png'
// import moon from '../assets/moon.png'
// import { Menu, X } from 'lucide-react'
// import './navbarrs.css'

// const Navbar = () => {


//     const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)
//     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

//     const setDarkMode = () => {
//         document.querySelector("body").setAttribute("data-theme", "dark");
//         localStorage.setItem('theme', 'dark')  //isme local storage me value store ho rhi h taki refresh kene pe dark mode hi rhe
//     }

//     const setLightMode = () => {
//         document.querySelector("body").setAttribute("data-theme", "light");
//         localStorage.setItem('theme', 'light')  //isme local storage me value store ho rhi h taki refresh kene pe light mode hi rhe
//     }

    
//     useEffect(() => {
//         const theme = localStorage.getItem("theme")//isme local storage se current value le rhe h aur uske anusar function chala rhe h
//         if (theme === 'dark') {
//             setDarkMode();
//         } else {
//             setLightMode();
//         }
//     }, [])

//     return (
//         <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gray-500 px-4 lg:px-0'>
//             <div className=' max-w-7xl mx-auto flex h-14 items-center'>
//                 <div className='md:mr-4 flex justify-between w-full'>
//                     <a href="#" className='mr-6 flex items-center space-x-2 size-20'>
//                         <img src={Logo} alt="" className='w-36' />
//                     </a>

//                     <div className='mr-12 flex items-center space-x-2 size-20'>
                    
//                     {theme === "light" ? (
//                             <img src={sun} alt="" className='w-6 cursor-pointer' onClick={setDarkMode} />
//                         ) : (
//                             <img src={moon} alt="" className='w-6 cursor-pointer' onClick={setLightMode} />
//                         )}
//                     </div>

//                     <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
//                         <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60'>About</a>
//                         <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60'>Projects</a>
//                         <a href="#testimonials" className='transition-colors hover:text-foreground/80 text-foreground/60'>Testimonials</a>
//                         <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</a>
//                     </nav>
//                 </div>
//                 <button className='inline-flex items-center justify-center rounded-md md:hidden'
//                     onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
//                 >
//                     <span className='sr-only'>Open main menu</span>
//                     {mobileMenuOpen ? (
//                         <X className='h-6 w-6' aria-hidden="true" />
//                     ) : (
//                         <Menu className='h-6 w-6' aria-hidden="true" />
//                     )}
//                 </button>
//             </div>
//             {mobileMenuOpen && (
//                 <div className='md:hidden'>
//                     <div className='space-y-1 px-2 pb-3 pt-2'>
//                         <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>About</a>
//                         <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Project</a>
//                         <a href="#testimonials" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Testimonials</a>
//                         <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Contact</a>
//                     </div>
//                 </div>
//             )}
//         </header>
//     )
// }

// export default Navbar























// import React, { useState, useEffect } from 'react'
// import Logo from '../assets/logos.png'
// import sun from '../assets/sun.png'
// import moon from '../assets/moon.png'
// import { Menu, X } from 'lucide-react'
// import './navbarrs.css'


// const Navbar = () => {
//     const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)
//     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

//     const toggleTheme = () => {
//         if (theme === "light") {
//             setDarkMode();
//         } else {
//             setLightMode();
//         }
//     }

//     const setDarkMode = () => {
//         document.querySelector("body").setAttribute("data-theme", "dark");
//         localStorage.setItem('theme', 'dark')
//         setTheme("dark")
//     }

//     const setLightMode = () => {
//         document.querySelector("body").setAttribute("data-theme", "light");
//         localStorage.setItem('theme', 'light')
//         setTheme("light")
//     }

//     useEffect(() => {
//         if (theme === 'dark') {
//             setDarkMode();
//         } else {
//             setLightMode();
//         }
//     }, [theme])

//     return (
//         <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gray-500 px-4 lg:px-0'>
//             <div className=' max-w-7xl mx-auto flex h-14 items-center'>
//                 <div className='md:mr-4 flex justify-between w-full'>
//                     <a href="#" className='mr-6 flex items-center  space-x-2 size-20'>
//                         <img className='w-36 cursor-pointer' src={Logo} alt="" />
//                     </a>

//                     <div className='mr-8 flex items-center space-x-2 size-20'>
//                         <img src={theme === "light" ? sun : moon} alt="" className='w-6 cursor-pointer rounded-full' onClick={toggleTheme} />
//                     </div>

//                     <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
//                         <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60'>About</a>
//                         <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60'>Projects</a>
//                         <a href="#testimonials" className='transition-colors hover:text-foreground/80 text-foreground/60'>Testimonials</a>
//                         <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</a>
//                     </nav>
//                 </div>                          
//                 <button className='inline-flex items-center justify-center rounded-md md:hidden'
//                     onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
//                 >
//                     <span className='sr-only'>Open main menu</span>
//                     {mobileMenuOpen ? (
//                         <X className='h-6 w-6' aria-hidden="true" />
//                     ) : (
//                         <Menu className='h-6 w-6' aria-hidden="true" />
//                     )}
//                 </button>   
//             </div>
//             {mobileMenuOpen && (
//                 <div className='md:hidden'>
//                     <div className='space-y-1 px-2 pb-3 pt-2'>
//                         <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>About</a>
//                         <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Project</a>
//                         <a href="#testimonials" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Testimonials</a>
//                         <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Contact</a>
//                     </div>
//                 </div>
//             )}
//         </header>


//     )
// }

// export default Navbar










// import React, { useState, useEffect } from 'react'
// import Logo from '../assets/logos.png'
// import { Sun, Moon, Menu, X } from 'lucide-react'  // ✅ modern icons here
// import './navbarrs.css'

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

//   const toggleTheme = () => {
//     if (theme === "light") setDarkMode()
//     else setLightMode()
//   }

//   const setDarkMode = () => {
//     document.querySelector("body").setAttribute("data-theme", "dark")
//     localStorage.setItem("theme", "dark")
//     setTheme("dark")
//   }

//   const setLightMode = () => {
//     document.querySelector("body").setAttribute("data-theme", "light")
//     localStorage.setItem("theme", "light")
//     setTheme("light")
//   }

//   useEffect(() => {
//     if (theme === "dark") setDarkMode()
//     else setLightMode()
//   }, [theme])

//   return (
//     <header className="navbar-container sticky top-4 z-50 w-full flex justify-center">
//       <div className="navbar-inner max-w-6xl w-[90%] md:w-[80%] flex items-center justify-between px-6 py-3 rounded-full shadow-md">
        
//         {/* Left - Logo */}
//         <div className="flex items-center space-x-3">
//           <div className="logo-circle flex items-center justify-center bg-yellow-500 rounded-full w-10 h-10">
//             <img src={Logo} alt="Logo" className="w-6 h-6" />
//           </div>
//           <h1 className="text-white font-semibold text-xl font-displayer">
//             Nitish<span className="text-yellow-400">.</span>
//           </h1>
//         </div>

//         {/* Center - Nav Links */}
//         <nav className="hidden md:flex items-center space-x-8 text-base font-medium font-displayer text-gray-200">
//           <a href="#hero" className="text-yellow-400">Home</a>
//           <a href="#services" className="hover:text-yellow-400 transition">Services</a>
//           <a href="#about" className="hover:text-yellow-400 transition">About</a>
//           <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
//         </nav>

//         {/* Right - Theme Toggle + Contact Button */}
//         <div className="flex items-center space-x-4">
//           {/* ✅ Modern Theme Toggle Icons */}
//           {theme === "light" ? (
//             <Sun
//               className="w-6 h-6 text-yellow-400 cursor-pointer hover:rotate-12 transition-transform"
//               onClick={toggleTheme}
//             />
//           ) : (
//             <Moon
//               className="w-6 h-6 text-gray-200 cursor-pointer hover:-rotate-12 transition-transform"
//               onClick={toggleTheme}
//             />
//           )}

//           <a
//             href="#contact"
//             className="hidden md:inline-block bg-yellow-500 text-white font-semibold font-displayer px-5 py-2 rounded-full shadow hover:bg-yellow-600 transition"
//           >
//             Contact Me
//           </a>

//           {/* Mobile Menu Icon */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-[#1c3b33] w-[90%] mx-auto mt-2 rounded-2xl shadow-lg py-4 text-center space-y-3 text-gray-100 font-displayer">
//           <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
//           <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
//           <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
//           <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
//           <a
//             href="#contact"
//             onClick={() => setMobileMenuOpen(false)}
//             className="bg-white text-gray-800 px-5 py-2 rounded-full inline-block font-semibold font-displayer"
//           >
//             Contact Me
//           </a>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar










// import React, { useState, useEffect } from 'react';
// import Logo from '../assets/logos.png';
// import { Sun, Moon, Menu, X } from 'lucide-react';
// import './navbarrs.css';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "light"
//   );

//   // 🔥 Apply theme to <body>
//   const applyTheme = (mode) => {
//     document.body.setAttribute("data-theme", mode);
//     localStorage.setItem("theme", mode);
//     setTheme(mode);
//   };

//   const toggleTheme = () => {
//     applyTheme(theme === "light" ? "dark" : "light");
//   };

//   // 🔥 Apply theme on page load
//   useEffect(() => {
//     applyTheme(theme);
//   }, []);

//   return (
//     <header className="navbar-container sticky top-4 z-50 w-full flex justify-center">
//       <div className="navbar-inner max-w-6xl w-[90%] md:w-[80%] flex items-center justify-between px-6 py-3 rounded-full shadow-md">

//         {/* Left - Logo */}
//         <div className="flex items-center space-x-3">
//           <div className="logo-circle flex items-center justify-center bg-yellow-500 rounded-full w-10 h-10">
//             <img src={Logo} alt="Logo" className="w-6 h-6" />
//           </div>
//           <h1 className="text-white font-semibold text-xl font-displayer">
//             Nitish<span className="text-yellow-400">.</span>
//           </h1>
//         </div>

//         {/* Center - Nav Links */}
//         <nav className="hidden md:flex items-center space-x-8 text-base font-medium font-displayer text-gray-200">
//           <a href="#hero" className="text-yellow-400">Home</a>
//           <a href="#services" className="hover:text-yellow-400 transition">Services</a>
//           <a href="#about" className="hover:text-yellow-400 transition">About</a>
//           <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
//         </nav>

//         {/* Right - Theme Toggle + Contact Button */}
//         <div className="flex items-center space-x-4">

//           {theme === "light" ? (
//             <Sun
//               className="w-6 h-6 text-yellow-400 cursor-pointer hover:rotate-12 transition-transform"
//               onClick={toggleTheme}
//             />
//           ) : (
//             <Moon
//               className="w-6 h-6 text-gray-200 cursor-pointer hover:-rotate-12 transition-transform"
//               onClick={toggleTheme}
//             />
//           )}

//           <a
//             href="#contact"
//             className="hidden md:inline-block bg-yellow-500 text-white font-semibold font-displayer px-5 py-2 rounded-full shadow hover:bg-yellow-600 transition"
//           >
//             Contact Me
//           </a>

//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-[#1c3b33] w-[90%] mx-auto mt-2 rounded-2xl shadow-lg py-4 text-center space-y-3 text-gray-100 font-displayer">
//           <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
//           <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
//           <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
//           <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>

//           <a
//             href="#contact"
//             onClick={() => setMobileMenuOpen(false)}
//             className="bg-white text-gray-800 px-5 py-2 rounded-full inline-block font-semibold font-displayer"
//           >
//             Contact Me
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;









import React, { useState, useEffect } from 'react';
import Logo from '../assets/logos.png';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './navbarrs.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const applyTheme = (mode) => {
    document.body.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    applyTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    applyTheme(theme);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full flex flex-col items-center px-4">

      {/* NAVBAR */}
      <div className="
        navbar-inner max-w-6xl w-full 
        flex items-center justify-between 
        px-4 py-3 rounded-full shadow-md
      ">
        {/* Left Logo */}
        <div className="flex items-center space-x-3">
          <div className="logo-circle flex items-center justify-center bg-yellow-500 rounded-full w-10 h-10">
            <img src={Logo} alt="Logo" className="w-6 h-6" />
          </div>
          <h1 className="text-white font-semibold text-xl font-displayer">
            Nitish<span className="text-yellow-400">.</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-base font-medium font-displayer text-gray-200">
          <a href="#hero" className="text-yellow-400">Home</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          {theme === "light" ? (
            <Sun className="w-6 h-6 text-yellow-400 cursor-pointer" onClick={toggleTheme} />
          ) : (
            <Moon className="w-6 h-6 text-gray-200 cursor-pointer" onClick={toggleTheme} />
          )}

          <a
            href="#contact"
            className="hidden md:inline-block bg-yellow-500 text-white font-semibold font-displayer px-5 py-2 rounded-full shadow"
          >
            Contact Me
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Drops directly under navbar) */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden bg-[#1c3b33] 
            w-full max-w-6xl 
            mt-2 rounded-2xl shadow-lg 
            py-4 flex flex-col items-center 
            space-y-4 text-gray-100 font-displayer
          "
        >
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-white text-gray-800 px-5 py-2 rounded-full font-semibold font-displayer"
          >
            Contact Me
          </a>
        </div>
      )}

    </header>
  );
};

export default Navbar;
