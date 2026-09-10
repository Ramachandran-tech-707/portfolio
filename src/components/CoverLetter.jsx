'use client';

import { education, personalInfo } from '../data/portfolio-data';
import styles from '../styles/CoverLetter.module.css';

export default function CoverLetter() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.actionBar}>
                <a href="/" className={styles.backButton}>← Back to Portfolio</a>
                <div className={styles.actions}>
                    <a href="/api/download/docx" download className={styles.secondaryButton}>Download DOCX</a>
                    <a href="/api/download/pdf" download className={styles.primaryButton}>Download PDF</a>
                </div>
            </div>

            <article className={styles.document} id="cover-letter-document">
                <header className={styles.header}>
                    <h1>T. Ramachandran</h1>
                    <p className={styles.role}>Team Lead &amp; Senior Full Stack Developer | Blockchain &amp; Web3 Specialist</p>
                    <div className={styles.contact}>
                        <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                        <span>•</span>
                        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                        <span>•</span>
                        <a href={personalInfo.linkedin}>linkedin.com/in/chandrur707</a>
                        <span>•</span>
                        <a href={personalInfo.github}>github.com/Ramachandran-tech-707</a>
                    </div>
                </header>

                <h2>Application for Team Lead / Senior Full Stack Developer</h2>

                <p>Dear Hiring Manager,</p>

                <p>With 8 years of experience in software engineering, I have designed and delivered production systems across full-stack development, blockchain and Web3, AI automation, trading platforms, and enterprise commerce. I am writing to express my interest in a Team Lead or Senior Full Stack Developer role where I can combine hands-on engineering with team leadership, client communication, and end-to-end delivery ownership.</p>

                <p>In my current role as Team Lead - Full Stack Developer at Maticz Technologies, I lead development for the GreenEx India cryptocurrency trading platform and coordinate technical execution across the team. My work includes futures trading workflows, Risk Management System modules for pre-trade validation and exposure controls, U2P order matching, TradingView and broker API integrations, real-time services, and VAPT security remediation. I also manage client calls, clarify requirements, communicate progress, resolve delivery concerns, and help ensure commitments reach production on time.</p>

                <p>Previously, I led delivery of complex products at Pixel Web Solutions, including cryptocurrency exchanges, NFT marketplaces, ICO/IEO platforms, custom crypto payment gateways, and a MetaMask-like browser extension. I have also built universal wallet connectivity for major wallets and multi-chain environments, and developed enterprise e-commerce platforms with payment integrations and high-concurrency requirements.</p>

                <p>My technology experience spans Next.js, React.js, Node.js, Express.js, Python FastAPI, Laravel, PHP, MongoDB, MySQL, PostgreSQL, WebSockets, REST APIs, Ethers.js, Web3.js, WalletConnect, smart contracts, AWS, Git, Docker, and Kubernetes. I also use n8n with Claude, ChatGPT, and Gemini to build AI-powered automation workflows that have reduced manual business processes by 70%.</p>

                <p>Beyond implementation, I lead knowledge-transfer sessions on Next.js, AI agents, n8n, Web3, ICO/IEO, and NFT concepts. I support developers through planning and review, represent technical progress in client discussions, and keep delivery aligned with business priorities. I value clear architecture, dependable communication, and the discipline to carry work from design through deployment and maintenance.</p>

                <p>I would welcome the opportunity to discuss how my experience can help your team build reliable, high-impact products. Thank you for your time and consideration.</p>

                <p className={styles.closing}>Warm regards,<br /><strong>T. Ramachandran</strong><br />Team Lead &amp; Senior Full Stack Developer<br />Web3 &amp; Blockchain Specialist</p>

                <footer className={styles.education}>
                    <strong>Education</strong>
                    <span>{education[0].degree} — {education[0].institution} ({education[0].duration})</span>
                    <span>{education[1].degree} — {education[1].institution} ({education[1].duration})</span>
                </footer>
            </article>
        </div>
    );
}