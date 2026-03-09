import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

function TimelineItem({ title, company, date, desc, isLeft, index }) {
    return (
        <motion.div
            className={`timeline-item-new ${isLeft ? 'tl-left' : 'tl-right'}`}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: 'easeOut' }}
        >
            <div className="timeline-card-new glass-card">
                <div className="tl-card-header">
                    <span className="tl-index">0{index + 1}</span>
                    <span className="tl-date">{date}</span>
                </div>
                <h3 className="tl-title">{title}</h3>
                <p className="tl-company">@ {company}</p>
                <p className="tl-desc">{desc}</p>
            </div>
            <div className="tl-dot-wrapper">
                <motion.div
                    className="tl-dot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                />
            </div>
        </motion.div>
    );
}

export default function TimelineSection() {
    const { t } = useTranslation();

    const jobs = [
        { title: t('job1_title'), company: t('job1_company'), date: t('job1_date'), desc: t('job1_desc') },
        { title: t('job2_title'), company: t('job2_company'), date: t('job2_date'), desc: t('job2_desc') },
        { title: t('job3_title'), company: t('job3_company'), date: t('job3_date'), desc: t('job3_desc') },
        { title: t('job4_title'), company: t('job4_company'), date: t('job4_date'), desc: t('job4_desc') },
    ];

    return (
        <section id="timeline" className="section-wrapper section-alt">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-tag">EXPERIENCE</div>
                    <h2 className="section-title gradient-text">{t('timeline_title')}</h2>
                    <p className="section-subtitle">{t('timeline_subtitle')}</p>
                </motion.div>

                <div className="timeline-new">
                    <div className="tl-center-line" />
                    {jobs.map((job, i) => (
                        <TimelineItem
                            key={i}
                            index={i}
                            isLeft={i % 2 === 0}
                            {...job}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
