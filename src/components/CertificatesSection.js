import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CertificatesSection.css';

function CertificatesSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const certificates = [
    {
      title: 'Node.js Certification',
      provider: 'Scaler',
      year: '2023',
      description: 'Comprehensive certification covering Node.js fundamentals, Express.js, RESTful APIs, and backend development best practices.',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Backend Development'],
      icon: '🖥️'
    },
    {
      title: 'Web Designing & PHP Development',
      provider: 'Asterix Solution',
      year: '2022',
      description: 'Full-stack web development certification covering HTML, CSS, JavaScript, PHP, and database integration.',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      icon: '🌐'
    },
    {
      title: 'Digital Marketing Fundamentals',
      provider: 'Google',
      year: '2023',
      description: 'Google certification covering digital marketing strategies, SEO, social media marketing, and analytics.',
      skills: ['SEO', 'Social Media Marketing', 'Google Analytics', 'Digital Strategy'],
      icon: '📊'
    },
    {
      title: 'Software Engineering Virtual Experience',
      provider: 'J.P. Morgan (Forage)',
      year: '2023',
      description: 'Virtual internship program covering software engineering practices, financial technology, and industry best practices.',
      skills: ['Software Engineering', 'Financial Technology', 'Problem Solving', 'Industry Practices'],
      icon: '🏦'
    }
  ];

  return (
    <div className="certificates-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Certifications & Training</h2>
          <p>Professional certifications and completed training programs</p>
        </motion.div>
        
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="certificate-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="cert-header">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-provider">{cert.provider}</p>
                </div>
                <div className="cert-year">
                  <span className="year-badge">📅 {cert.year}</span>
                </div>
              </div>
              
              <div className="cert-content">
                <p className="cert-description">{cert.description}</p>
                
                <div className="skills-section">
                  <h5>Skills Covered:</h5>
                  <div className="skills-list">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="continuous-learning"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="learning-content">
            <h3>Continuous Learning</h3>
            <p>I believe in continuous learning and staying updated with the latest technologies and industry best practices. These certifications represent my commitment to professional growth and excellence in software development.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CertificatesSection;
