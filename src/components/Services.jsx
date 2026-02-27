'use client';

import styles from '../styles/Services.module.css';
import { services } from '../data/portfolio-data';

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <h2 className="section-title fade-in">Services Offered</h2>
                <p className="section-subtitle fade-in delay-1">
                    Comprehensive development solutions tailored to your business needs
                </p>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`${styles.serviceCard} card fade-in delay-${(index % 4) + 1
                                }`}
                        >
                            <div className={styles.serviceIcon}>
                                <span className={styles.iconEmoji}>{service.icon}</span>
                                <div className={styles.iconBg}></div>
                            </div>

                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>

                            <button className={`${styles.learnMore}`}>
                                <span>Learn More</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>

                            <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
                        </div>
                    ))}
                </div>

                <div className={`${styles.ctaSection} fade-in delay-3`}>
                    <h3 className={styles.ctaTitle}>Ready to Start Your Project?</h3>
                    <p className={styles.ctaText}>
                        Let's collaborate and bring your ideas to life with cutting-edge technology
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="#contact" className="btn btn-primary">
                            Get Started
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            View Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}