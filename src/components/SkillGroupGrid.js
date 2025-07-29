import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import reactIcon from '../assets/animations/react-icon.json';
import './SkillGroupGrid.css';

function SkillGroupGrid() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillGroups = [
    {
      category: 'Languages',
      skills: ['Java', 'JavaScript', 'Python', 'Dart', 'C++'],
      icon: '💻',
      type: 'emoji'
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Tailwind', 'Material UI'],
      icon: reactIcon,
      type: 'lottie'
    },
    {
      category: 'Backend',
      skills: ['Spring Boot', 'Node.js', 'Express.js'],
      icon: '⚙️',
      type: 'emoji'
    },
    {
      category: 'Mobile',
      skills: ['Flutter', 'React Native'],
      icon: '📱',
      type: 'emoji'
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
      icon: '🗄️',
      type: 'emoji'
    },
    {
      category: 'Tools',
      skills: ['Git', 'Postman', 'IntelliJ IDEA', 'VS Code'],
      icon: '🔧',
      type: 'emoji'
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Debugging', 'Team Collaboration'],
      icon: '🤝',
      type: 'emoji'
    }
  ];

  return (
    <div className="skill-group-grid" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Skills & Technologies</h2>
          <p>Technologies and tools I use to bring ideas to life</p>
        </motion.div>
        
        <div className="skills-grid grid grid-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              className="skill-card hover-lift"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="skill-icon">
                {group.type === 'lottie' ? (
                  <Lottie 
                    animationData={group.icon} 
                    className="skill-lottie-icon"
                    loop={true}
                  />
                ) : (
                  group.icon
                )}
              </div>
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillGroupGrid;
