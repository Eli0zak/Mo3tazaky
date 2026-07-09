import React from 'react';
import { useMode } from '../context/ModeContext';

const OperationsRoadmap = () => {
    const { mode } = useMode();

    // If in tech mode, this section might be hidden or styled differently. 
    // Based on original code: class "business-mode-content" implies it's for business mode.
    // We can hide it entirely in Tech mode if desired, or keep it visible.
    // The original JS didn't seem to hide the entire section, just swapped roles in the hero.
    // However, I'll follow the logical separation. Let's keep it visible but maybe less emphasized, 
    // or hide it if strictly following "Mode" concept.

    if (mode === 'tech') return null;

    return (
        <section id="operations-roadmap" className="operations-roadmap business-mode-content">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-icon">📊</span>
                        OPERATIONS ROADMAP
                    </h2>
                    <p className="section-subtitle">The Journey of Integration</p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    <TimelineItem
                        date="Dec 2025 - Present"
                        title="Enterprise Systems Engineer & Sr. Ops Specialist"
                        company="Instant Software Solutions"
                        location="Giza, Egypt"
                        delay="0"
                        achievements={[
                            "Leading technical operations and multi-account infrastructures",
                            "Architecting scalable enterprise ERP modules (49.92% of production commits)",
                            "Building automated Zoom integrations and real-time QR-code pipelines"
                        ]}
                    />

                    <TimelineItem
                        date="Sep 2025 - Nov 2025"
                        title="Project Manager"
                        company="QUALIFIDERS"
                        location="Cairo, Egypt (Hybrid)"
                        delay="50"
                        achievements={[
                            "New Business Development and cross-functional project execution",
                            "Optimizing internal pipeline tracking mechanics",
                            "Streamlining delivery cycles and tactical operations"
                        ]}
                    />

                    <TimelineItem
                        date="Jul 2024 - Oct 2025"
                        title="Sales Manager & Coordinator"
                        company="Barah Co-working Space"
                        location="Giza, Egypt"
                        delay="100"
                        achievements={[
                            "Led the sales team to execute strategic growth objectives",
                            "Orchestrated scheduling workflows and resolved resource allocation conflicts",
                            "Executed direct outbound sales processes and exceeded acquisition targets"
                        ]}
                        kpi={[
                            { label: "Team Leadership", value: 90 },
                            { label: "Client Satisfaction", value: 92 }
                        ]}
                    />

                    <TimelineItem
                        date="2021 - Present"
                        title="Integrated Operator & Vibe Coder"
                        company="Freelance / Independent Projects"
                        location="Remote"
                        delay="150"
                        achievements={[
                            "Architected custom web applications and L&D operational configurations",
                            "Built external automation loops utilizing customized Webhooks, n8n, Zapier",
                            "Utilizing React/Next.js and Supabase"
                        ]}
                    />

                    <TimelineItem
                        date="Jun 2023 - May 2025"
                        title="Previous Roles (Sales & Customer Service)"
                        company="Optical Soft | Teleperformance | Americana"
                        location="Egypt"
                        delay="200"
                        achievements={[
                            "Managed high-volume telephone reception lines and customer support channels",
                            "Consistently ranked among top performers in technical support",
                            "Managed part-time account consulting and pitched tailored product setups"
                        ]}
                    />

                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ date, title, company, location, type, achievements, kpi, delay }) => {
    return (
        <div className="timeline-item" data-aos="fade-up" data-aos-delay={delay}>
            <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-date">{date}</div>
            </div>
            <div className="timeline-card">
                <div className="card-header-timeline">
                    <h3>{title}</h3>
                    <span className="company">{company}</span>
                </div>
                <div className="card-body">
                    {location && <p className="location"><i className="fas fa-map-marker-alt"></i> {location}</p>}
                    {type && <p className="employment-type"><i className="fas fa-clock"></i> {type}</p>}
                    <ul className="achievements">
                        {achievements.map((item, index) => (
                            <li key={index}><i className="fas fa-check-circle"></i> {item}</li>
                        ))}
                    </ul>
                    {kpi && (
                        <div className="kpi-display">
                            {kpi.map((item, index) => (
                                <div className="kpi-item" key={index}>
                                    <span className="kpi-label">{item.label}</span>
                                    <div className="kpi-bar">
                                        <div className="kpi-fill" style={{ width: `${item.value}%` }}></div>
                                    </div>
                                    <span className="kpi-value">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OperationsRoadmap;
