import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ImageBioSplit.css';

function ImageBioSplit() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-image-container">
              <img 
                src="/swastik.jpg" 
                alt="Swastik Shetty" 
                className="profile-image"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="bio-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-4">About Me</h2>
            <div className="bio-text mb-5">
              <p>
                Detail-oriented full-stack developer with experience building modern 
                web and mobile applications. Skilled in JavaScript, Java, Spring Boot, 
                React.js, Node.js, and more. Passionate about clean code, REST APIs, 
                and building scalable solutions.
              </p>
            </div>
            
            <div className="education-timeline">
              <h3 className="mb-3">Education</h3>
              {educationData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-degree">{item.degree}</div>
                  <div className="timeline-institution">{item.institution}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ImageBioSplit;
