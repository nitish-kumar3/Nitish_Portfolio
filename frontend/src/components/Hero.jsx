// import React from 'react'
// import heros from '../assets/heros.png'
// import facebook from '../assets/facebook.png'
// import twitter from '../assets/twitter.png'
// import instagram from '../assets/instagram.png'
// import linkedin from '../assets/linkedin.png'
// import reactLogo from '../assets/React.png'
// import reduxLogo from '../assets/Redux.png'
// import tailwind from '../assets/Tailwind Css.png'
// import cv from '../assets/cv.jpg'

// const Hero = () => {
//   return (
//     <section className='relative'>
//       <div className='max-w-7xl mx-auto'>
//         <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
//             <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
//                <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Nitish <span className='text-red-500'>Kumar</span></h1>
//                <p className='md:text-2xl text-xl mb-4 font-bold'>Web Developer</p>
//                <p className='mb-4'>I'm a passionate web developer with expertise in React, Nodejs,Express, and Modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
//                <div className='flex gap-4'>
//                <button className='bg-black text-white border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'><a href={cv} download target='_blank'>Download CV</a></button>
//                <a href="#contact">
//                <button className='bg-black text-white border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 cursor-pointer'>Contact Me</button></a>
//                </div>
//             </div>
//             <div className='md:w-1/2 relative flex justify-center items-end'>
//                  <img src={heros} alt="" className='lg:h-[90vh] h-96' />
//                  <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
//                  <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
//                  <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
//             </div>
//         </div>
//       </div>
//       <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'> 
//         <a href="https://www.facebook.com/profile.php?id=100047232771418">
//         <img src={facebook} alt="" className='w-20 cursor-pointer'/></a>

//         <a href="https://www.instagram.com/prajapati_nitish_123/">
//         <img src={instagram} alt="" className='w-20 cursor-pointer'/></a>

//         <a href="#">
//           <img src={twitter} alt="" className='w-20 cursor-pointer'/></a>

//         <a href="https://www.linkedin.com/in/nitish-kumar-531352270/">
//         <img src={linkedin} alt="" className='w-20 cursor-pointer'/></a>
        
//       </div>
//     </section>
//   )
// }

// export default Hero




import React from 'react'
import heroImg from '../assets/heros.png'
import cv from '../assets/cv.jpg'

const Hero = () => {
  return (
    <section
    id="hero"
     className="relative bg-green-900 text-white font-['Poppins'] py-1 md:py-24 overflow-hidden">
      
      {/* Decorative Background Blur Circle */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-0 relative z-10">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 mt-10 md:mt-0">
          
          {/* Hello There */}
          <div className="relative inline-block">
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-yellow-400 rounded-tl-md"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-yellow-400 rounded-br-md"></div>
            <div className="px-4 py-1 border border-gray-600 text-yellow-300 text-sm font-medium font-displayer rounded-md bg-green-800 shadow-sm">
              Hello There!
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight">
            I’m <span className="text-yellow-400 font-semibold font-displayer">Nitish Kumar,</span><br />
            Full-Stack Developer<br />
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md font-displayer">
            I'm a passionate web developer with expertise in React, Node.js, Express, and modern web technologies. I love creating beautiful and functional websites that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href={cv}
              download
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 text-green-900 font-semibold font-displayer px-6 py-2.5 rounded-full shadow-md hover:bg-yellow-500 transition flex items-center gap-2"
            >
              <span>View My Portfolio</span>
              <span className="bg-green-900 text-yellow-400 rounded-full p-1">
                ▶
              </span>
            </a>

            <a
              href="#contact"
              className="border-2 border-yellow-400 text-yellow-400 font-semibold font-displayer px-6 py-2.5 rounded-full hover:bg-yellow-400 hover:text-green-900 transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* RIGHT SECTION - Image + Background SVG */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          
          {/* SVG Yellow Blob Background */}
          <svg
            className="absolute w-[420px] h-[420px] md:w-[500px] md:h-[500px] -z-10 top-4 right-6 opacity-80"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M441,307.5Q428,375,372.5,417Q317,459,249,465Q181,471,132,423Q83,375,64,309Q45,243,77,179Q109,115,168.5,78Q228,41,289,66.5Q350,92,401.5,138Q453,184,449.5,243.5Q446,303,441,307.5Z"
              fill="#fde047"
            />
          </svg>

          {/* Profile Image */}
          <img
            src={heroImg}
            alt="Profile"
            className="w-72 md:w-[420px] rounded-2xl shadow-2xl object-cover border-4 border-yellow-400 hover:scale-105 transition-transform duration-500"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-10 left-6 bg-yellow-400 text-green-900 text-xs font-semibold font-displayer px-4 py-2 rounded-full shadow-lg rotate-[-10deg]">
            🚀 Full Stack Dev
          </div>

          {/* Circular Badge */}
          <div className="absolute top-20 right-10 bg-yellow-400 text-green-900 w-28 h-28 rounded-full flex flex-col justify-center items-center text-xs font-semibold font-displayer shadow-lg rotate-[15deg]">
            <span>Hire Me</span>
          </div>

          {/* Floating Tags */}
          <div className="absolute bottom-16 right-10 bg-yellow-400 text-green-900 text-sm px-4 py-1 rounded-full font-medium font-displayer shadow-md">
           Full-Stack Developer
          </div>
          <div className="absolute bottom-0 left-10 bg-green-800 text-yellow-400 text-sm px-4 py-1 rounded-full font-medium font-displayer shadow-md">
            Web Developer
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

