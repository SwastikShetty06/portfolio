import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import './ContactFormBlock.css';

function ContactFormBlock() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <div className="status-message success">Message sent successfully! 🎉</div>
              )}
              {submitStatus === 'error' && (
                <div className="status-message error">Failed to send message. Please try again.</div>
              )}
            </form>
          </motion.div>
          
          <motion.div
            className="social-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="mb-3">Connect with me</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormBlock;
