import React from 'react';
import { useMode } from '../context/ModeContext';
import { Link } from 'react-router-dom';

const GrowthLab = () => {
    const { mode } = useMode();

    if (mode === 'business') return null;

    const projects = [
        {
            id: 'ioms',
            title: 'IOMS - Institute Operations Management System',
            type: 'Full-Stack Web App',
            desc: 'Comprehensive management system for Instant Academy managing 100+ student groups, smart Zoom scheduling, financial tracking, and automated daily reporting.',
            tech: ['Node.js', 'Express.js', 'SQLite', 'Vanilla JS', 'JWT'],
        },
        {
            id: 'zoom-automation',
            title: 'Zoom Recording Automation (Zapier)',
            type: 'Automation / No-Code',
            desc: 'Full automation pipeline for 22 Zoom accounts — recordings auto-upload to correct Google Drive folder out of 100+ using Dynamic Mapping. Saves 2+ hrs/day.',
            tech: ['Zapier', 'Zoom API', 'Google Drive API', 'Webhooks'],
        },
        {
            id: 'whatsapp-crm-extension',
            title: 'WhatsApp CRM Chrome Extension',
            type: 'Chrome Extension',
            desc: 'Built-in customer data sidebar inside WhatsApp Web. Auto-fetches and displays full customer profile from Google Sheets/ERP when agent opens a chat.',
            tech: ['JavaScript', 'Chrome Extensions API', 'Google Sheets API'],
        },
        {
            id: 'pettouch',
            title: 'PetTouch - Smart Pet Management',
            type: 'Full-Stack Web App',
            desc: 'NFC-based pet management platform with digital pet profiles, medical records, Lost Mode alerts, and bilingual (Arabic/English) responsive dashboard.',
            tech: ['React.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
        },
        {
            id: 'zak-hunt',
            title: 'ZAK-Hunt',
            type: 'Cybersecurity Tool',
            desc: 'Multi-threaded CLI reconnaissance tool integrating Nmap and Gobuster for comprehensive network security assessment and vulnerability exploration.',
            tech: ['Python', 'Nmap', 'Gobuster', 'Multi-threading'],
        },
        {
            id: 'whatsapp-bulk-sender',
            title: 'WhatsApp Bulk Sender',
            type: 'Chrome Extension',
            desc: 'Automated personalized WhatsApp messaging from Excel sheets with dynamic templates, intelligent anti-ban delays, and real-time progress tracking.',
            tech: ['JavaScript', 'Chrome Extensions', 'SheetJS (XLSX)'],
        },
    ];

    const vibeTools = [
        { icon: 'fas fa-robot', name: 'Lovable' },
        { icon: 'fas fa-brain', name: 'Claude AI' },
        { icon: 'fas fa-code', name: 'Cursor' },
        { icon: 'fas fa-bolt', name: 'v0.dev' },
        { icon: 'fas fa-magic', name: 'Gemini' },
        { icon: 'fas fa-stars', name: 'ChatGPT' },
    ];

    return (
        <section id="growth-lab" className="growth-lab tech-mode-content">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-icon">🚀</span>
                        GROWTH LAB
                    </h2>
                    <p className="section-subtitle">Continuous Evolution & Innovation — Building Real Solutions</p>
                </div>

                <div className="lab-grid">
                    <div className="lab-card projects-card" data-aos="fade-left">
                        <div className="card-icon">
                            <i className="fas fa-project-diagram"></i>
                        </div>
                        <h3 className="card-title">KEY PROJECTS</h3>

                        <div className="projects-grid">
                            {projects.map((p) => (
                                <ProjectItem key={p.id} {...p} />
                            ))}
                        </div>
                    </div>

                    <div className="lab-card vibe-tools-card" data-aos="fade-right">
                        <div className="card-icon">
                            <i className="fas fa-microchip"></i>
                        </div>
                        <h3 className="card-title">AI-POWERED DEVELOPMENT</h3>
                        <p className="card-subtitle">Proficient in leveraging cutting-edge AI coding assistants to accelerate development:</p>

                        <div className="vibe-tools-grid">
                            {vibeTools.map((tool, i) => (
                                <VibeTool key={i} icon={tool.icon} name={tool.name} />
                            ))}
                        </div>

                        <p className="impact-text">
                            <strong>Result:</strong> 10x faster development cycles with AI-assisted coding, debugging, and architecture design
                        </p>
                    </div>

                    <div className="lab-card education-card" data-aos="fade-up">
                        <div className="card-icon">
                            <i className="fas fa-university"></i>
                        </div>
                        <h3 className="card-title">EDUCATION</h3>
                        <h4 className="edu-title">Higher Institute for Cooperative Studies & Business Administration (HCM)</h4>
                        <p className="edu-degree">Bachelor's Degree in Business Administration</p>
                        <p className="edu-years">2022 — 2026</p>
                        <div className="edu-tags">
                            <span className="edu-tag">Business Management</span>
                            <span className="edu-tag">Strategic Thinking</span>
                            <span className="edu-tag">Financial Analysis</span>
                        </div>
                        <span className="learning-badge">Continuous Learning Mode Active</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectItem = ({ id, title, type, desc, tech }) => (
    <Link to={`/projects/${id}`} className="project-item">
        <h4 className="project-title">{title}</h4>
        <span className="project-type">{type}</span>
        <p className="project-desc">{desc}</p>
        <div className="tech-tags">
            {tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
        </div>
    </Link>
);

const VibeTool = ({ icon, name }) => (
    <div className="vibe-tool">
        <i className={icon}></i>
        <span>{name}</span>
    </div>
);

export default GrowthLab;
