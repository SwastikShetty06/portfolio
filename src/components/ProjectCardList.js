import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GITHUB_USERNAME = 'SwastikShetty06';
const PORTFOLIO_TOPIC = 'portfolio-showcase';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-bg-tertiary rounded-3xl overflow-hidden shadow-lg p-8 min-h-[340px] flex flex-col justify-between transition-transform duration-400 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div>
        <h3 className="text-text-primary text-2xl font-bold mb-2 capitalize">{project.name.replace(/-/g, ' ')}</h3>
        <div className="relative h-24 mt-4">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.p
                key="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="text-text-secondary text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-accent-primary/50 scrollbar-track-bg-secondary pr-2 absolute inset-0"
              >
                {project.description || 'No description provided.'}
              </motion.p>
            ) : (
              <motion.div
                key="links"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="absolute inset-0 flex flex-col justify-center items-center gap-3"
              >
                <a href={project.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 border border-accent-primary text-accent-primary rounded-full transition-all hover:bg-accent-primary hover:text-white w-40 justify-center">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.257.82-.577v-2.128c-3.338.724-4.04-1.611-4.04-1.611-.542-1.378-1.328-1.742-1.328-1.742-1.086-.744.084-.729.084-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.492.996.107-.775.419-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.517.117-3.179 0 0 1.008-.322 3.301 1.231 1.011-.282 2.07-.423 3.13-.429 1.059.006 2.118.147 3.129.429 2.293-1.553 3.301-1.231 3.301-1.231.653 1.662.242 2.876.118 3.179.768.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.21.69.825.577C20.565 21.785 24 17.285 24 12c0-6.627-5.373-12-12-12z" /></svg>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-accent-primary text-white rounded-full transition-all hover:bg-accent-secondary w-40 justify-center">
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.language && (
            <span className="bg-text-secondary/20 border border-text-secondary/30 px-3 py-1.5 rounded-full text-xs text-text-secondary font-medium">{project.language}</span>
          )}
          <span className="bg-text-secondary/20 border border-text-secondary/30 px-3 py-1.5 rounded-full text-xs text-text-secondary font-medium">
            ⭐ {project.stargazers_count}
          </span>
          <span className="bg-text-secondary/20 border border-text-secondary/30 px-3 py-1.5 rounded-full text-xs text-text-secondary font-medium">
            🍴 {project.forks_count}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

function ProjectCardList() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    // Search API endpoint to find repositories by user and topic
    const GITHUB_API_URL = `https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:${PORTFOLIO_TOPIC}&sort=stars&order=desc`;

    const fetchProjects = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        const data = await response.json();

        if (response.ok) {
          // The search API returns results in an 'items' array.
          // We will take the top 6 starred projects from the results.
          setProjects(data.items.slice(0, 6));
        } else {
          setError(data.message || 'Failed to fetch GitHub projects.');
        }
      } catch (err) {
        setError('Network error. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-24">
        <svg className="animate-spin h-10 w-10 text-accent-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-24">
        <p className="text-red-500 font-medium">Error: {error}</p>
      </div>
    );
  }
  
  return (
    <div className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent-primary font-display">Featured Projects</h2>
          <p className="text-lg text-text-primary mt-2">Discover some of my recent work from GitHub</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-bg-tertiary p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-text-primary mb-2">Want to see more?</h3>
            <p className="text-text-primary mb-6">Explore more projects on my GitHub profile.</p>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-medium rounded-full transition-all hover:bg-accent-secondary">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.257.82-.577v-2.128c-3.338.724-4.04-1.611-4.04-1.611-.542-1.378-1.328-1.742-1.328-1.742-1.086-.744.084-.729.084-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.492.996.107-.775.419-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.517.117-3.179 0 0 1.008-.322 3.301 1.231 1.011-.282 2.07-.423 3.13-.429 1.059.006 2.118.147 3.129.429 2.293-1.553 3.301-1.231 3.301-1.231.653 1.662.242 2.876.118 3.179.768.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.21.69.825.577C20.565 21.785 24 17.285 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              VIEW GITHUB PROFILE
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectCardList;
