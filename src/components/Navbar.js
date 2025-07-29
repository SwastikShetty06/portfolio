import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      // Fade in and out navbar based on scroll
      if (scrollPos > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top,
            bottom: rect.bottom
          };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find(section => 
        section.top <= 200 && section.bottom >= 200
      );
      
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`navbar ${isVisible ? 'visible' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -50 
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      <div className="nav-container">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
