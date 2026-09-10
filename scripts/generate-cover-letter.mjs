import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';
import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TextRun } from 'docx';

const outputDirectory = path.resolve('public/downloads');
fs.mkdirSync(outputDirectory, { recursive: true });

const paragraphs = [
    'With 8 years of experience in software engineering, I have designed and delivered production systems across full-stack development, blockchain and Web3, AI automation, trading platforms, and enterprise commerce. I am writing to express my interest in a Team Lead or Senior Full Stack Developer role where I can combine hands-on engineering with team leadership, client communication, and end-to-end delivery ownership.',
    'In my current role as Team Lead - Full Stack Developer at Maticz Technologies, I lead development for the GreenEx India cryptocurrency trading platform and coordinate technical execution across the team. My work includes futures trading workflows, Risk Management System modules for pre-trade validation and exposure controls, U2P order matching, TradingView and broker API integrations, real-time services, and VAPT security remediation. I also manage client calls, clarify requirements, communicate progress, resolve delivery concerns, and help ensure commitments reach production on time.',
    'Previously, I led delivery of complex products at Pixel Web Solutions, including cryptocurrency exchanges, NFT marketplaces, ICO/IEO platforms, custom crypto payment gateways, and a MetaMask-like browser extension. I have also built universal wallet connectivity for major wallets and multi-chain environments, and developed enterprise e-commerce platforms with payment integrations and high-concurrency requirements.',
    'My technology experience spans Next.js, React.js, Node.js, Express.js, Python FastAPI, Laravel, PHP, MongoDB, MySQL, PostgreSQL, WebSockets, REST APIs, Ethers.js, Web3.js, WalletConnect, smart contracts, AWS, Git, Docker, and Kubernetes. I also use n8n with Claude, ChatGPT, and Gemini to build AI-powered automation workflows that have reduced manual business processes by 70%.',
    'Beyond implementation, I lead knowledge-transfer sessions on Next.js, AI agents, n8n, Web3, ICO/IEO, and NFT concepts. I support developers through planning and review, represent technical progress in client discussions, and keep delivery aligned with business priorities. I value clear architecture, dependable communication, and the discipline to carry work from design through deployment and maintenance.',
    'I would welcome the opportunity to discuss how my experience can help your team build reliable, high-impact products. Thank you for your time and consideration.',
];

const pdfPath = path.join(outputDirectory, 't-ramachandran-cover-letter.pdf');
const pdf = new PDFDocument({ size: 'A4', margins: { top: 42, bottom: 42, left: 58, right: 58 } });
pdf.pipe(fs.createWriteStream(pdfPath));
pdf.font('Helvetica-Bold').fontSize(22).fillColor('#0f172a').text('T. Ramachandran', { align: 'center' });
pdf.moveDown(0.25).font('Helvetica-Bold').fontSize(10).fillColor('#4f46e5').text('Team Lead & Senior Full Stack Developer  |  Blockchain & Web3 Specialist', { align: 'center' });
pdf.moveDown(0.35).font('Helvetica').fontSize(8).fillColor('#475569').text('+91 9524924607  •  chandrur707@gmail.com  •  linkedin.com/in/chandrur707  •  github.com/Ramachandran-tech-707', { align: 'center' });
pdf.moveDown(0.55).strokeColor('#4f46e5').lineWidth(1.5).moveTo(58, pdf.y).lineTo(537, pdf.y).stroke();
pdf.moveDown(0.8).font('Helvetica-Bold').fontSize(13.5).fillColor('#0f172a').text('Application for Team Lead / Senior Full Stack Developer');
pdf.moveDown(0.55).font('Times-Roman').fontSize(9.4).fillColor('#172033').text('Dear Hiring Manager,');
for (const paragraph of paragraphs) {
    pdf.moveDown(0.7).text(paragraph, { align: 'left', lineGap: 3.2 });
}
pdf.moveDown(0.7).text('Warm regards,');
pdf.moveDown(0.3).font('Helvetica-Bold').text('T. Ramachandran');
pdf.font('Helvetica').text('Team Lead & Senior Full Stack Developer');
pdf.text('Web3 & Blockchain Specialist');
pdf.moveDown(1).font('Helvetica-Bold').fontSize(9.5).fillColor('#334155').text('EDUCATION');
pdf.moveDown(0.3).font('Helvetica').fontSize(9).fillColor('#64748b').text('MCA (Master of Computer Applications) — Thiagarajar Engineering College, Madurai (2015 - 2018)');
pdf.text('B.Sc Computer Science — The American College, Madurai (2012 - 2015)');
pdf.end();

const docxParagraphs = paragraphs.map((text) => new Paragraph({
    children: [new TextRun({ text, size: 22 })],
    spacing: { after: 220, line: 320 },
}));
const docx = new Document({
    sections: [{
        children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'T. Ramachandran', bold: true, size: 36 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Team Lead & Senior Full Stack Developer | Blockchain & Web3 Specialist', bold: true, color: '4F46E5', size: 21 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 420 }, children: [new TextRun({ text: '+91 9524924607  •  chandrur707@gmail.com  •  linkedin.com/in/chandrur707  •  github.com/Ramachandran-tech-707', size: 17, color: '475569' })] }),
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('Application for Team Lead / Senior Full Stack Developer')] }),
            new Paragraph({ children: [new TextRun({ text: 'Dear Hiring Manager,', size: 22 })], spacing: { after: 220 } }),
            ...docxParagraphs,
            new Paragraph({ children: [new TextRun({ text: 'Warm regards,', size: 22 })], spacing: { before: 180 } }),
            new Paragraph({ children: [new TextRun({ text: 'T. Ramachandran', bold: true, size: 22 }), new TextRun({ text: '\nTeam Lead & Senior Full Stack Developer\nWeb3 & Blockchain Specialist', size: 22 })] }),
            new Paragraph({ children: [new TextRun({ text: '\nEDUCATION\nMCA (Master of Computer Applications) — Thiagarajar Engineering College, Madurai (2015 - 2018)\nB.Sc Computer Science — The American College, Madurai (2012 - 2015)', size: 18, color: '64748B' })], spacing: { before: 520 } }),
        ],
    }],
});
const docxBuffer = await Packer.toBuffer(docx);
fs.writeFileSync(path.join(outputDirectory, 't-ramachandran-cover-letter.docx'), docxBuffer);
