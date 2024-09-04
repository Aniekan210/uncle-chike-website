// components/ContactForm.jsx

'use client';

import { motion } from 'framer-motion';
import styles from './ContactForm.module.css'; // Import the external CSS
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        if (name && email && subject && message) {
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'Ohiagu.chike@gmail.com',
            };

            emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Email sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    });
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    alert('Failed to send email. Please try again later.');
                });
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <motion.form
            onSubmit={handleFormSubmit}
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
            <button type="submit" className={styles.submitButton}>Send Message</button>
        </motion.form>
    );
}
