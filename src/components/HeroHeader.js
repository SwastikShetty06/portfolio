import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import heroLottie from '../assets/animations/hero-lottie.json'; // NEW: Your animation
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
    <div className="w-full min-h-screen flex items-center justify-center relative py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12 lg:gap-16 text-center lg:text-left">
          {/* Left side - Text Content */}
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm <span className="text-neon-cyan relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r from-neon-cyan to-slate after:rounded-full">Swastik</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-neon-cyan mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-slate mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate Full Stack Developer skilled in React.js and Java, crafting optimized web and mobile apps with modern technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
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
            className="flex-1 flex justify-center items-center max-w-lg"
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
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-indigo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="text-sm font-medium opacity-80">Scroll down</div>
          <motion.div 
            className="text-2xl font-bold animate-bounce"
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
