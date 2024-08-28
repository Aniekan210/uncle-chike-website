"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Experience.module.css"; // Assuming you're using CSS Modules

const logos = [
  { src: "/images/quickteller_logo.png", alt: "Quickteller" },
  { src: "/images/mtn_logo.png", alt: "MTN" },
  { src: "/images/prime_logo.png", alt: "PRIME" },
  // Add more logos as needed
];

const ExperiencePage = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.awardsSection}>
        <motion.div
          className={styles.imageContainer}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.imageWrapper}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/AMVCA 2023 Award.jpg"
              alt="AMVCA 2023 Award"
              layout="intrinsic"
              width={200}
              height={300}
              className={styles.awardImage}
            />
            <motion.div
              className={styles.tooltip}
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              AMVCA 2023: Best Online Social Content Creator
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.awardsTextContainer}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className={styles.sectionTitle}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Awards & Recognition
          </motion.h2>

          <motion.div
            className={styles.awardScrollable}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className={styles.awardItem}>
              <div className={styles.awardText}>
                <p>
                  <strong>AMVCA 2023:</strong> Best Online Social Content
                  Creator for “Back From The Future - Elozonam” (Writer).
                </p>
              </div>
            </div>

            <div className={styles.awardItem}>
              <div className={styles.awardText}>
                <p>
                  <strong>Publicis Africa 2023 Giraffe Awards:</strong> Bronze
                  Giraffe for Branded Content for "Daddy Yo" (Television
                  Series).
                </p>
              </div>
            </div>

            <div className={styles.awardItem}>
              <div className={styles.awardText}>
                <p>
                  <strong>African Cristal Awards:</strong> Silver in Promo &
                  Activation for WIMBIZ Expo "No More Lip Service".
                </p>
              </div>
            </div>

            <div className={styles.awardItem}>
              <div className={styles.awardText}>
                <p>
                  <strong>LAIF Awards:</strong> Multiple accolades for
                  outstanding campaigns for MTN, Interswitch, and Quickteller.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.contentSection}>
        <motion.p
          className={styles.introText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Having worked with over 30 renowned international brands across the
          marketing, advertising, and filmmaking industries, I’m skilled in
          screenwriting, copywriting, production, content strategy, and directing.
          I offer valuable experience in both B2B and B2C contexts with the ability
          to effectively collaborate with internal and external stakeholders.
        </motion.p>

        <motion.div
          className={styles.brandsSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Brands I've worked with</h2>
          <div className={styles.brandsWrapper}>
            {logos.map((logo, index) => (
              <div className={styles.brandLogo} key={index}>
                <Image src={logo.src} alt={logo.alt} width={150} height={50} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
