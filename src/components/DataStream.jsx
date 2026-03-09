// DataStream.jsx — Unified Scrollytelling Nerve Line + Animated Section Navigator
// Each section has a unique SVG icon with its own idle animation.
// Clicking any icon scrolls to that section.
// The trunk fills via scaleY (GPU-composited, 90fps).

import React, { useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, motion, AnimatePresence, useMotionValueEvent } from 'framer-motion';

// ── Section definitions: unique icon, animation, scroll position ──────────────
const SECTIONS = [
    {
        id: 'hero',
        label: 'Home',
        labelAr: 'الرئيسية',
        pos: 0.0,       // fraction of page height where icon sits
        scrollTo: '#hero',
        icon: 'radar',      // pulsing concentric rings
    },
    {
        id: 'solutions',
        label: 'Solutions',
        labelAr: 'الحلول',
        pos: 0.22,
        scrollTo: '#solutions',
        icon: 'lightning',  // electric bolt
    },
    {
        id: 'timeline',
        label: 'Trajectory',
        labelAr: 'المسيرة',
        pos: 0.44,
        scrollTo: '#timeline',
        icon: 'hexagon',    // rotating hex node
    },
    {
        id: 'skills',
        label: 'Arsenal',
        labelAr: 'الترسانة',
        pos: 0.66,
        scrollTo: '#skills',
        icon: 'gear',       // spinning gear
    },
    {
        id: 'contact',
        label: 'Contact',
        labelAr: 'تواصل',
        pos: 0.85,
        scrollTo: '#contact',
        icon: 'signal',     // wifi-like radiating arcs
    },
];

// ── Determine active section from scroll progress ─────────────────────────────
function getActiveIndex(progress) {
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
        if (progress >= SECTIONS[i].pos - 0.05) return i;
    }
    return 0;
}

// ── SVG Icon Components ───────────────────────────────────────────────────────

function RadarIcon({ active }) {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="3" fill="currentColor" />
            {active && (
                <>
                    <motion.circle cx="14" cy="14" r={7}
                        stroke="currentColor" strokeWidth="1"
                        fill="none" strokeOpacity="0.5"
                        animate={{ r: [7, 11], opacity: [0.6, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                    />
                    <motion.circle cx="14" cy="14" r={7}
                        stroke="currentColor" strokeWidth="1"
                        fill="none" strokeOpacity="0.3"
                        animate={{ r: [7, 13], opacity: [0.4, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                    />
                </>
            )}
            {!active && (
                <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" />
            )}
        </svg>
    );
}

function LightningIcon({ active }) {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <motion.path
                d="M16 4L8 16h8l-4 8 12-14h-8l4-6z"
                fill="currentColor"
                fillOpacity={active ? 1 : 0.35}
                animate={active ? {
                    filter: ['drop-shadow(0 0 2px #00d4ff)', 'drop-shadow(0 0 8px #00d4ff)', 'drop-shadow(0 0 2px #00d4ff)']
                } : {}}
                transition={active ? { duration: 1.6, repeat: Infinity } : {}}
            />
        </svg>
    );
}

function HexagonIcon({ active }) {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <motion.polygon
                points="14,3 24,8.5 24,19.5 14,25 4,19.5 4,8.5"
                stroke="currentColor"
                strokeWidth={active ? 1.5 : 1}
                strokeOpacity={active ? 1 : 0.35}
                fill={active ? 'rgba(0,212,255,0.12)' : 'transparent'}
                animate={active ? { rotate: [0, 360] } : { rotate: 0 }}
                transition={active ? { duration: 12, repeat: Infinity, ease: 'linear' } : {}}
                style={{ transformOrigin: '14px 14px' }}
            />
            <circle cx="14" cy="14" r="2.5" fill="currentColor" fillOpacity={active ? 1 : 0.4} />
        </svg>
    );
}

function GearIcon({ active }) {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <motion.g
                animate={active ? { rotate: [0, 360] } : { rotate: 0 }}
                transition={active ? { duration: 6, repeat: Infinity, ease: 'linear' } : {}}
                style={{ transformOrigin: '14px 14px' }}
            >
                <path
                    d="M14 18a4 4 0 100-8 4 4 0 000 8zm6.5-2.5l1.5 1-1 2-1.8-.4a5.5 5.5 0 01-1 .6l-.2 1.8h-2l-.2-1.8a5.5 5.5 0 01-1-.6L12.8 19l-1-2 1.4-1a5.5 5.5 0 010-1.2L11.8 13l1-2 1.8.4a5.5 5.5 0 011-.6l.2-1.8h2l.2 1.8c.36.17.69.38 1 .6l1.8-.4 1 2-1.4 1a5.5 5.5 0 010 1.2z"
                    fill="currentColor"
                    fillOpacity={active ? 0.9 : 0.35}
                />
            </motion.g>
        </svg>
    );
}

function SignalIcon({ active }) {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="20" r="2" fill="currentColor" fillOpacity={active ? 1 : 0.4} />
            {[1, 2, 3].map((i) => (
                <motion.path
                    key={i}
                    d={`M${14 - i * 4} ${20 - i * 3} Q14 ${20 - i * 4.5} ${14 + i * 4} ${20 - i * 3}`}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity={active ? (1 - i * 0.25) : (0.15 * (4 - i))}
                    fill="none"
                    strokeLinecap="round"
                    animate={active ? { opacity: [0.3, 1, 0.3] } : {}}
                    transition={active ? { duration: 1.5, repeat: Infinity, delay: i * 0.18 } : {}}
                />
            ))}
        </svg>
    );
}

const ICON_MAP = {
    radar: RadarIcon,
    lightning: LightningIcon,
    hexagon: HexagonIcon,
    gear: GearIcon,
    signal: SignalIcon,
};

// ── Branch node: icon + tooltip ───────────────────────────────────────────────
function NavNode({ section, active, progress, isRtl }) {
    const [hovered, setHovered] = useState(false);

    const Icon = ICON_MAP[section.icon];

    const fadeIn = useTransform(
        progress,
        [Math.max(0, section.pos - 0.08), section.pos + 0.04],
        [0, 1]
    );

    const scrollTo = () => {
        const el = document.querySelector(section.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div
            className={`ds-nav-node ${active ? 'ds-nav-node--active' : ''}`}
            style={{
                top: `calc(${section.pos * 100}% + 4rem)`,
                opacity: fadeIn,
                willChange: 'opacity',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={scrollTo}
        >
            {/* Animated icon */}
            <motion.div
                className="ds-icon-wrap"
                animate={{
                    scale: active ? 1.18 : hovered ? 1.08 : 1,
                    color: active || hovered ? '#00d4ff' : 'rgba(0,212,255,0.28)',
                }}
                transition={{ duration: 0.25 }}
                style={{ willChange: 'transform' }}
            >
                <Icon active={active} />
                {/* Glow halo when active */}
                {active && (
                    <motion.div
                        className="ds-icon-halo"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
                {hovered && (
                    <motion.span
                        className="ds-tooltip"
                        style={{ [isRtl ? 'left' : 'right']: '110%' }}
                        initial={{ opacity: 0, x: isRtl ? -8 : 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isRtl ? -8 : 8 }}
                        transition={{ duration: 0.18 }}
                    >
                        {isRtl ? section.labelAr : section.label}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ── Main DataStream ───────────────────────────────────────────────────────────
export default function DataStream() {
    const { scrollYProgress } = useScroll();
    const [activeIdx, setActiveIdx] = useState(0);
    const [isRtl, setIsRtl] = useState(false);

    // Detect RTL
    useEffect(() => {
        const check = () => setIsRtl(document.documentElement.dir === 'rtl');
        check();
        const obs = new MutationObserver(check);
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => obs.disconnect();
    }, []);

    // Smooth scroll progress for trunk fill
    const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

    // Active section tracking — no re-render cost from MotionValue listener
    useMotionValueEvent(smooth, 'change', (latest) => {
        const idx = getActiveIndex(latest);
        setActiveIdx(idx);
    });

    // Trunk fill position (for RTL: mirrored)
    const side = isRtl ? 'left' : 'right';

    return (
        <div
            className="data-stream-wrap"
            style={{ [side]: '22px' }}
            aria-label="Section navigation"
            role="navigation"
        >
            {/* ── dim background trunk ── */}
            <div className="ds-trunk-bg" />

            {/* ── animated fill trunk ── */}
            <motion.div
                className="ds-trunk-fill"
                style={{
                    scaleY: smooth,
                    transformOrigin: 'top center',
                    willChange: 'transform',
                }}
            />

            {/* ── traveling glow particle ── */}
            <motion.div
                className="ds-particle"
                style={{
                    top: useTransform(smooth, [0, 1], ['4rem', 'calc(100% - 2rem)']),
                    willChange: 'transform',
                }}
            />

            {/* ── section nav nodes ── */}
            {SECTIONS.map((s, i) => (
                <NavNode
                    key={s.id}
                    section={s}
                    active={activeIdx === i}
                    progress={smooth}
                    isRtl={isRtl}
                />
            ))}
        </div>
    );
}
