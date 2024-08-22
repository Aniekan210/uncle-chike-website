"use client"

import { motion } from "framer-motion";
import styles from './AnimatedSquare.module.css'

const AnimatedSquare = () => {
  return (
    <motion.div 
      className={styles.box}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >Hi</motion.div>
  );
}

export default AnimatedSquare