// app/page.js
"use client";

import HomePage from "@/components/HomePage";
import { useCurrentPage } from "@/components/CurrentPageProvider";
import { AnimatePresence, motion } from "framer-motion";
import LightBeam from "@/components/LightBeam/LightBeam";

const transition = { duration: 0.6, ease: "easeInOut" };

const variants = {
  initial: {
    opacity: 0,
    y: 10, // Slight upward movement for entry
  },
  animate: {
    opacity: 1,
    y: 0,
    transition,
  },
  exit: {
    opacity: 0,
    y: -10, // Slight downward movement for exit
    transition,
  },
};



const Page = () => {
  const { currentPage, setCurrentPage, setLightPos, lightPos } = useCurrentPage();

  const handleButtonClick = (route) => {
    setTimeout(() => {
      setCurrentPage(route);
    }, 500);
    const arr = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    const choices = arr.filter((p) => p !== lightPos);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setLightPos(choices[randomIndex]);
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }}>
      <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <motion.div
            key="home"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <HomePage />
          </motion.div>
        )}
        {currentPage === "about" && (
          <motion.div
            key="about"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1>About Page</h1>
          </motion.div>
        )}
      </AnimatePresence>
      <LightBeam />
      <button style={{
        position: 'absolute',
        zIndex: 5,
        top: '50%',
        left: '50%'
      }} onClick={() => handleButtonClick('about')}>About</button>
      <button style={{
        position: 'absolute',
        zIndex: 5,
        top: '30%',
        left: '50%'
      }} onClick={() => handleButtonClick('home')}>Home</button>
    </div>
  );
};

export default Page;
