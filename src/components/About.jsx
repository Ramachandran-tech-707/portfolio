'use client';

import styles from '../styles/About.module.css';
import { personalInfo, experience } from '../data/portfolio-data';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <h2 className="section-title fade-in">About Me</h2>
                <p className="section-subtitle fade-in delay-1">
                    Passionate developer with 7+ years of experience building innovative solutions
                </p>

                <div className={styles.aboutContent}>
                    <div className={`${styles.aboutText} fade-in-left delay-2`}>
                        <div className={styles.intro}>
                            <h3 className={styles.introTitle}>
                                Hello! I'm a <span className="gradient-text">Senior Software Developer</span>
                            </h3>
                            <p className={styles.introText}>
                                With over 7 years of hands-on experience in the tech industry, I specialize in
                                building cutting-edge applications across blockchain, e-commerce, and AI domains.
                                My journey has been driven by a passion for solving complex problems and creating
                                scalable solutions that make a real impact.
                            </p>
                        </div>

                        <div className={styles.highlights}>
                            <div className={styles.highlightItem}>
                                <div className={styles.highlightIcon}>🎯</div>
                                <div>
                                    <h4>Mission-Driven</h4>
                                    <p>Creating innovative solutions that push technological boundaries</p>
                                </div>
                            </div>
                            <div className={styles.highlightItem}>
                                <div className={styles.highlightIcon}>⚡</div>
                                <div>
                                    <h4>Fast Execution</h4>
                                    <p>Rapid development with modern tools and best practices</p>
                                </div>
                            </div>
                            <div className={styles.highlightItem}>
                                <div className={styles.highlightIcon}>🔧</div>
                                <div>
                                    <h4>Full-Stack Expertise</h4>
                                    <p>End-to-end development from concept to deployment</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.expertise}>
                            <h4 className={styles.expertiseTitle}>Core Expertise:</h4>
                            <div className={styles.expertiseGrid}>
                                <div className={styles.expertiseItem}>
                                    <span className={styles.expertiseIcon}>🔗</span>
                                    <span>Blockchain Development</span>
                                </div>
                                <div className={styles.expertiseItem}>
                                    <span className={styles.expertiseIcon}>🛒</span>
                                    <span>E-commerce Solutions</span>
                                </div>
                                <div className={styles.expertiseItem}>
                                    <span className={styles.expertiseIcon}>🤖</span>
                                    <span>AI Integration</span>
                                </div>
                                <div className={styles.expertiseItem}>
                                    <span className={styles.expertiseIcon}>💻</span>
                                    <span>Full-Stack Development</span>
                                </div>
                                <div className={styles.expertiseItem}>
                                    <span className={styles.expertiseIcon}>🔍</span>
                                    <span>Web Scraping</span>
                                </div>
                                <div className={styles.expertiseItem}>
                                    <span className={styles.expertiseIcon}>⚙️</span>
                                    <span>API Development</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.aboutSidebar} fade-in-right delay-2`}>
                        <div className={`${styles.experienceCard} card`}>
                            <div className={styles.experienceHeader}>
                                <div className={styles.experienceIcon}>💼</div>
                                <h3>Professional Journey</h3>
                            </div>

                            {experience.map((exp) => (
                                <div key={exp.id} className={styles.experienceItem}>
                                    <h4 className={styles.position}>{exp.position}</h4>
                                    <div className={styles.company}>{exp.company}</div>
                                    <div className={styles.duration}>{exp.duration}</div>

                                    <ul className={styles.responsibilities}>
                                        {exp.responsibilities.slice(0, 5).map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className={`${styles.statsCard} card`}>
                            <h3 className={styles.statsTitle}>By the Numbers</h3>
                            <div className={styles.statsGrid}>
                                <div className={styles.statItem}>
                                    <div className={styles.statValue}>7+</div>
                                    <div className={styles.statLabel}>Years Experience</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statValue}>40+</div>
                                    <div className={styles.statLabel}>Projects</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statValue}>30+</div>
                                    <div className={styles.statLabel}>Happy Clients</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statValue}>10+</div>
                                    <div className={styles.statLabel}>Technologies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}