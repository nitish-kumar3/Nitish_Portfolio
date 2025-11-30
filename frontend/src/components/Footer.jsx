import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-16 px-6 md:px-20 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold font-display text-yellow-400 mb-3">
            Nitish Kumar
          </h2>
          <p className="text-sm text-gray-400 font-displayer leading-relaxed mb-5">
            MERN Stack Developer passionate about creating modern, scalable, and
            visually stunning web applications. Let’s build something amazing
            together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold font-displayer px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300"
          >
            Let’s Connect
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold font-displayer text-yellow-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#hero"
                className="hover:text-yellow-400 font-displayer transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-400 font-displayer transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-yellow-400 font-displayer transition duration-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 font-displayer transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social + Location */}
        <div>
          <h3 className="text-xl font-semibold font-displayer text-yellow-400 mb-4">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-400 font-displayer mb-3">
            Follow me on social platforms for updates & collaborations:
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-5">
            <a
              href="https://www.facebook.com/profile.php?id=100047232771418"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="h-6 w-6 hover:scale-110 hover:opacity-80 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/prajapati_nitish_123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="h-6 w-6 hover:scale-110 hover:opacity-80 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nitish-kumar-531352270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-6 w-6 hover:scale-110 hover:opacity-80 transition-transform duration-300"
              />
            </a>
          </div>

          <p className="text-sm text-gray-400">
            📍 Based in <span className="text-yellow-400 font-displayer font-medium">Ranchi, India</span>
          </p>
          <p className="text-sm mt-1 font-displayer">✉️ nitish6206774025@gmail.com</p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-16 border-t border-gray-700  pt-6 text-center text-gray-400 text-sm font-displayer">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold font-displayer">Nitish Kumar</span>. All
          rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-500 font-displayer">
          Designed & built with ❤️ using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
