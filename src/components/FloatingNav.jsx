import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const sections = [
    { id: 'hero', icon: '⊙', labelEn: 'Home', labelAr: 'الرئيسية' },
    { id: 'solutions', icon: '⚡', labelEn: 'Solutions', labelAr: 'الحلول' },
    { id: 'timeline', icon: '📍', labelEn: 'Experience', labelAr: 'المسيرة' },
    { id: 'skills', icon: '🛠', labelEn: 'Arsenal', labelAr: 'الترسانة' },
    { id: 'contact', icon: '📡', labelEn: 'Contact', labelAr: 'تواصل' },
];

export default function FloatingNav() {
    const { i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const [active, setActive] = useState('hero');
    const [hoveredId, setHoveredId] = useState(null);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Scroll spy — use IntersectionObserver on each section
    useEffect(() => {
        const observers = [];
        const threshold = 0.35;

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActive(id);
                },
                { threshold, rootMargin: '-20% 0px -40% 0px' }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    // Hide nav when scrolling fast down, show when scrolling up
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setVisible(y < 80 || y < lastScrollY.current);
            lastScrollY.current = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    className="floating-nav"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ [isAr ? 'left' : 'right']: '1.5rem' }}
                >
                    {sections.map((s) => {
                        const isActive = active === s.id;
                        const isHovered = hoveredId === s.id;
                        const label = isAr ? s.labelAr : s.labelEn;

                        return (
                            <div
                                key={s.id}
                                className="fnav-item"
                                onMouseEnter={() => setHoveredId(s.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => scrollTo(s.id)}
                            >
                                {/* Tooltip label */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.span
                                            className="fnav-tooltip"
                                            style={{ [isAr ? 'left' : 'right']: '3rem' }}
                                            initial={{ opacity: 0, x: isAr ? -8 : 8, scale: 0.9 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, x: isAr ? -8 : 8, scale: 0.9 }}
                                            transition={{ duration: 0.18 }}
                                        >
                                            {label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                                {/* Dot / icon */}
                                <motion.div
                                    className={`fnav-dot ${isActive ? 'fnav-dot--active' : ''}`}
                                    animate={{
                                        scale: isActive ? 1.25 : 1,
                                        backgroundColor: isActive ? 'var(--primary-blue)' : 'rgba(255,255,255,0.15)',
                                        boxShadow: isActive
                                            ? '0 0 0 3px rgba(0,212,255,0.15), 0 0 12px rgba(0,212,255,0.35)'
                                            : '0 0 0 0px transparent',
                                    }}
                                    transition={{ duration: 0.25 }}
                                    whileHover={{ scale: 1.35 }}
                                />
                            </div>
                        );
                    })}

                    {/* Track line */}
                    <div className="fnav-track">
                        <motion.div
                            className="fnav-track-fill"
                            animate={{ height: `${(sections.findIndex(s => s.id === active) / (sections.length - 1)) * 100}%` }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
