// components/HomePage.js
"use client";

import HeroSection from "@/components/HeroSection/HeroSection.js";
import { AnimatePresence } from "framer-motion";

const HomePage = () => {

  return (
    <>
      <AnimatePresence mode="wait">
        <HeroSection key="hero-section" />
      </AnimatePresence>
    </>
  );
};

export default HomePage;
