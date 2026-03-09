import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projects.js';

// Top-right folder icon
function FolderIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
            <polyline points="12 11 12 17" /><polyline points="9 14 12 17 15 14" />
        </svg>
    );
}

// External link icon
function ExternalLinkIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}

export default function ProjectsSection() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { key: 'all', labelEn: 'All', labelAr: 'الكل' },
        { key: 'automation', labelEn: 'Automation', labelAr: 'أتمتة' },
        { key: 'operations', labelEn: 'Operations', labelAr: 'عمليات' },
        { key: 'systems', labelEn: 'Systems', labelAr: 'أنظمة' },
        { key: 'development', labelEn: 'Development', labelAr: 'تطوير' },
    ];

    const displayed = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="solutions" className="section-wrapper">
            <div className="section-grid-overlay" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="projects-big-title">
                        {t('projects_title')}
                    </h2>
                    <p className="projects-subtitle">
                        {t('projects_subtitle')}
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {filters.map(f => (
                        <button
                            key={f.key}
                            className={`project-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f.key)}
                        >
                            {isAr ? f.labelAr : f.labelEn}
                        </button>
                    ))}
                </motion.div>

                {/* Cards Grid */}
                <motion.div className="projects-grid" layout>
                    <AnimatePresence mode="popLayout">
                        {displayed.map((p, i) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35, delay: i * 0.07 }}
                            >
                                <div className="project-card glass-card" style={{ height: '100%' }}>
                                    {/* Top Row */}
                                    <div className="pcard-top">
                                        <Link to={`/projects/${p.id}`} className="pcard-ext" title="View project detail">
                                            <ExternalLinkIcon />
                                        </Link>
                                        <div className="pcard-folder-icon">
                                            <FolderIcon />
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="pcard-body">
                                        <h3 className="pcard-title">
                                            {isAr ? p.titleAr : p.titleEn}
                                        </h3>
                                        <p className="pcard-subtitle">
                                            {isAr ? p.subtitleAr : p.subtitleEn}
                                        </p>
                                        <p className="pcard-desc">
                                            {isAr ? p.descAr : p.descEn}
                                        </p>

                                        {/* CTA */}
                                        <Link to={`/projects/${p.id}`} className="pcard-cta">
                                            {isAr ? 'اقرأ التفاصيل' : 'Read Case Study'} →
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
