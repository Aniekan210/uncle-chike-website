// app/page.js
"use client";

import HomePage from "@/components/HomePage";
import { useCurrentPage } from "@/components/CurrentPageProvider";
import { AnimatePresence, motion } from "framer-motion";
import LightBeam from "@/components/LightBeam/LightBeam";
import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useState, useCallback } from "react";

const transition = { duration: 0.6, ease: "easeInOut" };

const variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition,
  },
};

const pages = ["/", "/about", "/works", "/contact"];

const Page = () => {
  const { currentPage, setCurrentPage } = useCurrentPage();
  const [isScrolling, setIsScrolling] = useState(false);

  const changePage = useCallback(
    (direction) => {
      const currentIndex = pages.indexOf(currentPage);
      let newIndex = currentIndex;

      if (direction === "down" && currentIndex < pages.length - 1) {
        newIndex = currentIndex + 1;
      } else if (direction === "up" && currentIndex > 0) {
        newIndex = currentIndex - 1;
      }

      if (newIndex !== currentIndex) {
        setIsScrolling(true);
        setCurrentPage(pages[newIndex]);

        // Unlock scroll after the transition
        setTimeout(() => {
          setIsScrolling(false);
        }, transition.duration * 1000 + 200); // Add a slight buffer to the transition duration
      }
    },
    [currentPage, setCurrentPage]
  );

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return;

      const delta = event.deltaY;

      if (delta > 0) {
        changePage("down");
      } else if (delta < 0) {
        changePage("up");
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling, changePage]);

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
            <h1>Contact Page</h1>
          </motion.div>
        )}
      </AnimatePresence>
      <LightBeam />
    </div>
  );
};

export default Page;
