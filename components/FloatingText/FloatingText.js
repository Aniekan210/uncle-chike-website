import React from 'react';
import { motion } from 'framer-motion';
import './FloatingText.css';

const FloatingText = ({ text }) => {
  return (
    <motion.div
      className="floating-text"
      style={{
        top: `${Math.random() * 100 - 1}%`,
        left: `${Math.random() * 100 - 1}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 1, 0], y: ['0%', '-50%'] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    >
      {text}
    </motion.div>
  );
};

export default FloatingText;
