import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      // Set visibility based on scroll direction
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
      
      // Set scrolled state if page is scrolled down
      setScrolled(currentScrollPos > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header 
      className={`px-8 py-4 flex items-center justify-between w-full z-10 fixed top-0 left-0 right-0 transition-all duration-300 
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${scrolled ? 'bg-purple-900/20 backdrop-blur-md  shadow-lg' : 'bg-transparent'}`}
    >
      <div className="text-white text-2xl font-bold">
        <span className="text-purple-500">S</span>
        <span className="text-pink-500">S</span>
      </div>
      
      <nav className="flex gap-8">
        <a href="#About" className="text-white hover:text-purple-400 transition-colors">About Me</a>
        <a href="#services" className="text-white hover:text-purple-400 transition-colors">Services</a>
        <a href="#projects" className="text-white hover:text-purple-400 transition-colors">Projects</a>
        <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact Me</a>
      </nav>
      <button className="text-white text-xl">
        🌙
      </button>
    </header>
  );
};

export default Navbar;