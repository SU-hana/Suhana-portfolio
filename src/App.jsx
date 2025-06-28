import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroLandingPage from "./components/IntroLandingPage"; // The intro landing page
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import ServicesSection from "./components/Service";
import Projects from "./components/project";
import ProjectDetail from "./components/ProjectDetail";
import Navbar from "./components/Navbar";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Check if user has already seen the intro (optional)
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Optional: Remember that user has seen the intro
    localStorage.setItem('hasSeenIntro', 'true');
  };

  // Show intro landing page first
  if (showIntro) {
    return <IntroLandingPage onComplete={handleIntroComplete} />;
  }

  // Show main portfolio after intro
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Main />
            <AboutMe />
            <ServicesSection />
            <Projects />
          </>
        } />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroLandingPage from "./components/IntroLandingPage"; // The intro landing page
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import ServicesSection from "./components/Service";
import Projects from "./components/project";
import ProjectDetail from "./components/ProjectDetail";
import Navbar from "./components/Navbar";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Check if user has already seen the intro (optional)
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Optional: Remember that user has seen the intro
    localStorage.setItem('hasSeenIntro', 'true');
  };

  // Show intro landing page first
  if (showIntro) {
    return <IntroLandingPage onComplete={handleIntroComplete} />;
  }

  // Show main portfolio after intro
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Main />
            <AboutMe />
            <ServicesSection />
            <Projects />
          </>
        } />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

export default App;