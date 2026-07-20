import React, { useRef, useState, useEffect } from 'react';

export default function TiltWrapper({ children, className = '', style = {} }) {
    const cardRef = useRef(null);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Disable 3D tilt on touch devices for usability and performance
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        setIsMobile(isTouch);
    }, []);

    const handleMouseMove = (e) => {
        if (isMobile) return;
        const card = cardRef.current;
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        // Calculate mouse coordinates relative to card center
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;

        // Calculate rotation (max 7-8 degrees for professional subtlety)
        const rX = -(mouseY / (height / 2)) * 7;
        const rY = (mouseX / (width / 2)) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'none';
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.4s ease-out';
    };

    return (
        <div
            ref={cardRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
            {children}
        </div>
    );
}
