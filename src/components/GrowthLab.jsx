import React from 'react';
import { useMode } from '../context/ModeContext';
import { Link } from 'react-router-dom';

const GrowthLab = () => {
    const { mode } = useMode();

    if (mode === 'business') return null;

    return (
        <section id="growth-lab" className="growth-lab tech-mode-content">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-icon">🚀</span>
                        GROWTH LAB
                    </h2>
                    <p className="section-subtitle">Continuous Evolution & Innovation - Many Projects & Certifications</p>
                </div>

                <div className="lab-grid">
                    {/* Projects Section - NOW FIRST */}
                    <div className="lab-card projects-card" data-aos="fade-left">
                        <div className="card-icon">
                            <i className="fas fa-project-diagram"></i>
                        </div>
                        <h3 className="card-title">KEY PROJECTS</h3>

                        <div className="projects-grid">
                            <ProjectItem
                                id="zak-hunt"
                                title="ZAK-Hunt"
                                type="Cybersecurity Tool"
                                desc="Multi-threaded reconnaissance tool integrating Nmap and Gobuster for comprehensive network security assessment and vulnerability exploration."
                                tech={["Python", "Nmap", "Gobuster", "Multi-threading"]}
                            />

                            <ProjectItem
                                id="pettouch"
                                title="PetTouch - Smart Pet Management"
                                type="Full-Stack Web Application"
                                desc="Comprehensive pet management platform with NFC tag integration, real-time notifications, and multilingual support (Arabic/English)."
                                tech={["React", "Supabase", "TypeScript", "NFC Integration"]}
                            />

                            <ProjectItem
                                id="whatsapp-automation"
                                title="WhatsApp Automation Extension"
                                type="Chrome Extension"
                                desc="Automated WhatsApp messaging system with Excel integration, template management, and anti-ban protection features."
                                tech={["JavaScript", "Chrome API", "SheetJS", "Automation"]}
                            />

                            <ProjectItem
                                id="instant-academy"
                                title="Instant Academy CRM"
                                type="Business Management System"
                                desc="Complete CRM solution for educational institutions with session management, Zoom integration, and comprehensive reporting."
                                tech={["React", "Node.js", "PostgreSQL", "Zoom API"]}
                            />
                        </div>

                        {/* Vibe Coding Tools Section */}
                        <div className="vibe-coding-section">
                            <div className="vibe-header">
                                <i className="fas fa-magic"></i>
                                <h4>AI-Powered Development Tools Expertise</h4>
                            </div>
                            <p className="vibe-description">
                                Proficient in leveraging cutting-edge AI coding assistants to accelerate development and enhance code quality:
                            </p>
                            <div className="vibe-tools-grid">
                                <VibeTool icon="fas fa-robot" name="Cursor AI" />
                                <VibeTool icon="fas fa-wind" name="Windsurf" />
                                <VibeTool icon="fas fa-code-branch" name="Cline" />
                                <VibeTool icon="fas fa-brain" name="GitHub Copilot" />
                                <VibeTool icon="fas fa-sparkles" name="Gemini AI" />
                                <VibeTool icon="fas fa-bolt" name="Claude AI" />
                            </div>
                            <p className="vibe-impact">
                                <i className="fas fa-chart-line"></i>
                                <strong>Result:</strong> 10x faster development cycles with AI-assisted coding, debugging, and architecture design
                            </p>
                        </div>
                    </div>

                    {/* Education Section - NOW LAST AND COMPACT */}
                    <div className="lab-card education-card" data-aos="fade-up">
                        <div className="education-content-wrapper">
                            <div className="card-icon mini-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <div className="education-details">
                                <h3 className="card-title mini-title">EDUCATION</h3>
                                <div className="education-item mini-item">
                                    <h4>Higher Institute for Cooperative Studies and Business Administration</h4>
                                    <p className="degree">Bachelor's Degree in Business Administration</p>
                                </div>
                            </div>
                            <div className="education-extras">
                                <span className="edu-status">
                                    <i className="fas fa-flask"></i>
                                    Continuous Learning Mode Active
                                </span>
                                <div className="education-badges">
                                    <span className="badge">Business Management</span>
                                    <span className="badge">Strategic Thinking</span>
                                    <span className="badge">Financial Analysis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectItem = ({ id, title, type, desc, tech }) => (
    <div className="project-item">
        <div className="project-header">
            <Link to={`/projects/${id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h4>{title}</h4>
                <i className="fas fa-external-link-alt" style={{ fontSize: '0.9rem', color: 'var(--primary-blue)' }}></i>
            </Link>
            <span className="project-type">{type}</span>
        </div>
        <p className="project-description">{desc}</p>
        <div className="project-tech">
            {tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
        </div>
    </div>
);

const VibeTool = ({ icon, name }) => (
    <div className="vibe-tool">
        <i className={icon}></i>
        <span>{name}</span>
    </div>
);

export default GrowthLab;
