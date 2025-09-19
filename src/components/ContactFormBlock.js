import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import LoadingAnimation from './LoadingAnimation';
function ContactFormBlock() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200
      }
    }
  };

  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_ij8j4eg',
        'template_jm4ubcn',
        formRef.current,
        's-bKCjxmR-0Y4t36b'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const socialLinks = [
    { name: 'Email', url: 'mailto:swastikshetty06ss@gmail.com', icon: '📧' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/swastik-shetty-186802235', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/SwastikShetty06', icon: '🐙' }
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-2">Let's build something together</h2>
          <p className="text-lg text-sky-blue">Ready to collaborate? Drop me a message!</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="w-full"
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl transition-all duration-400 hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5">
              <div className="mb-6">
                <label htmlFor="from_name" className="block text-indigo font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  id="from_name" 
                  name="from_name" 
                  required 
                  placeholder="Your name"
                  className="w-full p-4 border border-white/30 rounded-2xl bg-white/80 backdrop-blur-sm text-indigo transition-all duration-300 shadow-md focus:outline-none focus:border-indigo focus:bg-white/90 focus:shadow-lg focus:-translate-y-px placeholder-indigo/60"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="from_email" className="block text-indigo font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  id="from_email" 
                  name="from_email" 
                  required 
                  placeholder="your.email@example.com"
                  className="w-full p-4 border border-white/30 rounded-2xl bg-white/80 backdrop-blur-sm text-indigo transition-all duration-300 shadow-md focus:outline-none focus:border-indigo focus:bg-white/90 focus:shadow-lg focus:-translate-y-px placeholder-indigo/60"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-indigo font-semibold mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full p-4 border border-white/30 rounded-2xl bg-white/80 backdrop-blur-sm text-indigo transition-all duration-300 shadow-md focus:outline-none focus:border-indigo focus:bg-white/90 focus:shadow-lg focus:-translate-y-px placeholder-indigo/60"
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary w-full mt-4"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <LoadingAnimation size={20} message="" />
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    className="mt-4 p-4 rounded-lg text-center font-medium bg-green-500/10 text-green-500 border border-green-500/30"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    Message sent successfully! 🎉
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div 
                    className="mt-4 p-4 rounded-lg text-center font-medium bg-red-500/10 text-red-500 border border-red-500/30"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
          
          <motion.div
            className="w-full"
            variants={socialVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-indigo mb-8 text-2xl font-bold text-center lg:text-left"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Connect with me
            </motion.h3>
            <motion.div 
              className="flex flex-col gap-4"
              variants={socialVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl text-indigo border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:text-indigo hover:shadow-xl hover:-translate-y-1"
                  variants={socialItemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-medium text-lg">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormBlock;
