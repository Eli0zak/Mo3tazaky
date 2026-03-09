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
                        title="Senior Operations Specialist"
                        company="Instant Software Solutions"
                        location="Dokki"
                        delay="0"
                        achievements={[
                            "Process Optimization & Workflow Management",
                            "Cross-functional Team Leadership",
                            "Performance Analytics & Reporting"
                        ]}
                    />

                    <TimelineItem
                        date="Sep 2025 - Nov 2025"
                        title="Project Manager"
                        company="QUALIFIDERS"
                        location="Cairo, Egypt (Hybrid)"
                        delay="50"
                        achievements={[
                            "New Business Development",
                            "Project Planning & Execution",
                            "Team Coordination & Resource Management",
                            "Quality Assurance & Delivery"
                        ]}
                    />

                    <TimelineItem
                        date="Nov 2024 - Oct 2025"
                        title="Sales Manager"
                        company="Barah Co-working Space"
                        location="Giza, Al Jizah, Egypt"
                        delay="100"
                        achievements={[
                            "Leading sales team and driving company growth objectives",
                            "Developing sales strategies & building long-term client relationships",
                            "Training and motivating the sales team to achieve peak performance",
                            "Managing sales process from initial contact to closing deals",
                            "Analyzing market and competitors to develop innovative solutions"
                        ]}
                        kpi={[
                            { label: "Team Leadership", value: 90 },
                            { label: "Client Satisfaction", value: 92 }
                        ]}
                    />

                    <TimelineItem
                        date="Sep 2024 - Nov 2024"
                        title="Booking Coordinator"
                        company="Barah Co-working Space"
                        location="Giza, Al Jizah, Egypt"
                        type="Part-time"
                        delay="150"
                        achievements={[
                            "Problem Solving & Decision-Making",
                            "Booking Management & Coordination",
                            "Client Communication & Support"
                        ]}
                    />

                    <TimelineItem
                        date="Jul 2024 - Nov 2024"
                        title="Sales Specialist"
                        company="Barah Co-working Space"
                        location="Al Jizah, Egypt"
                        delay="200"
                        achievements={[
                            "Sales & Sales Processes",
                            "Client Acquisition & Relationship Building",
                            "Revenue Generation"
                        ]}
                    />

                    <TimelineItem
                        date="Jan 2024 - May 2024"
                        title="Sales Specialist"
                        company="Optical Soft"
                        type="Part-time"
                        delay="250"
                        achievements={[
                            "Sales Operations",
                            "Product Knowledge & Consultation",
                            "Customer Service Excellence"
                        ]}
                    />

                    <TimelineItem
                        date="Jan 2024 - Mar 2024"
                        title="Customer Service Representative"
                        company="Teleperformance - Orange Egypt"
                        location="New Cairo, Cairo, Egypt"
                        delay="300"
                        achievements={[
                            "Consistently ranked among top performers for two months",
                            "Efficiently handled customer inquiries and issues",
                            "Maintained professionalism and empathy",
                            "Collaborated with teams for issue resolution"
                        ]}
                    />

                    <TimelineItem
                        date="Jun 2023 - Oct 2023"
                        title="Customer Service Representative"
                        company="Americana Group"
                        location="Egypt"
                        delay="350"
                        achievements={[
                            "Foundation in Customer Operations",
                            "Telephone Reception & Customer Support",
                            "Client Services & Team Collaboration"
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
