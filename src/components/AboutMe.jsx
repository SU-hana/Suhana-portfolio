import React from 'react'

const AboutMe = () => {
  return (
    <>
    <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-4xl w-full mx-auto border border-white/10 transform transition-all hover:scale-105 hover:shadow-3xl animate-fade-in delay-500">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-white/80 mb-4">
          I'm a Full Stack Developer with over 5 years of experience in building scalable and user-friendly web applications. I specialize in modern technologies like React, Node.js, and Tailwind CSS, and I'm passionate about creating beautiful, functional, and performant software.
        </p>
        <p className="text-lg text-white/80 mb-4">
          When I'm not coding, I enjoy contributing to open-source projects, writing technical blogs, and exploring new tools and frameworks. I believe in continuous learning and always strive to improve my skills.
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-white mb-2">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white/10 text-white px-4 py-2 rounded-lg">React</span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-lg">Node.js</span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-lg">Tailwind CSS</span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-lg">JavaScript</span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-lg">TypeScript</span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-lg">MongoDB</span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-lg">GraphQL</span>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default AboutMe