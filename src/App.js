import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import ImageBioSplit from './components/ImageBioSplit';
import SkillGroupGrid from './components/SkillGroupGrid';
import ProjectCardList from './components/ProjectCardList';
import CertificatesSection from './components/CertificatesSection';
import ResumeBlock from './components/ResumeBlock';
import ContactFormBlock from './components/ContactFormBlock';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <Navbar />
        <main className="main-content">
          <section id="hero" className="section">
            <HeroHeader />
          </section>
          <section id="about" className="section">
            <ImageBioSplit />
          </section>
          <section id="skills" className="section">
            <SkillGroupGrid />
          </section>
          <section id="projects" className="section">
            <ProjectCardList />
          </section>
          <section id="certificates" className="section">
            <CertificatesSection />
          </section>
          <section id="resume" className="section">
            <ResumeBlock />
          </section>
          <section id="contact" className="section">
            <ContactFormBlock />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
