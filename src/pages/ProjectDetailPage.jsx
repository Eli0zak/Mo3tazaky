import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import projects from '../data/projects.js';
import ImageSlider from '../components/ImageSlider.jsx';

function BackIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5" /><polyline points="12 19 5 12 12 5" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

export default function ProjectDetailPage() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return (
            <div className="pdetail-not-found">
                <h2>{isAr ? 'المشروع غير موجود' : 'Project not found'}</h2>
                <Link to="/" className="pdetail-back-btn">
                    <BackIcon /> {isAr ? 'عودة' : 'Go back'}
                </Link>
            </div>
        );
    }

    const content = [
        {
            icon: '🎯',
            labelEn: 'The Challenge',
            labelAr: 'التحدي',
            textEn: project.challengeEn,
            textAr: project.challengeAr,
            color: 'var(--accent-orange)',
        },
        {
            icon: '⚙️',
            labelEn: 'The Solution',
            labelAr: 'الحل',
            textEn: project.solutionEn,
            textAr: project.solutionAr,
            color: 'var(--primary-blue)',
        },
        {
            icon: '📈',
            labelEn: 'The Impact',
            labelAr: 'الأثر',
            textEn: project.impactEn,
            textAr: project.impactAr,
            color: 'var(--accent-green)',
        },
    ];

    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
    };
    const item = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
    };

    return (
        <div className="pdetail-root">
            <div className="hero-grid-overlay" style={{ opacity: 0.5 }} />

            <div className="pdetail-container container">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <button className="pdetail-back-btn" onClick={() => navigate(-1)}>
                        <BackIcon />
                        <span>{isAr ? 'العودة' : 'Back'}</span>
                    </button>
                </motion.div>


                {/* ─── Hero block ─── */}
                <motion.div
                    className="pdetail-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.1 }}
                >
                    <div className="pdetail-icon-wrap">
                        <span className="pdetail-icon">{project.icon}</span>
                    </div>
                    <div className="pdetail-category-badge">
                        {isAr ? project.tagAr : project.tagEn}
                    </div>
                    <h1 className="pdetail-title">
                        {isAr ? project.titleAr : project.titleEn}
                    </h1>
                    <p className="pdetail-subtitle">
                        {isAr ? project.subtitleAr : project.subtitleEn}
                    </p>
                    <p className="pdetail-summary">
                        {isAr ? project.descAr : project.descEn}
                    </p>
                </motion.div>

                {/* ─── Image Gallery Slider ─── */}
                {project.gallery && project.gallery.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.22 }}
                    >
                        <ImageSlider slides={project.gallery} />
                    </motion.div>
                )}


                {/* Metrics */}
                {project.metrics && (
                    <motion.div
                        className="pdetail-metrics"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.3 }}
                    >
                        {project.metrics.map((m, i) => (
                            <div key={i} className="pdetail-metric glass-card">
                                <span className="pdetail-metric-value">{m.valueEn}</span>
                                <span className="pdetail-metric-label">
                                    {isAr ? m.labelAr : m.labelEn}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* Challenge / Solution / Impact */}
                <motion.div
                    className="pdetail-sections"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    {content.map((s, i) => (
                        <motion.div key={i} className="pdetail-section glass-card" variants={item}>
                            <div className="pdetail-section-label" style={{ color: s.color }}>
                                <span className="pdetail-section-icon">{s.icon}</span>
                                <span>{isAr ? s.labelAr : s.labelEn}</span>
                            </div>
                            <p className="pdetail-section-text">
                                {isAr ? s.textAr : s.textEn}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Stack */}
                {project.techStack && (
                    <motion.div
                        className="pdetail-stack"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.5 }}
                    >
                        <h3 className="pdetail-stack-title">
                            {isAr ? 'الأدوات والتقنيات' : 'Tech Stack & Tools'}
                        </h3>
                        <div className="pdetail-stack-badges">
                            {project.techStack.map((t, i) => (
                                <div key={i} className="pdetail-stack-badge">
                                    <span className="pdetail-stack-check"><CheckIcon /></span>
                                    {t}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Other Projects */}
                <motion.div
                    className="pdetail-other"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.55, delay: 0.65 }}
                >
                    <h3 className="pdetail-other-title">
                        {isAr ? 'مشاريع أخرى' : 'Other Projects'}
                    </h3>
                    <div className="pdetail-other-grid">
                        {projects
                            .filter(p => p.id !== project.id)
                            .map(p => (
                                <Link key={p.id} to={`/projects/${p.id}`} className="pdetail-other-card glass-card">
                                    <span className="pdetail-other-icon">{p.icon}</span>
                                    <div>
                                        <p className="pdetail-other-name">{isAr ? p.titleAr : p.titleEn}</p>
                                        <p className="pdetail-other-sub">{isAr ? p.subtitleAr : p.subtitleEn}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
