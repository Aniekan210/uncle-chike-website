"use client";

import HeroSection from "@/components/HeroSection/HeroSection.js";
import { useCurrentPage } from "./CurrentPageProvider";

const HomePage = () => {

  const { setCurrentPage } = useCurrentPage();

  const handleButtonClick = () => {
    setCurrentPage('about');
    /* const arr = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    const randomIndex = Math.floor(Math.random() * arr.length);
    setLightPos(arr[randomIndex]); */
  }

  return (
    <>
      <HeroSection />
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
