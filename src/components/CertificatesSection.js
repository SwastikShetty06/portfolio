import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
    <div className="py-8 md:py-16" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-2">Certifications & Training</h2>
          <p className="text-lg text-sky-blue">Professional certifications and completed training programs</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-cream/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-indigo-100 h-auto md:h-80 flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:border-golden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-indigo to-sky-blue p-5 flex flex-col md:flex-row items-center gap-4 text-white text-center md:text-left">
                <div className="text-4xl opacity-90">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-1">{cert.title}</h3>
                  <p className="text-white/80 text-sm">{cert.provider}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">📅 {cert.year}</span>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-indigo text-sm leading-relaxed mb-4 opacity-80">{cert.description}</p>
                
                <div className="mt-auto">
                  <h5 className="text-indigo text-sm font-semibold mb-2">Skills Covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-indigo-100 text-indigo px-2 py-1 rounded-md text-xs font-medium border border-indigo-200">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-indigo to-sky-blue p-8 rounded-xl text-center text-white max-w-3xl shadow-lg">
            <h3 className="text-white text-xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-white/90 text-base leading-relaxed">I believe in continuous learning and staying updated with the latest technologies and industry best practices. These certifications represent my commitment to professional growth and excellence in software development.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CertificatesSection;
