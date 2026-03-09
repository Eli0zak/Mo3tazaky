import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Animated particle canvas background
function ParticleCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animFrameId;
        let particles = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.r = Math.random() * 1.5 + 0.5;
                this.alpha = Math.random() * 0.5 + 0.15;
            }
            move() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
        }

        for (let i = 0; i < 90; i++) particles.push(new Particle());

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.move();
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
                ctx.fill();
                // connect nearby
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dist = Math.hypot(p.x - q.x, p.y - q.y);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            animFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="hero-canvas" />;
}

// Typewriter effect for cycling titles
function TypewriterTitle({ titles }) {
    const [idx, setIdx] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = titles[idx];
        let timeout;
        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setIdx((idx + 1) % titles.length);
        }
        return () => clearTimeout(timeout);
    }, [displayed, deleting, idx, titles]);

    return (
        <div className="typewriter-wrap">
            <span className="typewriter-text">{displayed}</span>
            <span className="typewriter-cursor">|</span>
        </div>
    );
}

// Animated counter
function AnimatedCounter({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) return;
        ref.current = true;
        const numTarget = parseFloat(target);
        if (isNaN(numTarget)) { setCount(target); return; }
        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * numTarget));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target]);

    return <span>{typeof count === 'number' ? count : target}{suffix}</span>;
}

export default function HeroSection() {
    const { t } = useTranslation();
    const titles = t('hero_titles', { returnObjects: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const scrollToSolutions = (e) => {
        e.preventDefault();
        const el = document.querySelector('#solutions');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero-section">
            <ParticleCanvas />
            <div className="hero-grid-overlay" />

            <div className="hero-inner">
                <motion.div
                    className="identity-card glass-card"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Card Header */}
                    <motion.div className="card-header" variants={itemVariants}>
                        <div className="status-indicator">
                            <span className="status-dot" />
                            <span className="status-text">{t('hero_status')}</span>
                        </div>
                        <span className="operator-id">{t('hero_operator_id')}</span>
                    </motion.div>

                    {/* Left Column: Photo & Name */}
                    <motion.div className="hero-col-left" variants={itemVariants}>
                        {/* Profile Photo */}
                        <motion.div className="profile-photo-container">
                            <div className="profile-photo-ring">
                                <div className="profile-photo-placeholder">
                                    <span className="profile-initials">MZ</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Name */}
                        <motion.h1 className="operator-name">
                            {t('hero_name')}
                        </motion.h1>

                        {/* Typewriter Titles */}
                        <motion.div>
                            <TypewriterTitle titles={Array.isArray(titles) ? titles : []} />
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Bio, Stats, CTA */}
                    <motion.div className="hero-col-right" variants={itemVariants}>
                        {/* Bio */}
                        <motion.p className="hero-bio">
                            {t('hero_bio')}
                        </motion.p>

                        {/* Stats */}
                        <motion.div className="quick-stats">
                            <div className="stat-item">
                                <span className="stat-value">
                                    <AnimatedCounter target={t('stat_automation')} suffix="%" />
                                </span>
                                <span className="stat-label">{t('stat_automation_label')}</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-value">
                                    <AnimatedCounter target={t('stat_years')} suffix="+" />
                                </span>
                                <span className="stat-label">{t('stat_years_label')}</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-value">{t('stat_platforms')}</span>
                                <span className="stat-label">{t('stat_platforms_label')}</span>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.a className="cta-button" href="#solutions" onClick={scrollToSolutions}>
                            {t('hero_cta')} →
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="mouse"><div className="wheel" /></div>
                <span>{t('hero_scroll')}</span>
            </motion.div>
        </section>
    );
}
