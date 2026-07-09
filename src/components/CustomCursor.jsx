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

        window.addEventListener('mousemove', handleMouseMove);

        // Lerp (Linear Interpolation) loop for GPU-accelerated 60/120fps rendering
        let animFrame;
        const tick = () => {
            cursorX += (mouseX - cursorX) * 0.18;
            cursorY += (mouseY - cursorY) * 0.18;

            const currentCursor = cursorRef.current;
            if (currentCursor) {
                currentCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate3d(-50%, -50%, 0)`;
            }

            animFrame = requestAnimationFrame(tick);
        };
        tick();

        // Hover state triggers
        const handleHoverStart = () => setCursorType('hover');
        const handleHoverEnd = () => setCursorType('default');

        const attachListeners = () => {
            const targets = document.querySelectorAll('a, button, .project-card, .studio-link-card, .social-link-item, [role="button"], .cta-button, .filter-btn');
            targets.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        };

        attachListeners();
        
        // Listen for dynamically created elements
        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animFrame);
            observer.disconnect();
            const targets = document.querySelectorAll('a, button, .project-card, .studio-link-card, .social-link-item, [role="button"], .cta-button, .filter-btn');
            targets.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
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
