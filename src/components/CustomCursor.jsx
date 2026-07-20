import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const [cursorType, setCursorType] = useState('default');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect touch devices / mobile browsers to disable custom cursor
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        setIsMobile(isTouch);

        if (isTouch) return;

        let mouseX = -100;
        let mouseY = -100;
        let cursorX = -100;
        let cursorY = -100;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // High-speed Lerp loop for GPU-accelerated ultra-responsive cursor tracking
        let animFrame;
        const tick = () => {
            cursorX += (mouseX - cursorX) * 0.65;
            cursorY += (mouseY - cursorY) * 0.65;

            const currentCursor = cursorRef.current;
            if (currentCursor) {
                currentCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate3d(-50%, -50%, 0)`;
            }

            animFrame = requestAnimationFrame(tick);
        };
        tick();

        // High-performance event delegation for hover target detection
        const hoverSelector = 'a, button, .project-card, .studio-link-card, .social-link-item, [role="button"], .cta-button, .filter-btn';
        
        const handleMouseOver = (e) => {
            if (e.target && e.target.closest && e.target.closest(hoverSelector)) {
                setCursorType('hover');
            } else {
                setCursorType('default');
            }
        };

        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animFrame);
        };
    }, []);

    if (isMobile) return null;

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor ${cursorType}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                willChange: 'transform',
            }}
        />
    );
}
