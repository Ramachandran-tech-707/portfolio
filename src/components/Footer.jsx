'use client';

import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { personalInfo } from '../data/portfolio-data';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>

                        <div className={styles.footerBrand}>
                            <Image
                                src="/images/logo.png"
                                alt="Portfolio Logo"
                                width={160}
                                height={45}
                                className={styles.footerLogo}
                            />
                        </div>

                        <p className={styles.footerDescription}>
                            Building innovative solutions with cutting-edge technology.
                            Specialized in blockchain, AI, and full-stack development.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href={`mailto:${personalInfo.email}`} className={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Quick Links</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Services</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="#services">Blockchain Development</a></li>
                            <li><a href="#services">E-commerce Solutions</a></li>
                            <li><a href="#services">AI Integration</a></li>
                            <li><a href="#services">Web Development</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Technologies</h4>
                        <div className={styles.techBadges}>
                            <span className={styles.techBadge}>Next.js</span>
                            <span className={styles.techBadge}>Express.js</span>
                            <span className={styles.techBadge}>Node.js</span>
                            <span className={styles.techBadge}>Python (FAST APIs)</span>
                            <span className={styles.techBadge}>Laravel</span>
                            <span className={styles.techBadge}>PHP</span>
                            <span className={styles.techBadge}>HTML & CSS</span>
                            <span className={styles.techBadge}>Javascripts</span>
                            <span className={styles.techBadge}>Blockchain</span>
                            <span className={styles.techBadge}>AI</span>
                            <span className={styles.techBadge}>MySQL</span>
                            <span className={styles.techBadge}>MongoDB</span>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        <p>© {currentYear} Senior Software Developer. All rights reserved.</p>
                        <p className={styles.builtWith}>
                            Built with ❤️ using Next.js & Custom CSS
                        </p>
                    </div>

                    <button className={styles.scrollTop} onClick={scrollToTop}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="19" x2="12" y2="5"></line>
                            <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}