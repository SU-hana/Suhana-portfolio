import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Import your landing page
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import ServicesSection from "./components/Service";
import Projects from "./components/project";
import ProjectDetail from "./components/ProjectDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page as the home route */}
        <Route path="/" element={<LandingPage />} />

        {/* Main portfolio page with all sections */}
        <Route path="/portfolio" element={
          <>
            <Navbar/>
            <Main />
            <AboutMe />
            <ServicesSection />
            <Projects />
          </>
        } />

        {/* Project detail page */}
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;