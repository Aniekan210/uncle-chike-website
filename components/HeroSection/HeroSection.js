// components/HeroSection/HeroSection.js
'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import useDeviceType from '@/hooks/useDeviceType';

const roles = ['Producer', 'Writer', 'Script Doctor', 'Director', 'Game Changer'];

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const deviceType = useDeviceType();

  useEffect(() => {
    if (deviceType === 'mobile' || deviceType === 'tablet') {
      setIsHovered(true);
    }
  }, [deviceType])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={styles.container}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={styles.textContainer}
      >
        {deviceType === 'largeDesktop' && (<><motion.h1
          initial={{ y: 0, opacity: 1 }}
          animate={isHovered ? { y: -100, opacity: 0.2 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >CHIKEZIE TEDDY</motion.h1>
          <motion.h1
            initial={{ y: 0, opacity: 1 }}
            animate={isHovered ? { y: 100, opacity: 0.2 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >OHIAGU-ANANABA</motion.h1></>)}

        {deviceType === 'desktop' && (<><motion.h1
          initial={{ y: 0, opacity: 1 }}
          animate={isHovered ? { y: -100, opacity: 0.2 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >CHIKEZIE TEDDY</motion.h1>
          <motion.h1
            initial={{ y: 0, opacity: 1 }}
            animate={isHovered ? { y: 100, opacity: 0.2 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >OHIAGU-ANANABA</motion.h1></>)}

        {deviceType === 'tablet' && (<><motion.h1
          initial={{ y: 0, opacity: 1 }}
          animate={isHovered ? { y: -85, opacity: 0.2 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >CHIKEZIE TEDDY</motion.h1>
          <motion.h1
            initial={{ y: 0, opacity: 1 }}
            animate={isHovered ? { y: 85, opacity: 0.2 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >OHIAGU-ANANABA</motion.h1></>)}

        {deviceType === 'mobile' && (<><motion.h1
          initial={{ y: 0, opacity: 1 }}
          animate={isHovered ? { y: -65, opacity: 0.2 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >CHIKEZIE TEDDY</motion.h1>
          <motion.h1
            initial={{ y: 0, opacity: 1 }}
            animate={isHovered ? { y: 65, opacity: 0.2 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >OHIAGU-ANANABA</motion.h1></>)}

        <AnimatePresence>
          {isHovered && (<Roles />)}
        </AnimatePresence>
      </motion.div>
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
    <motion.div
      className={styles.roleDiv}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeOut' } }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
    >
      <motion.h2
        key={roles[currentRoleIndex]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.role}
      >
        {roles[currentRoleIndex].toUpperCase()}
      </motion.h2>
    </motion.div>
  )
}