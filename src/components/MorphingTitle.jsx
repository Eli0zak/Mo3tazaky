// MorphingTitle.jsx
// A fixed large background watermark that morphs between section names as you scroll.
// Direct DOM manipulation (textContent) during animation = zero React re-renders = 90fps.
// Uses framer-motion's useMotionValueEvent to listen to scroll without re-rendering.

import React, { useRef, useEffect } from 'react';
import { useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

// Scramble charset — techy feel
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!$%&*+=?/\\|<>^~';

// Map each scroll-progress range to a section word
const SECTION_MAP = [
    { word: 'MOATAZ\u00A0ZAKY', start: 0, end: 0.14 },
    { word: 'SOLUTIONS', start: 0.14, end: 0.36 },
    { word: 'TRAJECTORY', start: 0.36, end: 0.55 },
    { word: 'ARSENAL', start: 0.55, end: 0.74 },
    { word: 'CONTACT', start: 0.74, end: 1.01 },
];

// Scramble animate — pure DOM, no React state updates, perfect 90fps
function scramble(el, target, duration = 680) {
    if (!el) return;
    let startTime = null;
    let rafId = null;

    const tick = (ts) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);

        let result = '';
        for (let i = 0; i < target.length; i++) {
            const ch = target[i];
            if (ch === '\u00A0' || ch === ' ') { result += '\u00A0'; continue; }
            // Each char settles sequentially — cascading settle from left to right
            const charProgress = Math.max(0, (progress * (target.length + 5) - i) / 5);
            if (charProgress >= 1) {
                result += ch;
            } else {
                result += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
        }

        el.textContent = result;
        if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    // Cancel any in-progress animation on same element
    if (el._rafId) cancelAnimationFrame(el._rafId);
    el._rafId = rafId = requestAnimationFrame(tick);
}

function getCurrentWord(progress) {
    for (let i = SECTION_MAP.length - 1; i >= 0; i--) {
        if (progress >= SECTION_MAP[i].start) return SECTION_MAP[i].word;
    }
    return SECTION_MAP[0].word;
}

export default function MorphingTitle() {
    const titleRef = useRef(null);
    const activeWordRef = useRef(SECTION_MAP[0].word);

    const { scrollYProgress } = useScroll();
    const smooth = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        mass: 0.5,
    });

    // Set initial text without animation
    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.textContent = SECTION_MAP[0].word;
        }
    }, []);

    // Listen to scroll — no component re-renders, just DOM updates
    useMotionValueEvent(smooth, 'change', (latest) => {
        const newWord = getCurrentWord(latest);
        if (newWord !== activeWordRef.current) {
            activeWordRef.current = newWord;
            scramble(titleRef.current, newWord);
        }
    });

    return (
        <div className="morphing-title-wrap" aria-hidden="true">
            <span
                ref={titleRef}
                className="morphing-title"
                style={{ willChange: 'contents' }}
            />
        </div>
    );
}
