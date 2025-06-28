import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  // Use useMemo to prevent recreation of roles array
  const roles = useMemo(() => [
    "Full Stack Developer",
    "React Developer",
    "Python Developer"
  ], []);

  useEffect(() => {
    setIsVisible(true);

    // Cycle through different roles
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]); // Now roles.length is stable

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundSize: '40px 40px',
            backgroundImage: `
              linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `
          }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-8">

        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Icons */}
            <div className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-purple-900/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-700/30 hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                  <polyline points="16,18 22,12 16,6"></polyline>
                  <polyline points="8,6 2,12 8,18"></polyline>
                </svg>
              </div>
              <div className="w-16 h-16 bg-purple-900/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-700/30 hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="w-16 h-16 bg-purple-900/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-700/30 hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                  <path d="M9 19c-5 0-8-3-8-8s3-8 8-8 8 3 8 8-3 8-8 8z"></path>
                  <path d="M15 9l6 6-6 6"></path>
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="text-white">Welcome To My</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-pulse">
                  Portfolio
                </span>
              </h1>
            </div>

            {/* Name and Role */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl md:text-3xl text-purple-400 font-semibold mb-4">
                Suhana Shaju
              </h2>
              <div className="h-8 mb-8">
                <p className="text-xl text-gray-300 transition-all duration-500">
                  {roles[currentText]}
                </p>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link
                to="/portfolio"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore My Portfolio
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;