import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function ImageBioSplit() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const bioVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.3
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150
      }
    }
  };

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
    <div className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <motion.img 
                src={`${process.env.PUBLIC_URL}/swastik.jpg`}
                alt="Swastik Shetty" 
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center lg:text-left"
            variants={bioVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-accent-primary mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="text-lg leading-loose text-text-primary mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p>
                Detail-oriented full-stack developer with experience building modern 
                web and mobile applications. Skilled in JavaScript, Java, Spring Boot, 
                React.js, Node.js, and more. Passionate about clean code, REST APIs, 
                and building scalable solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className=""
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.h3 
                className="text-2xl font-bold text-text-primary border-b-2 border-accent-primary pb-2 mb-8 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Education
              </motion.h3>
              {educationData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-primary/50 dark:bg-primary/50 rounded-xl p-6 mb-4 border-l-4 border-accent-primary transition-all duration-300 ease-in-out hover:bg-primary/60 dark:hover:bg-primary/60 hover:translate-x-2 hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <div className="text-accent-primary font-semibold text-sm bg-accent-primary/20 px-3 py-1 rounded-full inline-block mb-2">{item.period}</div>
                  <div className="text-text-primary dark:text-text-primary text-xl font-semibold mb-1">{item.degree}</div>
                  <div className="text-text-primary text-base">{item.institution}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ImageBioSplit;