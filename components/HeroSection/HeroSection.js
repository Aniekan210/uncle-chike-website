// components/HeroSection/HeroSection.js
'use client';

import { useState, useEffect } from 'react';
import { useCurrentPage } from '../CurrentPageProvider';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './HeroSection.module.css';

const roles = ['Producer', 'Writer', 'Director', 'GameChanger'];
const colors = ['#FF6F61', '#B0B0B0', '#1ABC9C', '#F39C12'];
const fonts = ['Anton, sans-serif', 'Playfair Display, serif', 'Cinzel, serif', 'Impact, sans-serif'];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { currentPage } = useCurrentPage();

  useEffect(() => {
    console.log(currentPage);
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({
        opacity: 0,
        y: -50,
        scale: 0.9,
        transition: { duration: 1, ease: 'easeInOut' },
      });
    }
  }, [inView, controls]);

  return (
    <AnimatePresence mode='wait'>
      <div className={styles.heroContainer} ref={ref}>
        <motion.div
          className={styles.textContainer}
          animate={controls}
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            key="hero-h1"
            initial={{ opacity: 1 }}
            exit={{ x: '100%', transition: { duration: 0.5 } }}
            transition={{ duration: 1 }}
            className={styles.name}>CHIKEZIE TEDDY OHIAGU-ANANABA</motion.h1>
          <motion.h2 className={styles.roleContainer}>
            a{' '}
            <motion.span
              key={roles[currentRoleIndex]}
              style={{ fontFamily: fonts[currentRoleIndex], color: colors[currentRoleIndex] }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className={styles.role}
            >
              {roles[currentRoleIndex].toUpperCase()}
            </motion.span>
          </motion.h2>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
