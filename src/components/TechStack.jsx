import React, { useState } from "react";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const techStackData = {
    "Frontend": [
      { name: "React", level: 90, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
      { name: "JavaScript", level: 85, icon: "🟨", color: "from-yellow-500 to-orange-500" },
      { name: "HTML5", level: 95, icon: "🌐", color: "from-orange-500 to-red-500" },
      { name: "CSS3", level: 90, icon: "🎨", color: "from-blue-500 to-purple-500" },
      { name: "Tailwind CSS", level: 88, icon: "💨", color: "from-cyan-500 to-blue-500" },
      { name: "Vue.js", level: 75, icon: "💚", color: "from-green-500 to-emerald-500" }
    ],
    "Backend": [
      { name: "Python", level: 90, icon: "🐍", color: "from-blue-500 to-yellow-500" },
      { name: "Django", level: 85, icon: "🎯", color: "from-green-600 to-green-400" },
      { name: "Node.js", level: 80, icon: "🟢", color: "from-green-500 to-lime-500" },
      { name: "PHP", level: 75, icon: "🐘", color: "from-purple-500 to-indigo-500" },
      { name: "Express.js", level: 78, icon: "⚡", color: "from-gray-600 to-gray-400" }
    ],
    "Database": [
      { name: "MySQL", level: 85, icon: "🗄️", color: "from-blue-600 to-blue-400" },
      { name: "PostgreSQL", level: 80, icon: "🐘", color: "from-blue-500 to-indigo-500" },
      { name: "MongoDB", level: 82, icon: "🍃", color: "from-green-600 to-green-400" },
      { name: "SQLite", level: 88, icon: "💾", color: "from-gray-600 to-gray-400" }
    ],
    "Mobile": [
      { name: "Android (Java)", level: 85, icon: "📱", color: "from-green-500 to-lime-500" },
    ],
    "Tools & Others": [
      { name: "Git", level: 90, icon: "🔄", color: "from-orange-500 to-red-500" },
      { name: "AWS", level: 70, icon: "☁️", color: "from-yellow-500 to-orange-500" },
      { name: "Linux", level: 85, icon: "🐧", color: "from-gray-700 to-gray-500" },
      { name: "VS Code", level: 95, icon: "💻", color: "from-blue-600 to-blue-400" }
    ]
  };

  const categories = ["ALL", ...Object.keys(techStackData)];

  const getFilteredTechnologies = () => {
    if (activeCategory === "ALL") {
      return Object.entries(techStackData).flatMap(([category, techs]) =>
        techs.map(tech => ({ ...tech, category }))
      );
    }
    return techStackData[activeCategory].map(tech => ({ ...tech, category: activeCategory }));
  };

  const TechCard = ({ tech }) => {
    return (
      <div className="relative group transition-all duration-500 hover:scale-105">
        {/* Glowing background effect */}
        <div className={`absolute -inset-0.5 rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500 bg-gradient-to-r ${tech.color}`}></div>

        {/* Tech Card */}
        <div className="relative bg-black/40 backdrop-blur-sm border border-purple-700/30 rounded-xl p-6 h-full transition-all duration-500">
          {/* Tech Icon and Name */}
          <div className="text-center mb-4">
            <div className="text-4xl mb-3">{tech.icon}</div>
            <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
            <p className="text-sm text-purple-300">{tech.category}</p>
          </div>

          {/* Skill Level */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Proficiency</span>
              <span className="text-sm font-bold text-white">{tech.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                style={{ width: `${tech.level}%` }}
              ></div>
            </div>
          </div>

          {/* Skill Level Indicator */}
          <div className="text-center">
            <span className={`
              inline-block px-3 py-1 rounded-full text-xs font-medium
              ${tech.level >= 90 ? 'bg-green-900/30 text-green-300 border border-green-700/30' :
                tech.level >= 80 ? 'bg-blue-900/30 text-blue-300 border border-blue-700/30' :
                tech.level >= 70 ? 'bg-yellow-900/30 text-yellow-300 border border-yellow-700/30' :
                'bg-gray-900/30 text-gray-300 border border-gray-700/30'}
            `}>
              {tech.level >= 90 ? 'Expert' :
               tech.level >= 80 ? 'Advanced' :
               tech.level >= 70 ? 'Intermediate' : 'Beginner'}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const SkillSummary = () => {
    const allTechs = Object.values(techStackData).flat();
    const avgLevel = Math.round(allTechs.reduce((sum, tech) => sum + tech.level, 0) / allTechs.length);
    const expertCount = allTechs.filter(tech => tech.level >= 90).length;
    const advancedCount = allTechs.filter(tech => tech.level >= 80 && tech.level < 90).length;

    return (
      <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-700/20 p-8 mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Skill Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-3xl font-bold text-purple-400 mb-2">{allTechs.length}</h4>
            <p className="text-gray-300">Total Technologies</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-green-400 mb-2">{expertCount}</h4>
            <p className="text-gray-300">Expert Level</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-400 mb-2">{advancedCount}</h4>
            <p className="text-gray-300">Advanced Level</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-yellow-400 mb-2">{avgLevel}%</h4>
            <p className="text-gray-300">Average Proficiency</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Tech Stack Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Technology Stack</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across different technology domains.
        </p>
      </div>

      {/* Skill Summary */}
      <SkillSummary />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center mb-12 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`
              px-6 py-3 rounded-full transition-all duration-300 font-medium
              ${activeCategory === category
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                : "bg-black/30 text-purple-300 border border-purple-700/30 hover:bg-purple-800/50"
              }
            `}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {getFilteredTechnologies().map((tech, index) => (
          <TechCard key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </div>

      {/* Learning Path */}
      <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl border border-purple-700/20 p-8">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">Currently Learning</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js", "TypeScript", "Pyside6", "GraphQL"].map((tech, index) => (
            <div key={index} className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full border border-purple-700/30">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;