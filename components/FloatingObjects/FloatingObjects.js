"use client"
import { motion } from "framer-motion"
import { useState } from 'react'

const FloatingObjects = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: 'blue',
        padding: 30
      }}
      onClick={() => setAnimate(!animate)}
      initial={{ x: 400, y: 400 }}
      animate={animate ? { x: 450, y: 500 } : { x: 400, y: 400 }}
      exit={{ x: 0, y: 0 }}
    >FloatingObjects</motion.div>
  )
}

export default FloatingObjects