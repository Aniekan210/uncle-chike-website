// components/ContactSection.jsx

'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../ContactForm/ContactForm';
import styles from './ContactSection.module.css'; // Import the external CSS

const containerVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, duration: 0.5 } },
    exit: { opacity: 0, y: '100vh', transition: { type: 'spring', stiffness: 50, duration: 0.5 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

export default function ContactSection() {
    return (
        <motion.div
            className={styles.contactContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div className={styles.contactSection}>
                <motion.div className={styles.contactInfo} variants={itemVariants}>
                    <motion.h2 className={styles.contactHeading}>
                        What would you like to talk about?
                    </motion.h2>

                    <motion.ul className={styles.contactTopics}>
                        <motion.li variants={itemVariants}>Short Films</motion.li>
                        <motion.li variants={itemVariants}>Feature Films</motion.li>
                        <motion.li variants={itemVariants}>Documentaries</motion.li>
                        <motion.li variants={itemVariants}>Script editing/Reviews</motion.li>
                        <motion.li variants={itemVariants}>TV Commercials</motion.li>
                        <motion.li variants={itemVariants}>Radio Commercials</motion.li>
                        <motion.li variants={itemVariants}>Voice Overs</motion.li>
                    </motion.ul>

                    <motion.div className={styles.contactDetails}>
                        <motion.p variants={itemVariants}>
                            <FaPhone className={styles.icon} /> <a href="tel:08162907958">08162907958</a>
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            <FaEnvelope className={styles.icon} /> <a href="mailto:ohiagu.chike@gmail.com">ohiagu.chike@gmail.com</a>
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            <FaInstagram className={styles.icon} /> <a href="https://www.instagram.com/Mrteddy_O" target="_blank" rel="noopener noreferrer">Mrteddy_O</a>
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            <FaLinkedin className={styles.icon} /> <a href="https://www.linkedin.com/in/Chikezie-Teddy-Ohiagu-Ananaba" target="_blank" rel="noopener noreferrer">Chikezie Teddy Ohiagu-Ananaba</a>
                        </motion.p>
                    </motion.div>
                </motion.div>

                <ContactForm />
            </motion.div>
        </motion.div>
    );
}
