import React from 'react';
import { useMode } from '../context/ModeContext';

const OperationsRoadmap = () => {
    const { mode } = useMode();

    if (mode === 'tech') return null;

    const timeline = [
        {
            date: 'Dec 2025 — Present',
            title: 'Senior Operations Specialist',
            company: 'Instant Software Solutions',
            location: 'Dokki, Cairo · On-site',
            type: 'Full-time',
            achievements: [
                'Managing operations for 100+ active student groups across 22 Zoom accounts',
                'Built and deployed IOMS — a full Institute Operations Management System from scratch',
                'Automated Zoom recording pipeline via Zapier saving 2+ hours daily per team member',
                'Built WhatsApp CRM Chrome Extension reducing customer lookup time from 2min to 0sec',
                'Led logistics and student onboarding for Instant x Orange Digital Center 2026 event',
                'Process optimization, workflow management, and cross-functional team leadership',
            ],
            kpi: [
                { label: 'Automation Rate', value: 100 },
                { label: 'Error Reduction', value: 95 },
                { label: 'Time Saved', value: 80 },
            ],
        },
        {
            date: 'Sep 2025 — Nov 2025',
            title: 'Project Manager',
            company: 'QUALIFIDERS',
            location: 'Cairo, Egypt · Hybrid',
            type: 'Full-time',
            achievements: [
                'Managed new business development and consulting projects',
                'Coordinated cross-functional teams across multiple client engagements',
                'Developed project roadmaps and ensured on-time delivery',
                'Built client relationships and managed project pipelines',
            ],
        },
        {
            date: 'Jul 2024 — Oct 2025',
            title: 'Sales Manager',
            company: 'Barah Co-working Space',
            location: 'Giza, Egypt · On-site',
            type: 'Full-time',
            achievements: [
                'Led the sales team and drove company growth objectives',
                'Developed sales strategies and built long-term client relationships',
                'Analyzed market performance to enhance processes and boost revenue',
                'Trained and motivated sales team to achieve peak performance',
                'Managed full sales process from initial contact to closing deals',
            ],
        },
        {
            date: 'Jan 2025 — May 2025',
            title: 'Sales Specialist',
            company: 'Optical Soft',
            location: 'Cairo, Egypt',
            type: 'Part-time',
            achievements: [
                'Software solution sales to business clients',
                'Client needs analysis and solution presentation',
            ],
        },
        {
            date: 'Jan 2024 — Mar 2024',
            title: 'Customer Service Representative',
            company: 'Teleperformance (Orange Egypt)',
            location: 'New Cairo, Egypt · On-site',
            type: 'Full-time',
            achievements: [
                'Consistently ranked among top performers for 2 consecutive months',
                'Efficiently handled customer inquiries and technical issues',
                'Maintained high professionalism and customer satisfaction scores',
                'Collaborated with teams for efficient issue resolution',
            ],
        },
    ];

    return (
        <section id="operations-roadmap" className="operations-roadmap business-mode-content">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-icon">📊</span>
                        OPERATIONS ROADMAP
                    </h2>
                    <p className="section-subtitle">The Journey of Integration — Experience & Impact</p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {timeline.map((item, i) => (
                        <TimelineItem key={i} {...item} delay={i * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ date, title, company, location, type, achievements, kpi, delay }) => {
    return (
        <div className="timeline-item" style={{ animationDelay: `${delay}ms` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <span className="timeline-date">{date}</span>
                <h3 className="timeline-title">{title}</h3>
                <span className="timeline-company">{company}</span>
                {location && <span className="timeline-location">{location}</span>}
                {type && <span className="timeline-type">{type}</span>}
                <ul className="timeline-achievements">
                    {achievements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                {kpi && (
                    <div className="kpi-grid">
                        {kpi.map((item, index) => (
                            <div key={index} className="kpi-item">
                                <span className="kpi-label">{item.label}</span>
                                <span className="kpi-value">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OperationsRoadmap;
