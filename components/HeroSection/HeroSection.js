// components/HeroSection/HeroSection.js
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const roles = ['Producer', 'Writer', 'Director', 'GameChanger'];
const colors = ['#FF6F61', '#B0B0B0', '#1ABC9C', '#F39C12'];
const fonts = ['"Franklin Gothic Medium"', 'Playfair Display, serif', 'Cinzel, serif', '"Impact", sans-serif'];

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{
        maxWidth: 800,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={styles.textContainer}
    >
      <motion.h1>Home</motion.h1>
      <motion.h1>Page</motion.h1>
    </motion.div>
  );
}


const Roles = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h2
      key={roles[currentRoleIndex]}
      style={{ fontFamily: fonts[currentRoleIndex], color: colors[currentRoleIndex] }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.role}
    >
      {roles[currentRoleIndex].toUpperCase()}
    </motion.h2>
  )
}