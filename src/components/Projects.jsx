'use client';

import { useState } from 'react';
import styles from '../styles/Projects.module.css';
import { projects } from '../data/portfolio-data';

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const [hoveredProject, setHoveredProject] = useState(null);

    const categories = ['All', 'Blockchain', 'E-commerce', 'AI & Automation', 'Web Scraping'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <h2 className="section-title fade-in">Featured Projects</h2>
                <p className="section-subtitle fade-in delay-1">
                    Showcase of my best work across blockchain, e-commerce, and AI domains
                </p>

                <div className={`${styles.filterButtons} fade-in delay-2`}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.filterBtn} ${filter === category ? styles.active : ''
                                }`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.projectsGrid}>
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`${styles.projectCard} card fade-in delay-${(index % 3) + 1
                                }`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className={styles.projectHeader}>
                                <div className={styles.projectNumber}>
                                    {String(project.id).padStart(2, '0')}
                                </div>
                                <div className={styles.projectCategory}>
                                    {project.category}
                                </div>
                            </div>

                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>

                            <div className={styles.technologies}>
                                {project.technologies.map((tech) => (
                                    <span key={tech} className={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div
                                className={`${styles.highlights} ${hoveredProject === project.id ? styles.visible : ''
                                    }`}
                            >
                                <h4 className={styles.highlightsTitle}>Key Features:</h4>
                                <ul className={styles.highlightsList}>
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.projectFooter}>
                                <button className={`btn btn-secondary ${styles.viewBtn}`}>
                                    View Details
                                </button>
                                <div className={styles.projectLinks}>
                                    <a href="#" className={styles.iconLink} title="GitHub">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a href="#" className={styles.iconLink} title="Live Demo">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className={styles.cardGlow}></div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className={styles.noProjects}>
                        <p>No projects found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}