"use client";

import HeroSection from "@/components/HeroSection/HeroSection.js";
import LightBeam from "./LightBeam/LightBeam";
import { useCurrentPage } from "./CurrentPageProvider";

const HomePage = () => {

  const { setLightPos } = useCurrentPage();

  const handleLightChange = () => {
    const arr = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    const randomIndex = Math.floor(Math.random() * arr.length);
    setLightPos(arr[randomIndex]);
  }

  return (
    <>
      <HeroSection />
      <button style={{
        position: 'absolute',
        zIndex: 5,
        top: '50%',
        left: '50%'
      }} onClick={handleLightChange}>Change Position</button>
      <LightBeam />
    </>
  );
};

export default HomePage;
