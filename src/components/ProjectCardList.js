import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
    <div className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent font-display">Featured Projects</h2>
          <p className="text-lg text-muted mt-2">Scroll to explore and hover to reveal details</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              className="group relative bg-cream/20 rounded-3xl overflow-hidden shadow-lg p-8 min-h-[280px] cursor-pointer transition-transform duration-400 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="transition-all duration-300 ease-in-out lg:group-hover:opacity-0 lg:group-hover:-translate-y-5">
                <h3 className="text-indigo text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-sky-blue text-base mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span className="bg-black/20 border border-white/20 px-3 py-1.5 rounded-full text-xs text-white font-medium" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 left-0 p-8 w-full h-full opacity-0 transform translate-y-5 transition-all duration-400 ease-in-out lg:group-hover:opacity-100 lg:group-hover:translate-y-0 pointer-events-none lg:group-hover:pointer-events-auto">
                <ul className="list-none p-0 m-0 mb-6">
                  {project.features.map((f, i) => (
                    <li key={i} className="text-indigo text-sm mb-1.5 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-golden">{f}</li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline text-sm">👨‍💻 GitHub</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary text-sm">🔗 Live</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-cream/20 p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-indigo mb-2">Want to see more?</h3>
            <p className="text-sky-blue mb-6">Check out my GitHub profile for more projects and contributions</p>
            <a href="https://github.com/SwastikShetty06" target="_blank" rel="noopener noreferrer" className="btn btn-primary inline-flex items-center gap-2">
              <span className="text-lg">⭐</span> VIEW GITHUB PROFILE
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectCardList;
