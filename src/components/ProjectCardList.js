import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProjectCardList.css';

const projects = [
  {
    id: 'NSA',
    title: 'Notes Sharing App',
    description: 'Mobile app for note sharing with real-time sync, offline access, and Spring Boot backend.',
    tech: ['Flutter', 'Spring Boot', 'PostgreSQL'],
    features: ['Real-time synchronization', 'User authentication', 'Offline access'],
    github: 'https://github.com/SwastikShetty06'
  },
  {
    id: 'PT',
    title: 'Pet Tinder',
    description: 'Swipe-based pet adoption platform with JWT auth, cloud image uploads, and smart matching.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    features: ['JWT Authentication', 'Swipe functionality', 'Cloudinary uploads'],
    github: 'https://github.com/SwastikShetty06/pet-tinder'
  },
  {
    id: 'FSW',
    title: 'Football Scores Website',
    description: 'Web app showing real-time football scores, stats and match schedules.',
    tech: ['React.js', 'Tailwind CSS', 'API Integration'],
    features: ['Live scores', 'Team dashboards', 'Schedule tracking'],
    github: 'https://github.com/SwastikShetty06/FootballScores',
    live: 'https://footballscores-swastik.web.app/'
  },
  {
    id: 'ND',
    title: 'News Dashboard',
    description: 'Dashboard delivering trending news with filtering by category and source.',
    tech: ['React.js', 'Bootstrap', 'Tailwind CSS'],
    features: ['Responsive cards', 'Category filtering', 'Live news data'],
    github: 'https://github.com/SwastikShetty06/s-news',
    live: 'https://news-app-06.web.app/'
  },
];

function ProjectCardList() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="project-card-list" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="font-display text-accent">Featured Projects</h2>
          <p className="text-muted">Scroll to explore and hover to reveal details</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="card-front">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span className="tech-badge" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="card-details">
                <ul className="feature-list">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">👨‍💻 GitHub</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">🔗 Live</a>
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
