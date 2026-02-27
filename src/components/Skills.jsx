'use client';

import { useState } from 'react';
import styles from '../styles/Skills.module.css';
import { skills } from '../data/portfolio-data';

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <section id="skills" className={styles.skills}>
            <div className="container">
                <h2 className="section-title fade-in">Technical Expertise</h2>
                <p className="section-subtitle fade-in delay-1">
                    A comprehensive toolkit built over 7 years of development experience
                </p>

                <div className={styles.skillsGrid}>
                    {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                        <div
                            key={category}
                            className={`${styles.skillCategory} card fade-in delay-${categoryIndex + 1}`}
                            onMouseEnter={() => setActiveCategory(category)}
                            onMouseLeave={() => setActiveCategory(null)}
                        >
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryIcon}>
                                    {getCategoryIcon(category)}
                                </div>
                                <h3 className={styles.categoryTitle}>{category}</h3>
                            </div>

                            <div className={styles.skillsList}>
                                {skillList.map((skill, index) => (
                                    <div
                                        key={skill}
                                        className={`${styles.skillItem} ${activeCategory === category ? styles.active : ''
                                            }`}
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <div className={styles.skillDot}></div>
                                        <span className={styles.skillName}>{skill}</span>
                                        <div className={styles.skillBar}>
                                            <div
                                                className={styles.skillProgress}
                                                style={{
                                                    width: activeCategory === category ? '90%' : '0%',
                                                    transitionDelay: `${index * 0.05}s`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.skillCount}>
                                {skillList.length} Skills
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${styles.skillsHighlight} fade-in delay-3`}>
                    <div className={styles.highlightItem}>
                        <div className={styles.highlightIcon}>🚀</div>
                        <div className={styles.highlightContent}>
                            <h4>Fast Learner</h4>
                            <p>Quick to adapt to new technologies and frameworks</p>
                        </div>
                    </div>
                    <div className={styles.highlightItem}>
                        <div className={styles.highlightIcon}>💡</div>
                        <div className={styles.highlightContent}>
                            <h4>Problem Solver</h4>
                            <p>Creative solutions to complex technical challenges</p>
                        </div>
                    </div>
                    <div className={styles.highlightItem}>
                        <div className={styles.highlightIcon}>🎯</div>
                        <div className={styles.highlightContent}>
                            <h4>Detail Oriented</h4>
                            <p>Meticulous attention to code quality and performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function getCategoryIcon(category) {
    const icons = {
        'Backend & APIs': '⚙️',
        'Frontend Development': '🎨',
        'Databases': '💾',
        'Blockchain & Crypto': '🔗',
        'E-commerce & CMS': '🛒',
        'AI & Automation Tools': '🤖',
        'Web Scraping': '🔍',
        'Version Control & Tools': '📦',
        '3rd Party APIs & Webhooks': '🌐',
    };
    return icons[category] || '💻';
}