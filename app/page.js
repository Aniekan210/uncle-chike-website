// app/page.js
"use client";

import HomePage from "@/components/HomePage";
import { useCurrentPage } from "@/components/CurrentPageProvider";
import { AnimatePresence, motion } from "framer-motion";
import LightBeam from "@/components/LightBeam/LightBeam";
import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useState, useCallback, useRef } from "react";

const transition = { duration: 0.6, ease: "easeInOut" };

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -10, transition },
};

const pages = ["/", "/about", "/works", "/contact"];

const Page = () => {
  const { setLightPos, lightPos, currentPage, setCurrentPage } = useCurrentPage();
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartY = useRef(null);
  const scrollTimeoutRef = useRef(null);

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

        setTimeout(() => {
          setIsScrolling(false);
        }, transition.duration * 1000 + 200);
      }
      const arr = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
      const choices = arr.filter((p) => p !== lightPos);
      const randomIndex = Math.floor(Math.random() * choices.length);
      setLightPos(choices[randomIndex]);
    },
    [currentPage, setCurrentPage]
  );

  const handleWheelScroll = (event) => {
    if (isScrolling || isScrollableContent(event)) return;

    const delta = event.deltaY;

    if (delta > 0) {
      changePage("down");
    } else if (delta < 0) {
      changePage("up");
    }
  };

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    if (isScrolling || isScrollableContent(event)) return;

    const touchEndY = event.touches[0].clientY;
    const touchDiff = touchStartY.current - touchEndY;

    if (touchDiff > 50) {
      changePage("down");
    } else if (touchDiff < -50) {
      changePage("up");
    }
  };

  const isScrollableContent = (event) => {
    const target = event.target;
    const isScrollable =
      target.scrollHeight > target.clientHeight ||
      target.scrollWidth > target.clientWidth;

    return isScrollable;
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheelScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
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
