import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProjectCardList.css';

function ProjectCardList() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      id: 'NSA',
      title: 'Notes Sharing App',
      description: 'A comprehensive mobile application for sharing and managing notes with real-time synchronization. Include user authentication, note categorization, sharing capabilities, and offline support.',
      tech: ['Flutter', 'Spring Boot', 'PostgreSQL', 'REST API'],
      features: [
        'Real-time note synchronization',
        'User authentication system',
        'Offline note access'
      ],
      githubFrontend: 'https://github.com/SwastikShetty06',
      githubBackend: 'https://github.com/SwastikShetty06'
    },
    {
      id: 'PT',
title: 'Pet Tinder – Full Stack Pet Adoption Platform',
      description: 'Swipe-based pet adoption app with JWT authentication, image uploads, smart matching, and community listings.',
      tech: ['React.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Node.js', 'Cloudinary'],
      features: [
        'Secure JWT authentication',
        'Community-driven pet listings',
        'Real-time notifications'
      ],
      github: 'https://github.com/SwastikShetty06/pet-tinder'
    },
    {
      id: 'FSW',
      title: 'Football Scores Website',
      description: 'A responsive web application providing real-time football scores, team statistics, and match schedules. Built with modern React patterns and featuring a clean, intuitive interface.',
      tech: ['React.js', 'Tailwind CSS', 'API Integration', 'Responsive Design'],
      features: [
        'Real-time score updates',
        'Team statistics dashboard',
        'Match schedules and fixtures'
      ],
      github: 'https://github.com/SwastikShetty06/FootballScores',
      live: 'https://footballscores-swastik.web.app/'
    },
    {
      id: 'FSW',
      title: 'Football Scores Website',
      description: 'A responsive web application providing real-time football scores, team statistics, and match schedules. Built with modern React patterns and featuring a clean, intuitive interface.',
      tech: ['React.js', 'Tailwind CSS', 'API Integration', 'Responsive Design'],
      features: [
        'Real-time score updates',
        'Team statistics dashboard',
        'Match schedules and fixtures'
      ],
      github: 'https://github.com/SwastikShetty06/FootballScores',
      live: 'https://footballscores-swastik.web.app/'
    },
  ];

  return (
    <div className="project-card-list" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Featured Projects</h2>
          <p>Some of my recent work and personal projects</p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-header">
                <h3 className="project-id">{project.id}</h3>
              </div>
              
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="key-features">
                  <h5>Key Features:</h5>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-code">
                      <span className="btn-icon">👨‍💻</span> CODE
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="btn btn-code">
                      <span className="btn-icon">👨‍💻</span> CODE
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
                      <span className="btn-icon">🔗</span> LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="github-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="cta-content">
            <h3>Want to see more?</h3>
            <p>Check out my GitHub profile for more projects and contributions</p>
            <a href="https://github.com/SwastikShetty06" target="_blank" rel="noopener noreferrer" className="btn btn-github">
              <span className="btn-icon">⭐</span> VIEW GITHUB PROFILE
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectCardList;
