import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ImageBioSplit.css';

function ImageBioSplit() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const bioVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.3
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150
      }
    }
  };

  const educationData = [
    {
      period: '2022–2025',
      degree: 'BCA',
      institution: 'Hinduja College of Commerce'
    },
    {
      period: '2020–2022',
      degree: 'HSC',
      institution: 'VIVA College'
    },
    {
      period: '2010–2020',
      degree: 'SSC',
      institution: 'St. James High School'
    }
  ];

  return (
    <div className="image-bio-split" ref={ref}>
      <div className="container">
        <div className="split-content grid grid-2">
          <motion.div 
            className="image-section"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              className="profile-image-container"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <motion.img 
                src={`${process.env.PUBLIC_URL}/swastik.jpg`}
                alt="Swastik Shetty" 
                className="profile-image"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bio-section"
            variants={bioVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="bio-text mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p>
                Detail-oriented full-stack developer with experience building modern 
                web and mobile applications. Skilled in JavaScript, Java, Spring Boot, 
                React.js, Node.js, and more. Passionate about clean code, REST APIs, 
                and building scalable solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="education-timeline"
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.h3 
                className="mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Education
              </motion.h3>
              {educationData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-degree">{item.degree}</div>
                  <div className="timeline-institution">{item.institution}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ImageBioSplit;
