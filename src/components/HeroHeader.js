import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import codingAnimation from '../assets/animations/coding-animation.json';
import heroLottie from '../assets/animations/hero-lottie.json'; // NEW: Your animation
import './HeroHeader.css';

function HeroHeader() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/swastikshettyresume.pdf`;
    link.download = 'Swastik_Shetty_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero-header">
      <div className="container">
        <div className="hero-wrapper">
          {/* Left side - Text Content */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm <span className="name-highlight">Swastik</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate Full Stack Developer skilled in React.js and Java, crafting optimized web and mobile apps with modern technologies.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button 
                className="btn btn-primary hover-lift"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
              <button 
                className="btn btn-secondary hover-lift"
                onClick={downloadResume}
              >
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Lottie Animation */}
          <motion.div 
            className="hero-animation"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Lottie 
              animationData={heroLottie} 
              loop 
              autoplay 
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="scroll-text">Scroll down</div>
          <motion.div 
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroHeader;
