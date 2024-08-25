// components/HomePage.js
"use client";

import HeroSection from "@/components/HeroSection/HeroSection.js";
import { AnimatePresence } from "framer-motion";

const HomePage = () => {

  return (
    <div style={{
      zIndex: 50
    }}>
      <AnimatePresence mode="wait">
        <HeroSection key="hero-section" />
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
