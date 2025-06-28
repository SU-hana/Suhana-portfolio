import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "./projectsData";
import Navbar from "./Navbar"; // Import the Navbar component
import Journey from "./Journey"; // Import Journey component
import Certificates from "./Certificates"; // Import Certificates component
import TechStack from "./TechStack"; // Import TechStack component
import Footer from "./Footer"; // Import Footer component

const Projects = () => {
  const [activeSection, setActiveSection] = useState("Projects");
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");
  const [activeBoardItem, setActiveBoardItem] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  const navSections = [
    { name: "Projects", icon: "<>" },
    { name: "Journey", icon: "♦" },
    { name: "Certificates", icon: "♣" },
    { name: "Tech Stack", icon: "♠" }
  ];

  const categories = ["ALL PROJECTS", "Python", "JavaScript", "PHP", "Android JAVA"];

  // Enhanced filtering logic to include projects with JavaScript in their tech stack
  const filteredProjects = activeCategory === "ALL PROJECTS"
    ? projects
    : activeCategory === "JavaScript"
    ? projects.filter(project =>
        project.category === "JavaScript" ||
        project.technologies.some(tech =>
          tech.toLowerCase().includes('javascript') ||
          tech.toLowerCase().includes('react') ||
          tech.toLowerCase().includes('js')
        )
      )
    : projects.filter(project => project.category === activeCategory);

  const toggleBoardItem = (index) => {
    if (activeBoardItem === index) {
      setActiveBoardItem(null);
    } else {
      setActiveBoardItem(index);
    }
  };

  // Handle section change with proper state management
  const handleSectionChange = (sectionName) => {
    console.log("Changing section to:", sectionName); // Debug log
    setActiveSection(sectionName);
    // Reset other states when changing sections
    if (sectionName !== "Projects") {
      setActiveCategory("ALL PROJECTS");
      setActiveBoardItem(null);
    }
  };

  // Debug: Log current active section
  useEffect(() => {
    console.log("Current active section:", activeSection);
  }, [activeSection]);

  // Project Card Component matching ServiceCard style
  const ProjectCard = ({ project }) => {
    return (
      <div className="relative group transition-all duration-700" id="projects">
        {/* Glowing background effect */}
        <div className="absolute -inset-0.5 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Project Card */}
        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl h-full transition-all duration-1000 delay-200">
          {/* Project Image */}
          <div className="h-48 overflow-hidden rounded-t-xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Project Content */}
          <div className="p-6 relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            <div className="flex justify-between items-center">
              <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-700/30">
                {project.category}
              </span>

              <Link
                to={`/project/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white hover:text-purple-400 transition-colors flex items-center gap-2 text-sm"
              >
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Function to render content based on active section
  const renderActiveSection = () => {
    console.log("Rendering section:", activeSection); // Debug log

    switch (activeSection) {
      case "Journey":
        return <Journey />;
      case "Certificates":
        return <Certificates />;
      case "Tech Stack":
        return <TechStack />;
      case "Projects":
      default:
        return (
          <>
            {/* Project Categories and View Toggle */}
            <div className="flex flex-wrap justify-between items-center mb-12">
              <div className="flex space-x-4 mb-4 md:mb-0">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`
                      px-6 py-2 rounded-full transition-all
                      ${activeCategory === category
                        ? "bg-purple-900/30 backdrop-blur-sm text-white border border-purple-700/30"
                        : "bg-transparent text-purple-300/70 border border-purple-700/30 hover:bg-purple-800/50"}
                    `}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Toggle Buttons */}
              <div className="flex space-x-3 bg-black/20 backdrop-blur-sm p-1 rounded-lg border border-purple-700/20">
                <button
                  className={`p-2 rounded ${isGridView ? 'bg-purple-800/50 text-white' : 'text-gray-400'}`}
                  onClick={() => setIsGridView(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button
                  className={`p-2 rounded ${!isGridView ? 'bg-purple-800/50 text-white' : 'text-gray-400'}`}
                  onClick={() => setIsGridView(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="21" y1="6" x2="3" y2="6"></line>
                    <line x1="21" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="18" x2="3" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Projects Display */}
            {isGridView ? (
              // Grid View with new ProjectCard component
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            ) : (
              // Board View
              <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-purple-700/30 overflow-hidden">
                {/* Board Header */}
                <div className="grid grid-cols-12 bg-purple-900/40 p-4 border-b border-purple-700/30">
                  <div className="col-span-4 text-purple-300 font-medium">Project</div>
                  <div className="col-span-3 text-purple-300 font-medium">Category</div>
                  <div className="col-span-3 text-purple-300 font-medium">Year</div>
                  <div className="col-span-2 text-purple-300 font-medium text-right">Actions</div>
                </div>

                {/* Board Items */}
                {filteredProjects.map((project, index) => (
                  <div key={project.name}>
                    {/* Project Row */}
                    <div
                      className={`
                        grid grid-cols-12 p-4 items-center hover:bg-purple-900/20 cursor-pointer
                        ${index !== filteredProjects.length - 1 ? 'border-b border-purple-700/20' : ''}
                        ${activeBoardItem === index ? 'bg-purple-900/20' : ''}
                      `}
                      onClick={() => toggleBoardItem(index)}
                    >
                      <div className="col-span-4 flex items-center space-x-3">
                        <div className="h-12 w-12 rounded-lg overflow-hidden">
                          <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{project.name}</h3>
                          <p className="text-sm text-gray-400">{project.description}</p>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-700/30">
                          {project.category}
                        </span>
                      </div>
                      <div className="col-span-3 text-gray-300">
                        {project.year}
                      </div>
                      <div className="col-span-2 text-right">
                        <button className="text-purple-400 hover:text-white transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            {activeBoardItem === index ?
                              <path d="M5 12h14M19 12l-7 7M19 12l-7-7"/> :
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            }
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Expanded Details in Board View */}
                    {activeBoardItem === index && (
                      <div className="p-6 bg-purple-950/30 border-b border-purple-700/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-medium text-purple-300 mb-3">Project Details</h4>
                            <p className="text-gray-300 mb-4">{project.details}</p>
                            <h4 className="text-lg font-medium text-purple-300 mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <span key={i} className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-700/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="h-64 overflow-hidden rounded-xl">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="mt-4 text-right">
                          <Link
                            to={`/project/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Full Project
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        );
    }
  };

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

      {/* Add Navbar Component */}
      <Navbar />

      {/* Main Content - Add pt-24 padding-top to account for the fixed navbar */}
      <div className="container mx-auto px-8 pt-24 pb-8 z-10">
        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black/40 backdrop-blur-sm py-4 px-8 rounded-xl ">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-white">My Professional</span> <span className="text-purple-400">Journey</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore my professional journey through impactful projects, recognized certifications,
              diverse work experience, and technical expertise, each marking a milestone in my continuous learning and growth.
            </p>
          </div>
        </div>

        {/* Top Navigation - Fixed with better event handling */}
        <div className="flex flex-wrap justify-center mb-12 space-x-8 bg-black/30 backdrop-blur-md py-4 rounded-full">
          {navSections.map((section) => (
            <button
              key={section.name}
              className={`
                cursor-pointer px-6 py-2 rounded-lg transition-all duration-300 focus:outline-none
                ${activeSection === section.name
                  ? "bg-gradient-to-r from-[#5D50C6] to-[#8D53E3] text-white"
                  : "text-[#6B6B8B] hover:text-white hover:bg-white/10"}
              `}
              onClick={() => handleSectionChange(section.name)}
              type="button"
            >
              <span className="mr-2">{section.icon}</span>
              {section.name}
            </button>
          ))}
        </div>

        {/* Dynamic Content Based on Active Section */}
        <div key={activeSection}>
          {renderActiveSection()}
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Projects;