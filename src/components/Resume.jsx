'use client';

import { personalInfo, projects, experience, education } from '../data/portfolio-data';
import styles from '../styles/Resume.module.css';

const workExperience = [
    {
        position: "Senior Full Stack Developer",
        company: "Pixel Web Solutions",
        duration: "Sep 2021 - Present",
        subtitle: "Current Role | Full-time",
        responsibilities: [
            "Led end-to-end development of blockchain applications including NFT marketplaces, ICO/IEO platforms, and custom cryptocurrency payment gateways supporting multiple blockchains",
            "Built a MetaMask-like browser wallet extension (Chrome/Firefox) using Vite and React.js with Web3 provider injection, HD wallet support, ERC-20 and ERC-721 token management, and WalletConnect v2 integration",
            "Implemented a universal wallet connector supporting MetaMask, WalletConnect (300+ wallets), Coinbase Wallet, and Trust Wallet with multi-chain session persistence",
            "Architected scalable e-commerce platforms with multi-vendor support, inventory management, and payment gateway integrations handling thousands of concurrent users",
            "Developed a full-featured cryptocurrency exchange with real-time order book via WebSockets, trading engine, and advanced charting including limit, market, and stop-loss orders",
            "Integrated AI-powered automation workflows using n8n with Claude, ChatGPT, and Gemini AI, reducing manual business processes by 70%",
            "Built and maintained RESTful APIs and microservices following REST design principles using Node.js, Express.js, Laravel, and Python FastAPI",
            "Applied state management patterns using Redux and React Context API across complex front-end applications",
            "Built modern, responsive UIs using Tailwind CSS, Bootstrap, and Material UI (MUI) with a focus on accessibility and cross-device compatibility",
            "Managed asynchronous operations using Promises, async/await, and event-driven architecture for high-throughput Node.js services",
            "Deployed blockchain event listeners for real-time transaction notifications across EVM-compatible chains",
            "Maintained version control using Git, GitHub, and GitLab, with hands-on experience in CI/CD workflows, Docker, and Kubernetes",
        ]
    },
    {
        position: "Senior Software Developer",
        company: "DivInfosys",
        duration: "Dec 2018 - Aug 2021",
        subtitle: "Web Scraping, Product Management & E-commerce Automation",
        responsibilities: [
            "Built Core PHP-based web scraping solutions for Amazon and other e-commerce sites to collect and normalize bulk product data at scale.",
            "Deployed and managed applications on AWS EC2 instances; used AWS S3 for scalable storage of scraped datasets, product images, and report exports.",
            "Developed management applications for scraped records, reporting, and data tracking using HTML, CSS, Core PHP, jQuery, and MongoDB.",
            "Handled JSON and XML data parsing, transformation, and API integration for automated product data pipelines.",
            "Improved data handling workflows for inventory, product analysis, and reusable business reports."
        ]
    },
    {
        position: "Web Developer",
        company: "SidInfotech",
        duration: "May 2018 - Nov 2018",
        subtitle: "E-commerce Applications & WordPress Development",
        responsibilities: [
            "Created e-commerce application features with HTML, CSS, Core PHP, and WordPress.",
            "Implemented scalable front-end and back-end updates for business websites and product-driven portals.",
            "Supported responsive layouts, content updates, and day-to-day development tasks for live projects."
        ]
    }
];

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
                        <span>📞 <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a></span>
                        <span>📧 <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>
                        <span>🔗 <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/chandrur707</a></span>
                        <span>💻 <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">github.com/Ramachandran-tech-707</a></span>
                        <span>🌐 <a href="https://ramachandran-t-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">ramachandran-t-portfolio.vercel.app</a></span>
                    </div>
                </header>

                <hr className={styles.divider} />

                {/* PROFESSIONAL SUMMARY */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Professional Summary</h2>
                    <p className={styles.summary}>
                        Senior Full Stack Developer with 7+ years of experience architecting scalable full-stack applications, Web3 ecosystems, and AI integrations.
                        Proven expertise in building cryptocurrency payment gateways, MetaMask-like browser extensions, and DeFi platforms using Next.js, Node.js, and Solidity.
                        Skilled in modern UI frameworks (Tailwind CSS, MUI, Bootstrap), state management (Redux, Context API), real-time systems (WebSockets), and cloud infrastructure (AWS EC2, S3).
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
                            <p className={styles.skillList}>Next.js, React.js, Node.js, Express.js, JavaScript, TypeScript, Python (FastAPI), HTML/CSS</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>UI/UX & Styling</h3>
                            <p className={styles.skillList}>Tailwind CSS, Bootstrap, Material UI (MUI), Responsive Design, Custom CSS</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>State Management</h3>
                            <p className={styles.skillList}>Redux, React Context API</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>APIs & Real-time</h3>
                            <p className={styles.skillList}>RESTful API Design, WebSockets, Async/Await, JSON/XML Handling, Webhook Integration, OAuth</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>Web3 & Blockchain</h3>
                            <p className={styles.skillList}>Solidity, Ethers.js, Web3.js, WalletConnect v2, Smart Contracts, Crypto Wallets, DeFi, DEX, NFT Platforms</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>AI Tools & Automation</h3>
                            <p className={styles.skillList}>n8n, ChatGPT/GPT Models, Claude, Gemini, Cursor AI, Agentic Workflows</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>Cloud & Infrastructure</h3>
                            <p className={styles.skillList}>AWS EC2, AWS S3, Docker (Basic), Kubernetes (Basic), CI/CD Workflows</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>Databases & Tools</h3>
                            <p className={styles.skillList}>MongoDB, MySQL, PostgreSQL, Git, GitHub/GitLab, Microservices Architecture</p>
                        </div>
                    </div>
                </section>

                <hr className={styles.divider} />

                {/* PROFESSIONAL EXPERIENCE */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Professional Experience</h2>
                    {workExperience.map((job) => (
                        <div key={`${job.company}-${job.duration}`} className={styles.experienceItem}>
                            <div className={styles.expHeader}>
                                <div>
                                    <h3 className={styles.expPosition}>{job.position}</h3>
                                    <p className={styles.expCompany}>{job.company} | {job.subtitle}</p>
                                </div>
                                <span className={styles.expDuration}>{job.duration}</span>
                            </div>
                            <ul className={styles.expList}>
                                {job.responsibilities.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <hr style={{ border: "none", borderTop: '2px solid #e2e8f0',  margin: '0.1rem 0', }} />

                <section className={`${styles.section} ${styles.projectsSection}`}>
                    <h2 className={styles.sectionTitle}>Selected Projects</h2>
                    <div className={styles.projectsGrid}>
                        {[...projects].reverse().slice(0, 10).map((project) => (
                            <div key={project.id} className={styles.projectItem}>
                                <div className={styles.projectHeader}>
                                    <h3 className={styles.projectName}>{project.title}</h3>
                                    <span className={styles.projectCategory}>{project.category}</span>
                                </div>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <p className={styles.projectTech}>
                                    <strong>Tech:</strong> {project.technologies.slice(0, 4).join(', ')}
                                </p>
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

                    <hr className={styles.divider} />

                    <div className={styles.certList}>
                        <h3 className={styles.certTitle}>Continuous Learning & Tools</h3>
                        <p>Self-driven professional development in Blockchain, Web3, Smart Contract development using Solidity, AI and full-stack technologies. Experienced with modern tools including Cursor IDE, Replit, n8n, GitHub Copilot, Anti-Gravity AI and Bolt AI. Hands-on experience with AWS EC2 and S3 for deployment and cloud storage.</p>
                    </div>
                </section>

            </article>
        </div>
    );
}