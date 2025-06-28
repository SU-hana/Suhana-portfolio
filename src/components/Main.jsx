import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Import the Navbar component

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 flex flex-col relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundSize: '20px 20px',
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`
      }}></div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: "1.5s"}}></div>
      </div>

      {/* Navbar Component */}
      <Navbar />

      {/* Main Content - Add padding-top to account for fixed navbar */}
      <main className="flex-1 flex flex-col md:flex-row items-center px-16 py-4 pt-24">
        {/* Left column with text */}
        <div className={`w-full md:w-1/2 space-y-6 ml-8 md:ml-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          {/* Badge */}
          <div className="inline-block bg-purple-900/30 backdrop-blur-sm text-purple-400 px-4 py-2 rounded-full text-sm border border-purple-700/30">
            <span className="mr-2">✨</span>
            Crafting Tomorrow
          </div>

          {/* Name with staggered animation */}
          <div className="space-y-1">
            <h2 className={`text-white text-5xl font-bold transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              HI I'M
            </h2>
            <h1 className={`text-purple-400 text-6xl font-bold transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              SUHANA
            </h1>
            <h1 className={`text-purple-400 text-6xl font-bold transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              SHAJU
            </h1>
          </div>

          {/* Role */}
          <h3 className={`text-white text-2xl font-medium transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Product Engineer • Software Engineer
          </h3>

          {/* Description */}
          <p className={`text-gray-300 max-w-lg transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          A forward-thinking Product Engineer with a strong foundation in Software Engineering,
          blending creativity with technical expertise to craft innovative, high-performance applications.
          I thrive in cross-functional teams, turning complex challenges into elegant, scalable solutions
          across full-stack development and product strategy.
          </p>


          {/* Skills */}
          <div className={`flex flex-wrap gap-2 transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="bg-purple-900/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm border border-purple-700/30">
              Python
            </span>
            <span className="bg-purple-900/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm border border-purple-700/30">
              JavaScript
            </span>
          </div>

          {/* Social Icons */}
          <div className={`flex gap-4 transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {/* Social icons with updated LinkedIn link */}
            <a href="https://www.instagram.com/suhana_shaju/" target="_blank" rel="noopener noreferrer" className="bg-purple-900/30 backdrop-blur-sm text-white p-3 rounded-md hover:bg-purple-800/50 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/suhana-shaju-210961270/" target="_blank" rel="noopener noreferrer" className="bg-purple-900/30 backdrop-blur-sm text-white p-3 rounded-md hover:bg-purple-800/50 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/SU-hana" target="_blank" rel="noopener noreferrer" className="bg-purple-900/30 backdrop-blur-sm text-white p-3 rounded-md hover:bg-purple-800/50 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="mailto:suhanashaju06@gmail.com" className="bg-purple-900/30 backdrop-blur-sm text-white p-3 rounded-md hover:bg-purple-800/50 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Right column with image */}
        <div className={`w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <div className="relative">
            {/* Purple glow/halo effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-purple-700/30 filter blur-2xl"></div>

            {/* Larger darker purple circle to create depth */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full bg-purple-900/50 filter blur-xl"></div>

            {/* Square image with rounded corners */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border border-gray-700">
              <img
                src="/profile.jpeg"
                alt="Suhana Shaju Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;