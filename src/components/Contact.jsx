'use client';

import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { personalInfo } from '../data/portfolio-data';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setFormStatus('');
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <h2 className="section-title fade-in">Get In Touch</h2>
                <p className="section-subtitle fade-in delay-1">
                    Let's discuss your next project and create something amazing together
                </p>

                <div className={styles.contactContent}>
                    <div className={`${styles.contactInfo} fade-in-left delay-2`}>
                        <h3 className={styles.infoTitle}>Let's Connect</h3>
                        <p className={styles.infoText}>
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className={styles.infoItems}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>✉️</div>
                                <div>
                                    <h4>Gmail</h4>
                                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>💼</div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>🐙</div>
                                <div>
                                    <h4>GitHub</h4>
                                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                                        View My Repositories
                                    </a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Available for Remote Work</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className={styles.availability}>
                            <div className={styles.availabilityDot}></div>
                            <span>Available for Freelance Projects</span>
                        </div> */}
                    </div>

                    <form
                        className={`${styles.contactForm} fade-in-right delay-2`}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Inquiry"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary ${styles.submitBtn}`}
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>

                        {formStatus === 'success' && (
                            <div className={styles.successMessage}>
                                ✓ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}