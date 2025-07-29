import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import LoadingAnimation from './LoadingAnimation';
import './ContactFormBlock.css';

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
    <div className="contact-form-block" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Let's build something together</h2>
          <p>Ready to collaborate? Drop me a message!</p>
        </motion.div>
        
        <div className="contact-content grid grid-2">
          <motion.div
            className="form-section"
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="from_name">Name</label>
                <input 
                  type="text" 
                  id="from_name" 
                  name="from_name" 
                  required 
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="from_email">Email</label>
                <input 
                  type="email" 
                  id="from_email" 
                  name="from_email" 
                  required 
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary submit-btn"
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
                      className="button-content"
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
                    className="status-message success"
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
                    className="status-message error"
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
            className="social-section"
            variants={socialVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Connect with me
            </motion.h3>
            <motion.div 
              className="social-links"
              variants={socialVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link hover-lift"
                  variants={socialItemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
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
