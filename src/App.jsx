import React, { useEffect, useState } from "react";
import Navbar from "./components/portfolio/Navbar";
import HeroSection from "./components/portfolio/HeroSection";
import AboutSection from "./components/portfolio/AboutSection";
import SkillsSection from "./components/portfolio/SkillsSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import CertificationsSection from "./components/portfolio/CertificationsSection";
import ContactSection from "./components/portfolio/ContactSection";
import Footer from "./components/portfolio/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  // 🔥 THIS IS THE IMPORTANT PART
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
