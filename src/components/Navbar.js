import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  const navItems = useMemo(() => [
    { id: 'hero', label: 'Home', mobileLabel: 'Home' },
    { id: 'about', label: 'About', mobileLabel: 'About' },
    { id: 'skills', label: 'Skills', mobileLabel: 'Skills' },
    { id: 'projects', label: 'Projects', mobileLabel: 'Work' },
    { id: 'certificates', label: 'Certificates', mobileLabel: 'Cert' },
    { id: 'resume', label: 'Resume', mobileLabel: 'CV' },
    { id: 'contact', label: 'Contact', mobileLabel: 'Talk' }
  ], []);

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
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClasses = (itemId) =>
    `bg-transparent border-none text-neon-cyan text-sm font-medium px-3 md:px-5 py-2 md:py-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap hover:bg-slate/50 hover:text-neon-cyan flex-1 md:flex-none text-center
    ${activeSection === itemId ? 'bg-neon-cyan text-navy shadow-md hover:bg-neon-cyan' : ''}`;

  return (
    <motion.nav 
      className="fixed top-4 right-4 left-4 md:left-auto md:w-auto z-50 bg-light-gray/95 dark:bg-navy/95 backdrop-blur-md rounded-full p-1 md:p-2 shadow-lg border border-slate"
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
      <div className="flex items-center">
        <ul className="flex list-none m-0 p-0 gap-1 md:gap-2 w-full">
          {navItems.map((item) => (
            <li key={item.id} className="flex-1 md:flex-none">
              <button
                className={navLinkClasses(item.id)}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="hidden md:inline">{item.label}</span>
                <span className="inline md:hidden text-xs">{item.mobileLabel}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
