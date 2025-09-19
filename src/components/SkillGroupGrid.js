import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import reactIcon from '../assets/animations/react-icon.json';
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
    <div className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo">Skills & Technologies</h2>
          <p className="text-lg text-sky-blue mt-2">Technologies and tools I use to bring ideas to life</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              className="bg-cream/10 backdrop-blur-lg rounded-3xl p-8 text-center border-2 border-white/20 transition-all duration-400 ease-in-out hover:border-white/40 hover:bg-black/10 hover:shadow-2xl hover:-translate-y-2 hover:scale-102"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4 flex justify-center items-center h-20">
                {group.type === 'lottie' ? (
                  <Lottie 
                    animationData={group.icon} 
                    className="w-16 h-16 drop-shadow-lg"
                    loop={true}
                  />
                ) : (
                  group.icon
                )}
              </div>
              <h3 className="text-indigo text-xl font-bold mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((skill, skillIndex) => (
                  <span key={skill} className="bg-gray-500/20 backdrop-blur-sm text-sky-blue px-4 py-2 rounded-full text-sm font-semibold border border-white/30 transition-all duration-300 ease-in-out hover:bg-indigo hover:text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg">
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
