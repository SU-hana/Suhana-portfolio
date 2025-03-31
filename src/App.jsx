import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import ServicesSection from "./components/Service";
import Projects from "./components/project";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
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