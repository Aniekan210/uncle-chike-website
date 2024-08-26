// components/ContactForm.jsx

'use client';

import { motion } from 'framer-motion';
import styles from './ContactForm.module.css'; // Import the external CSS
import { useEffect, useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        setFormData({
            name: name,
            email: email,
            subject: subject,
            message: message
        });
    }, [name, email, subject, message]);

    const handleFormSubmit = () => {
        if (name && email && subject && message) {
            console.log(formData);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            alert('Fill everything');
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className={styles.contactForm}
        >
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onInput={(e) => setName(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onInput={(e) => setEmail(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={subject} onInput={(e) => setSubject(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={message} onInput={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit" onClick={handleFormSubmit} className={styles.submitButton}>Send Message</button>
        </motion.div>
    );
}
