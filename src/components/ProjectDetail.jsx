import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "./projectsData";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Use useEffect to find the project when the component mounts or projectId changes
  useEffect(() => {
    console.log("Current projectId:", projectId);
    console.log("Available projects:", projects);
    
    // Find the project based on URL parameter
    const foundProject = projects.find(p => 
      p.name.toLowerCase().replace(/\s+/g, '-') === projectId
    );
    
    console.log("Found project:", foundProject);
    setProject(foundProject);
    setLoading(false);
  }, [projectId]); // Re-run when projectId changes
  
  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 flex flex-col items-center justify-center">
        <div className="text-center bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-purple-700/30">
          <h2 className="text-3xl font-bold text-white mb-4">Loading...</h2>
        </div>
      </div>
    );
  }
  
  // Handle case when project is not found
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 flex flex-col items-center justify-center">
        <div className="text-center bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-purple-700/30">
          <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="text-gray-300 mb-6">The project you're looking for doesn't exist.</p>
          <Link 
            to="/"
            className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

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

      <div className="container mx-auto px-8 py-8 z-10">
        {/* Back button */}
        <Link 
          to="/"
          className="mb-8 flex items-center space-x-2 bg-purple-900/30 backdrop-blur-sm py-2 px-4 rounded-lg border border-purple-700/30 hover:bg-purple-800/40 transition-colors text-purple-200 inline-block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M5 12l7 7M5 12l7-7"/>
          </svg>
          <span>Back to Home</span>
        </Link>

        {/* Project Hero Section */}
        <div className="mb-12 bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-700/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Image */}
            <div className="h-64 md:h-96 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Project Info */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-700/30">
                  {project.category}
                </span>
                <span className="ml-3 bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-700/30">
                  {project.year}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{project.name}</h1>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-700/30">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons Container */}
              <div className="flex flex-wrap gap-4">
                {/* GitHub Button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-purple-900/40 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}

                {/* Check Now Button - Only show for projects with website URLs */}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-purple-700/30 hover:bg-purple-900/40 hover:border-purple-500/50 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-300">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <span className="font-semibold">Check Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-300/80">
                      <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Overview */}
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-purple-700/30">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300">{project.longDescription}</p>
          </div>
          
          {/* Challenges */}
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-purple-700/30">
            <h2 className="text-2xl font-bold text-white mb-4">Challenges</h2>
            <p className="text-gray-300">{project.challenges}</p>
          </div>
          
          {/* Results */}
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-purple-700/30">
            <h2 className="text-2xl font-bold text-white mb-4">Results</h2>
            <p className="text-gray-300">{project.results}</p>
          </div>
        </div>

        {/* Project Gallery - Placeholder */}
        <div className="mb-12 bg-black/40 backdrop-blur-md p-6 rounded-xl border border-purple-700/30">
          <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-48 bg-purple-900/20 rounded-lg overflow-hidden border border-purple-700/20 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={`Gallery ${item}`} 
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Key Features - Placeholder */}
        <div className="mb-12 bg-black/40 backdrop-blur-md p-6 rounded-xl border border-purple-700/30">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Responsive design that works across all devices",
              "Secure authentication and authorization system",
              "Advanced data analytics and visualization",
              "Scalable architecture for future growth",
              "Seamless third-party integrations",
              "Comprehensive documentation and support"
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-purple-700/30 p-2 rounded-md mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-300">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <p className="text-gray-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-purple-700/30">
          <h2 className="text-2xl font-bold text-white mb-6">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.filter(p => p.category === project.category && p.name !== project.name)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <div 
                  key={index} 
                  className="bg-purple-900/20 rounded-lg overflow-hidden border border-purple-700/20 cursor-pointer hover:border-purple-500/50 transition-all"
                >
                  <Link to={`/project/${relatedProject.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="h-36 overflow-hidden">
                      <img 
                        src={relatedProject.image} 
                        alt={relatedProject.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white">{relatedProject.name}</h3>
                      <p className="text-sm text-gray-400">{relatedProject.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;