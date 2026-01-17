import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [showFab, setShowFab] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowFab(true);
            } else {
                setShowFab(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <p>&copy; 2026 Moataz Zaky - The Integrated Operator. All rights reserved.</p>
                        <p className="footer-quote">"Turning a big dream into a big reality"</p>
                    </div>
                </div>
            </footer>

            <a
                href="mailto:mo3tazaky@hotmail.com"
                className="fab-button"
                data-tooltip="Contact Me"
                style={{
                    transform: showFab ? 'scale(1)' : 'scale(0)',
                    opacity: showFab ? 1 : 0
                }}
            >
                <i className="fas fa-envelope"></i>
            </a>
        </>
    );
};

export default Footer;
