import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "ed2ce255-5fd1-4a20-9b12-995e43959a84",
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully!");
      window.location.reload(true);
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-green-900 text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold font-displayer text-sm">
            — Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 font-displayer text-sm md:text-base">
            Have a question, project idea, or want to collaborate? Let’s connect!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-800/80 border border-gray-700/30 shadow-lg shadow-yellow-400/10 rounded-2xl p-8 md:p-10 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold font-displayer text-yellow-400 mb-6">
              Send a Message
            </h3>

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium font-displayer text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-md bg-gray-900/70 border border-gray-600 text-gray-200 font-displayer placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 outline-none transition"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-400 font-displayer text-xs mt-1">
                  Please enter your name.
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium font-displayer text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-gray-900/70 border border-gray-600 text-gray-200 font-displayer placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 outline-none transition"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-400 font-displayer text-xs mt-1">
                  Please enter your email.
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium font-displayer text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message..."
                rows="5"
                className="w-full p-3 rounded-md bg-gray-900/70 border border-gray-600 text-gray-200 font-displayer placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 outline-none transition resize-none"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <p className="text-red-400 font-displayer text-xs mt-1">
                  Please enter a message.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold font-displayer px-6 py-3 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-yellow-400/40"
            >
              Send Message
            </button>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=100047232771418"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="h-6 w-6 hover:scale-110 transition-transform duration-300"
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
                  className="h-6 w-6 hover:scale-110 transition-transform duration-300"
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
                  className="h-6 w-6 hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </form>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-yellow-400/10 border border-gray-700/30 hover:scale-[1.02] transition-transform duration-500">
            <iframe
              title="Ranchi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0021660536067!2d85.32156827453941!3d23.344099309326207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1d1a70c7f7b%3A0x61de07e9ff7b8e44!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1709912740919!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Toaster position="bottom-right" />
    </section>
  );
};

export default Contact;
