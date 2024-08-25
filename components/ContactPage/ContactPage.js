// components/ContactSection.jsx

'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../ContactForm/ContactForm';
import styles from './ContactSection.module.css'; // Import the external CSS

export default function ContactSection() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactSection}>
                <div className={styles.contactInfo}>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={styles.contactHeading}
                    >
                        What would you like to talk about?
                    </motion.h2>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className={styles.contactTopics}
                    >
                        <li>Short Films</li>
                        <li>Feature Films</li>
                        <li>TV Commercials</li>
                        <li>Radio Commercials</li>
                        <li>Voice Overs</li>
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className={styles.contactDetails}
                    >
                        <p>
                            <FaPhone className={styles.icon} /> <a href="tel:08162907958">08162907958</a>
                        </p>
                        <p>
                            <FaEnvelope className={styles.icon} /> <a href="mailto:ohiagu.chike@gmail.com">ohiagu.chike@gmail.com</a>
                        </p>
                        <p>
                            <FaInstagram className={styles.icon} /> <a href="https://www.instagram.com/Mrteddy_O" target="_blank" rel="noopener noreferrer">Mrteddy_O</a>
                        </p>
                        <p>
                            <FaLinkedin className={styles.icon} /> <a href="https://www.linkedin.com/in/Chikezie-Teddy-Ohiagu-Ananaba" target="_blank" rel="noopener noreferrer">Chikezie Teddy Ohiagu-Ananaba</a>
                        </p>
                    </motion.div>
                </div>

                <ContactForm />
            </div>
        </div>
    );
}
