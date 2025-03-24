import React from "react";

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-6">
      {/* Glassmorphism Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-4xl w-full mx-auto border border-white/10 transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
          Hi, I'm John Doe
        </h1>
        <p className="text-lg text-white/80 mb-6 animate-fade-in delay-100">
          A passionate Full Stack Developer with expertise in React, Node.js, and Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold text-white mb-2">Projects</h2>
            <p className="text-white/80">
              Check out my latest projects and contributions.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all animate-fade-in delay-300">
            <h2 className="text-2xl font-semibold text-white mb-2">Skills</h2>
            <p className="text-white/80">
              Proficient in JavaScript, React, Tailwind CSS, and more.
            </p>
          </div>
        </div>
        <div className="mt-8 flex space-x-4 animate-fade-in delay-400">
          <button className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-all">
            Contact Me
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-all">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;