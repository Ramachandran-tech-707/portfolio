'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';
import { personalInfo } from '../data/portfolio-data';

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [currentRole, setCurrentRole] = useState(0);

    const roles = [
        'Full Stack Developer',
        'Blockchain Specialist',
        'AI Integration Expert',
        'E-commerce Architect'
    ];

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let timeout;

        const typeText = () => {
            const currentText = roles[currentRole];

            if (!isDeleting && currentIndex <= currentText.length) {
                setDisplayText(currentText.substring(0, currentIndex));
                currentIndex++;
                timeout = setTimeout(typeText, 100);
            } else if (isDeleting && currentIndex >= 0) {
                setDisplayText(currentText.substring(0, currentIndex));
                currentIndex--;
                timeout = setTimeout(typeText, 50);
            } else if (!isDeleting && currentIndex > currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeText();
                }, 2000);
            } else if (isDeleting && currentIndex < 0) {
                isDeleting = false;
                setCurrentRole((prev) => (prev + 1) % roles.length);
                timeout = setTimeout(typeText, 500);
            }
        };

        typeText();

        return () => clearTimeout(timeout);
    }, [currentRole]);

    return (
        <section id="home" className={styles.hero}>
            <div className="animated-background">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
            </div>

            <div className={`container ${styles.heroContent}`}>
                <div className={styles.heroText}>
                    <div className={`${styles.greeting} fade-in delay-1`}>
                        <span className={styles.wave}>👋</span>
                        <span>Hello, I'm</span>
                    </div>

                    <h1 className={`${styles.name} fade-in-left delay-2`}>
                        {personalInfo.name}
                    </h1>

                    <div className={`${styles.roleContainer} fade-in-left delay-3`}>
                        <span className={styles.roleLabel}>I'm a </span>
                        <span className={styles.roleText}>
                            {displayText}
                            <span className={styles.cursor}>|</span>
                        </span>
                    </div>

                    <p className={`${styles.description} fade-in delay-4`}>
                        {personalInfo.description}
                    </p>

                    <div className={`${styles.stats} fade-in delay-5`}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>7+</div>
                            <div className={styles.statLabel}>Years Experience</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>40+</div>
                            <div className={styles.statLabel}>Projects Completed</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>30+</div>
                            <div className={styles.statLabel}>Happy Clients</div>
                        </div>
                    </div>

                    <div className={`${styles.ctaButtons} fade-in delay-6`}>
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className={`${styles.heroVisual} scale-in delay-3`}>
                    <div className={styles.codeWindow}>
                        <div className={styles.windowHeader}>
                            <span className={styles.dot} style={{ background: '#ff5f56' }}></span>
                            <span className={styles.dot} style={{ background: '#ffbd2e' }}></span>
                            <span className={styles.dot} style={{ background: '#27c93f' }}></span>
                        </div>
                        <div className={styles.codeContent}>
                            <div className={styles.codeLine}>
                                <span className={styles.keyword}>const</span>
                                <span className={styles.variable}> developer</span>
                                <span className={styles.operator}> = </span>
                                <span className={styles.punctuation}>{'{'}</span>
                            </div>
                            <div className={styles.codeLine} style={{ paddingLeft: '20px' }}>
                                <span className={styles.property}>name</span>
                                <span className={styles.operator}>: </span>
                                <span className={styles.string}>'Senior Developer'</span>
                                <span className={styles.punctuation}>,</span>
                            </div>
                            <div className={styles.codeLine} style={{ paddingLeft: '20px' }}>
                                <span className={styles.property}>skills</span>
                                <span className={styles.operator}>: </span>
                                <span className={styles.punctuation}>['</span>
                                <span className={styles.string}>Blockchain</span>
                                <span className={styles.punctuation}>', '</span>
                                <span className={styles.string}>AI</span>
                                <span className={styles.punctuation}>'],</span>
                            </div>
                            <div className={styles.codeLine} style={{ paddingLeft: '20px' }}>
                                <span className={styles.property}>experience</span>
                                <span className={styles.operator}>: </span>
                                <span className={styles.number}>7</span>
                                <span className={styles.punctuation}>,</span>
                            </div>
                            <div className={styles.codeLine} style={{ paddingLeft: '20px' }}>
                                <span className={styles.method}>code</span>
                                <span className={styles.punctuation}>() {'{'}</span>
                            </div>
                            <div className={styles.codeLine} style={{ paddingLeft: '40px' }}>
                                <span className={styles.keyword}>return</span>
                                <span className={styles.string}> 'Excellence'</span>
                                <span className={styles.punctuation}>;</span>
                            </div>
                            <div className={styles.codeLine} style={{ paddingLeft: '20px' }}>
                                <span className={styles.punctuation}>{'}'}</span>
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.punctuation}>{'}'}</span>
                                <span className={styles.punctuation}>;</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.floatingElements}>
                        <div className={`${styles.floatingElement} ${styles.element1}`}>⚡</div>
                        <div className={`${styles.floatingElement} ${styles.element2}`}>🔗</div>
                        <div className={`${styles.floatingElement} ${styles.element3}`}>🤖</div>
                        <div className={`${styles.floatingElement} ${styles.element4}`}>💻</div>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <div className={styles.scrollText}>Scroll Down</div>
            </div>
        </section>
    );
}