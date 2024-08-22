"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


const HeroName = () => {
  const [clicked,setClicked] = useState(false);
  return (
    <motion.div
      onClick={() => setClicked(!clicked)}
      style={{
        margin: '20px',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'blue'
      }}
      initial={{scale:1.5, x: 0}}
      animate={ clicked ? {scale:0.5, x: 150} : {scale:1, x:100}}
      exit={{scale: 1.5, x: 0, transition: { duration: 0.3 }}}
    ></motion.div>
  )
}

export default HeroName