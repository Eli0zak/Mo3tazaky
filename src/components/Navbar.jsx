import React, { useState, useEffect } from 'react';
import { useMode } from '../context/ModeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { mode, toggleMode } = useMode();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-brand" onClick={() => scrollTo('command-center')}>
                    <span className="brand-text">MZ</span>
                    <span className="brand-dot">.</span>
                </div>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <button onClick={() => scrollTo('command-center')} className="nav-link">Home</button>
                    <button onClick={() => scrollTo('operations-roadmap')} className="nav-link">Experience</button>
                    <button onClick={() => scrollTo('security')} className="nav-link">Skills</button>
                    <button onClick={() => scrollTo('growth-lab')} className="nav-link">Projects</button>
                    <button onClick={() => scrollTo('contact')} className="nav-link">Contact</button>
                </div>

                <div className="nav-actions">
                    <div
                        className="mode-pill"
                        onClick={toggleMode}
                        title={`Switch to ${mode === 'business' ? 'Tech' : 'Business'} mode`}
                    >
                        <span className={mode === 'business' ? 'pill-active' : ''}>💼</span>
                        <span className="pill-divider">|</span>
                        <span className={mode === 'tech' ? 'pill-active' : ''}>⚡</span>
                    </div>
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
