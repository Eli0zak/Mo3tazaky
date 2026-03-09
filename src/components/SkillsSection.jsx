import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Skills data structured from content.template.json
const skillsData = [
    {
        categoryKey: 'skills_ops',
        color: 'cyan',
        items: [
            { name: 'Supabase', icon: '🗄️' },
            { name: 'CRM Systems', icon: '🗂' },
            { name: 'Zapier / n8n', icon: '⚡' },
            { name: 'React / Next.js', icon: '⚛️' },
        ]
    },
    {
        categoryKey: 'skills_ai',
        color: 'purple',
        items: [
            { name: 'Cursor AI', icon: '🤖' },
            { name: 'Claude', icon: '🧠' },
            { name: 'Gemini', icon: '✨' },
            { name: 'Antigravity', icon: '🚀' },
            { name: 'Custom Gems', icon: '💎' },
        ]
    },
    {
        categoryKey: 'skills_secure',
        color: 'green',
        items: [
            { name: 'CCNA', icon: '🌐' },
            { name: 'CompTIA A+', icon: '🛡' },
            { name: 'Cyber Security', icon: '🔐' },
        ]
    },
];

const colorMap = {
    cyan: 'var(--primary-blue)',
    purple: 'rgba(160, 100, 255, 0.8)',
    green: 'rgba(0, 200, 100, 0.8)',
};

export default function SkillsSection() {
    const { t } = useTranslation();

    const categoryVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const badgeVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.85 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'backOut' } }
    };

    return (
        <section id="skills" className="section-wrapper">
            {/* Grid overlay background */}
            <div className="section-grid-overlay" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="arsenal-title">{t('skills_title')}</h2>
                    <p className="arsenal-subtitle">{t('skills_subtitle')}</p>
                </motion.div>

                <div className="skills-categories-wrap">
                    {skillsData.map((category, ci) => (
                        <motion.div
                            key={ci}
                            className="skills-category"
                            variants={categoryVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ delay: ci * 0.15 }}
                        >
                            <h3
                                className="skills-category-name"
                                style={{ color: colorMap[category.color] }}
                            >
                                {t(category.categoryKey)}
                            </h3>
                            <motion.div
                                className="arsenal-badges-wrap"
                                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: ci * 0.15 } } }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {category.items.map((skill, si) => (
                                    <motion.div
                                        key={si}
                                        className="arsenal-badge"
                                        variants={badgeVariants}
                                        whileHover={{
                                            scale: 1.08,
                                            borderColor: colorMap[category.color],
                                            boxShadow: `0 0 18px ${colorMap[category.color]}40`
                                        }}
                                    >
                                        <span className="arsenal-badge-icon">{skill.icon}</span>
                                        <span className="arsenal-badge-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
