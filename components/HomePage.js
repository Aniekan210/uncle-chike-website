// components/HomePage.js
"use client";

import HeroSection from "@/components/HeroSection/HeroSection.js";
import { useCurrentPage } from "./CurrentPageProvider";
import { AnimatePresence } from "framer-motion";

const HomePage = () => {

  const { setCurrentPage, setLightPos } = useCurrentPage();

  const handleButtonClick = () => {
    /* setTimeout(() => {
      setCurrentPage("about");
    }, 500); */
    const arr = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    const randomIndex = Math.floor(Math.random() * arr.length);
    setLightPos(arr[randomIndex]);
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <HeroSection />
      </AnimatePresence>
      <button style={{
        position: 'absolute',
        zIndex: 5,
        top: '50%',
        left: '50%'
      }} onClick={handleButtonClick}>Change Position</button>
    </>
  );
};

export default HomePage;
