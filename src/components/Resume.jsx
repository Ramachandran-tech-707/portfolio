'use client';

import { personalInfo, projects, experience, education } from '../data/portfolio-data';
import styles from '../styles/Resume.module.css';

export default function Resume() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className={styles.resumeWrapper}>
            {/* Screen-only action bar */}
            <div className={styles.actionBar}>
                <a href="/" className={styles.backBtn}>← Back to Portfolio</a>
                <button onClick={handlePrint} className={styles.printBtn}>
                    🖨️ Print / Download PDF
                </button>
            </div>

            {/* ====== ATS-Friendly Resume Document ====== */}
            <article className={styles.resume} id="resume-document">

                {/* HEADER */}
                <header className={styles.header}>
                    <h1 className={styles.name}>T.Ramachandran</h1>
                    <p className={styles.jobTitle}>Senior Full Stack Developer | Blockchain & Web3 Specialist</p>
                    <div className={styles.contactRow}>
                        <span>📧 <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>
                        <span>🔗 <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/chandru707</a></span>
                        <span>💻 <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">github.com/Ramachandran-tech-707</a></span>
                        <span>🌐 <a href="https://github.com/Ramachandran-tech-707/portfolio" target="_blank" rel="noopener noreferrer">Portfolio Link</a></span>
                    </div>
                </header>

                <hr className={styles.divider} />

                {/* PROFESSIONAL SUMMARY */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Professional Summary</h2>
                    <p className={styles.summary}>
                        Senior Software Developer with 7+ years of experience architecting scalable full-stack applications, Web3 ecosystems, and AI integrations. 
                        Proven expertise in building cryptocurrency payment gateways, MetaMask-like browser extensions, and DeFi platforms using Next.js, Node.js, and Solidity. 
                        Adept at leveraging AI to automate complex workflows and driving technical execution across high-impact projects.
                    </p>
                </section>

                <hr className={styles.divider} />

                {/* SKILLS & TECHNOLOGIES */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>Languages & Frameworks</h3>
                            <p className={styles.skillList}>JavaScript, TypeScript, Next.js, React.js, Node.js, Express.js, Python (FastAPI), HTML/CSS</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>Web3 & Blockchain</h3>
                            <p className={styles.skillList}>Solidity, Ethers.js, Web3.js, WalletConnect v2, Smart Contracts, Crypto Wallets, DeFi, DEX, NFT Platforms</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>AI & Automation</h3>
                            <p className={styles.skillList}>n8n, ChatGPT/GPT Models, Claude, Gemini, Cursor AI, Agentic Workflows</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>Databases & Tools</h3>
                            <p className={styles.skillList}>MongoDB, MySQL, PostgreSQL, Git, REST APIs, Microservices Architecture</p>
                        </div>
                    </div>
                </section>

                <hr className={styles.divider} />

                {/* PROFESSIONAL EXPERIENCE */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Professional Experience</h2>

                    <div className={styles.experienceItem}>
                        <div className={styles.expHeader}>
                            <div>
                                <h3 className={styles.expPosition}>Senior Software Developer</h3>
                                <p className={styles.expCompany}>Software Development • Hybrid / Remote • Full-Time</p>
                            </div>
                            <span className={styles.expDuration}>2018 – Present (7+ Years)</span>
                        </div>
                        <ul className={styles.expList}>
                            <li>Developed comprehensive Web3 wallet and DEX features using Next.js and React, incorporating HD wallet generation and multi-chain network support.</li>
                            <li>Integrated secure smart contracts and EVM blockchain events utilizing Solidity, Ethers.js, and WalletConnect v2 bridging Web3 applications and users seamlessly.</li>
                            <li>Architected a scalable cross-chain cryptocurrency payment gateway enabling decentralized and automated transaction tracking, validation, and settlement.</li>
                            <li>Built complex AI-powered workflow automation pipelines using n8n and GPT integrations to drastically enhance team performance and scale robust business processes.</li>
                            <li>Designed robust full-stack RESTful APIs and backend microservices leveraging Node.js and scalable MySQL/MongoDB architectures supporting high-throughput demands.</li>
                        </ul>
                    </div>
                </section>

                <hr className={styles.divider} />

                {/* KEY PROJECTS */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Selected Projects</h2>
                    <div className={styles.projectsGrid}>
                        {projects.slice(0, 3).map((project) => (
                            <div key={project.id} className={styles.projectItem}>
                                <div className={styles.projectHeader}>
                                    <h3 className={styles.projectName}>{project.title}</h3>
                                    <span className={styles.projectCategory}>{project.category}</span>
                                </div>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <p className={styles.projectTech}>
                                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className={styles.divider} />

                {/* EDUCATION */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    {education.map((edu, index) => (
                        <div key={index} className={styles.educationItem}>
                            <h3 className={styles.eduDegree}>{edu.degree}</h3>
                            <p className={styles.eduDetails}>{edu.institution} | {edu.duration}</p>
                        </div>
                    ))}
                </section>

            </article>
        </div>
    );
}
