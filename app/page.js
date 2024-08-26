// app/page.js
"use client";

import { useCurrentPage } from "@/components/CurrentPageProvider";
import { AnimatePresence, motion } from "framer-motion";
import LightBeam from "@/components/LightBeam/LightBeam";
import NavBar from "@/components/NavBar/NavBar";
import ContactPage from "@/components/ContactPage/ContactPage";
import HeroSection from "@/components/HeroSection/HeroSection";
import useDeviceType from "@/hooks/useDeviceType";
import MobileNavBar from "@/components/MobileNavbar/MobileNavBar";

const transition = { duration: 0.3, ease: "easeInOut" };

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -10, transition },
};

const Page = () => {
  const { currentPage } = useCurrentPage();
  const deviceType = useDeviceType();

  return (
    <>
      {deviceType === 'mobile' && (<MobileNavBar />)}
      {deviceType !== 'mobile' && (<NavBar />)}
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'transparent',
        overflow: 'hidden'
      }}>
        <AnimatePresence mode="wait">
          {currentPage === "/" && (
            <motion.div
              key="home"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HeroSection />
            </motion.div>
          )}
          {currentPage === "/about" && (
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
          {currentPage === "/experience" && (
            <motion.div
              key="works"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1>Experience Page</h1>
            </motion.div>
          )}
          {currentPage === "/works" && (
            <motion.div
              key="works"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1>Works & Gallery Page</h1>
            </motion.div>
          )}
          {currentPage === "/contact" && (
            <motion.div
              key="contact"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <LightBeam />
    </>
  );
};

export default Page;
