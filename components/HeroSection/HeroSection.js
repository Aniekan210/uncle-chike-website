'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './HeroSection.module.css';

const roles = ['Producer', 'Writer', 'Director', 'GameChanger'];
const colors = ['#FF6F61', '#B0B0B0', '#1ABC9C', '#F39C12'];
const fonts = ['Bebas Neue, sans-serif', 'Georgia, serif', 'Poppins, sans-serif', 'Montserrat, sans-serif'];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

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
    <div className={styles.heroContainer} ref={ref}>
      <motion.div
        className={styles.textContainer}
        animate={controls}
        initial={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className={styles.name}>CHIKEZIE TEDDY OHIAGU-ANANABA</motion.h1>
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
  );
}
