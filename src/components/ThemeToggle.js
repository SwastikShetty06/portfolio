import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const buttonClasses = `fixed top-8 right-8 z-50 w-14 h-14 rounded-full border-none bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out text-2xl hover:bg-white/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 active:translate-y-0 dark:bg-black/30 dark:border-white/10 dark:hover:bg-black/40`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className="flex items-center justify-center w-full h-full"
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {theme === 'light' ? (
          <motion.span
            key="sun"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.4 }}
          >
            ☀️
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.4 }}
          >
            🌙
          </motion.span>
        )}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
