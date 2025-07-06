import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ResumeBlock.css';

function ResumeBlock() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/swastikshettyresume.pdf`;
    link.download = 'Swastik_Shetty_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-block" ref={ref}>
      <div className="container">
        <motion.div
          className="resume-content text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4">Resume</h2>
          <p className="mb-5">
            Download my complete resume to learn more about my experience, 
            education, and technical skills.
          </p>
          
          <motion.button
            className="btn btn-primary btn-large hover-lift"
            onClick={downloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download My Resume
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default ResumeBlock;
