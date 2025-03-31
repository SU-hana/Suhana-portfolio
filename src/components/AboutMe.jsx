import React, { useState, useEffect } from "react";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: "React", level: 60 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 75 }
  ];

  

  const stats = [
    { value: "5", label: "TOTAL PROJECTS", sublabel: "innovative solutions" },
    { value: "3", label: "CERTIFICATES", sublabel: "Professional skills validated" },
    { value: "1+", label: "YEARS OF EXPERIENCE", sublabel: "continuous learning journey" },
    { value: "1+", label: "SERVICES OFFERED", sublabel: "Diverse professional services" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 flex flex-col relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundSize: '20px 20px',
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`
      }}></div>
      
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: "1.5s"}}></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* About Title */}
        <h1 className={`text-5xl font-bold text-center mb-12 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <span className="text-purple-400">About</span> <span className="text-white">Me</span>
        </h1>

        {/* Hero Section */}
        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12 transition-all duration-1000 delay-200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <h2 className="text-3xl font-bold mb-4 text-white">Transforming ideas into digital experiences</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Proficient Software Engineer with a strong foundation in development, programming, and problem-solving. 
            Passionate about continuous learning and staying updated with the latest technological advancements.
          </p>
          <div className="flex gap-4">
          <a href="resume.pdf" download="Suhana Shaju-CV.pdf" class="button px-6 py-2 border border-purple-400 hover:bg-purple-900/30 rounded-lg text-purple-400 font-medium transition-colors">Download CV</a>
          <a href="#projects" class="button px-6 py-2 border border-purple-400 hover:bg-purple-900/30 rounded-lg text-purple-400 font-medium transition-colors">
              View Projects
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-white uppercase tracking-wider">{stat.label}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Professional Profile</h2>
              <p className="text-gray-300 leading-relaxed">
                A passionate Software Engineer with a keen eye for innovative solutions and robust architecture. 
                My journey is driven by curiosity, continuous learning, and the desire to create meaningful technological experiences.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Education</h2>
              <div>
                <h3 className="font-medium text-white">Computer Applications, APJ Abdul Kalam Technological University</h3>
                <p className="text-gray-400">Master's Degree, 2023</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className={`space-y-6 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            {/* Skills Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-purple-400">Technical Skills</h2>
              {skills.map((skill, index) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-purple-900/30 rounded-full h-2.5">
                    <div 
                      className="bg-purple-500 h-2.5 rounded-full" 
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;