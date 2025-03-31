import React, { useState, useEffect } from 'react';

const ServiceCard = ({ icon, title, description, delay }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className={`
        relative 
        group 
        transition-all 
        duration-700 
        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        delay-${delay}
      `}
    >
      {/* Glowing background effect - matching Projects card */}
      <div className="absolute -inset-0.5  rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
      
      {/* Service Card - matching Projects card style */}
      <div 
        className="
          bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12 transition-all duration-1000 delay-200
        "
      >
        {/* Icon */}
        <div>
          {icon}
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
     
      title: "Web Development",
      description: "Crafting responsive, performant web applications using modern technologies and best practices.",
      delay: "200"
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end development from backend architecture to frontend design, ensuring seamless integration.",
      delay: "300"
    },
    {
      title: "Consulting",
      description: "Technical guidance and strategic solutions to optimize your digital infrastructure and workflow.",
      delay: "400"
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to meet your business needs and enhance operational efficiency.",
      delay: "400"
    },
    {
      title: "Web Development",
      description: "Building dynamic, responsive, and user-friendly websites to elevate your online presence.",
      delay: "400"
    },
    {
      title: "Testing and Debugging",
      description: "Comprehensive testing and debugging to ensure seamless performance and reliability.",
      delay: "400"
    }
  ];

  return (
    <section 
      id="services"
      className="
        min-h-screen 
        bg-gradient-to-br 
        from-gray-950 
        via-black 
        to-gray-950
        flex 
        items-center 
        justify-center 
        px-8 
        py-16
        relative
        overflow-hidden
      "
    >
      {/* Grid overlay - matching Projects page */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundSize: '20px 20px',
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`
      }}></div>
      
      {/* Background Elements - matching Projects page */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: "1.5s"}}></div>
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        <div className="text-center mb-12">
          {/* Title section - matching Projects page style */}
          <div className="inline-block bg-black/40 backdrop-blur-sm py-4 px-8 rounded-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">My</span> <span className="text-purple-400">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Delivering innovative solutions that transform your digital vision into reality.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;