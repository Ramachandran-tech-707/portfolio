'use client';

import { personalInfo, skills, projects, experience, education, ktSessions } from '../data/portfolio-data';
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
                    </div>
                </header>

                <hr className={styles.divider} />

                {/* PROFESSIONAL SUMMARY */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Professional Summary</h2>
                    <p className={styles.summary}>
                        Senior Software Developer with 7+ years of experience designing and delivering scalable web applications,
                        blockchain systems, and Web3 solutions. Proven expertise in full-stack development using Node.js, Next.js,
                        React, and Python. Deep specialization in cryptocurrency payment gateways, NFT platforms, DeFi integrations,
                        crypto wallet development (MetaMask-like browser extensions), ICO/IEO platforms, and AI-powered automation
                        including AI presentations (Canva, Gamma AI) and architecture design (Whimsical AI).
                        Proficient in cloud-ready architectures, RESTful APIs, and multi-chain blockchain integrations.
                    </p>
                </section>

                <hr className={styles.divider} />

                {/* SKILLS */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Technical Skills</h2>
                    <div className={styles.skillsGrid}>
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category} className={styles.skillCategory}>
                                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                                <p className={styles.skillList}>{skillList.join(' • ')}</p>
                            </div>
                        ))}
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
                            <li>Led end-to-end development of blockchain applications: NFT marketplaces, ICO/IEO platforms, and custom cryptocurrency payment gateways supporting multiple blockchains</li>
                            <li>Built a MetaMask-like browser wallet extension (Chrome/Firefox) using Vite + React.js with full Web3 provider injection, HD wallet support, ERC-20/ERC-721 token management, and WalletConnect v2</li>
                            <li>Implemented Universal Wallet Connector supporting MetaMask, WalletConnect (300+ wallets), Coinbase Wallet, Trust Wallet multi-chain session persistence</li>
                            <li>Architected scalable e-commerce platforms with multi-vendor support, inventory management, and payment gateway integrations handling thousands of concurrent users</li>
                            <li>Developed full-featured cryptocurrency exchange with real-time orderbook, WebSocket-driven trading engine, and advanced charting (limit, market, stop-loss orders)</li>
                            <li>Integrated AI-powered automation using n8n workflows with Claude, ChatGPT, and Gemini AI, reducing manual business processes by 70%</li>
                            <li>Built RESTful APIs and microservices using Node.js, Express.js, Laravel, and Python FastAPI</li>
                            <li>Managed high-performance MongoDB and MySQL databases with query optimization for large-scale applications</li>
                            <li>Implemented advanced web scraping solutions with anti-detection mechanisms for large-scale data extraction and normalization</li>
                            <li>Deployed blockchain event listeners for real-time transaction notifications across EVM-compatible chains</li>
                            <li>Maintained version control using Git, GitHub, and GitLab; basic hands-on with CI/CD workflows, Docker and Kubernetes</li>
                        </ul>
                    </div>
                </section>

                <hr className={styles.divider} />
 
                 {/* KNOWLEDGE TRANSFER & LEADERSHIP */}
                 <section className={styles.section}>
                     <h2 className={styles.sectionTitle}>Knowledge Transfer & Technical Leadership</h2>
                     <div className={styles.ktSessionsGrid}>
                         {ktSessions.map((session) => (
                             <div key={session.id} className={styles.ktSessionItem}>
                                 <h3 className={styles.ktSessionTitle}>{session.title}</h3>
                                 <p className={styles.ktSessionDesc}>{session.description}</p>
                                 <ul className={styles.ktTakeaways}>
                                     {session.keyTakeaways.map((takeaway, i) => (
                                         <li key={i}>{takeaway}</li>
                                     ))}
                                 </ul>
                             </div>
                         ))}
                     </div>
                 </section>
 
                 <hr className={styles.divider} />

                {/* KEY PROJECTS */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Key Projects</h2>
                    <div className={styles.projectsGrid}>
                        {projects.map((project) => (
                            <div key={project.id} className={styles.projectItem}>
                                <div className={styles.projectHeader}>
                                    <h3 className={styles.projectName}>{project.title}</h3>
                                    <span className={styles.projectCategory}>{project.category}</span>
                                </div>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <p className={styles.projectTech}>
                                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                                </p>
                                <ul className={styles.projectHighlights}>
                                    {project.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className={styles.divider} />

                {/* EDUCATION & CERTIFICATIONS */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    {education.map((edu, index) => (
                        <div key={index} className={styles.educationItem}>
                            <h3 className={styles.eduDegree}>{edu.degree}</h3>
                            <p className={styles.eduDetails}>{edu.institution} | {edu.duration}</p>
                        </div>
                    ))}
                    <div className={styles.certList}>
                        <h3 className={styles.certTitle}>Continuous Learning & Tools</h3>
                        <p>Self-driven professional development in Blockchain, Web3, Smart Contract development using Solidity, AI and full-stack technologies. Experienced with modern tools including Cursor IDE, Replit, n8n, GitHub Copilot, Anti-Gravity AI, Bolt AI, and visual communication platforms like Whimsical AI and Gamma AI.</p>
                    </div>
                </section>

                <hr className={styles.divider} />

                {/* CORE COMPETENCIES */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Core Competencies</h2>
                    <ul className={styles.competenciesList}>
                        <li>Full Stack Web Development (Node.js, Next.js, React, Express.js, PHP/Laravel)</li>
                        <li>Blockchain & DeFi Application Development</li>
                        <li>Web3 Wallet & Browser Extension Development</li>
                        <li>Smart Contract Integration (Ethereum, EVM chains)</li>
                        <li>API Design, Development & Third-Party Integration</li>
                        <li>Database Architecture & Optimization (MySQL, MongoDB, PostgreSQL)</li>
                        <li>AI-Powered Workflow Automation (n8n, Claude, GPT, Gemini, Anti-gravity, VsCode Github Copilot)</li>
                        <li>AI Presentations & Architectural Design (Canva, Gamma AI, Whimsical AI, Draw.io)</li>
                        <li>E-commerce Platform Development</li>
                        <li>Agile Development & Version Control (Git, GitHub, GitLab)</li>
                        <li>Web Scraping, Data Extraction & Processing</li>
                    </ul>
                </section>

            </article>
        </div>
    );
}
