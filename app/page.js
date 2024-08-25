// app/page.js
"use client";

import HomePage from "@/components/HomePage";
import { useCurrentPage } from "@/components/CurrentPageProvider";
import { AnimatePresence, motion } from "framer-motion";
import LightBeam from "@/components/LightBeam/LightBeam";
import NavBar from "@/components/NavBar/NavBar";
import ContactPage from "@/components/ContactPage/ContactPage";

const transition = { duration: 0.6, ease: "easeInOut" };

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -10, transition },
};

const Page = () => {
  const { currentPage } = useCurrentPage();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
      }}
    >
      <NavBar />
      <AnimatePresence mode="wait">
        {currentPage === "/" && (
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
        {currentPage === "/works" && (
          <motion.div
            key="works"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1>Works Page</h1>
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
      <LightBeam />
    </div>
  );
};

export default Page;
