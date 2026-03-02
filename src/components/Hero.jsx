import React, { useEffect, useState } from 'react';
import { useMode } from '../context/ModeContext';

import aboutImg from '../../img/about-img1.png';

const Hero = () => {
    const { mode } = useMode();
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            setOffset({ x: moveX, y: moveY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const stats = [
        { value: '3+', label: 'Years Exp' },
        { value: '7+', label: 'Projects Built' },
        { value: '5+', label: 'Certifications' },
        { value: '100+', label: 'Groups Managed' },
    ];

    const badges = [
        { icon: 'fas fa-shield-alt', text: 'Cybersecurity' },
        { icon: 'fas fa-network-wired', text: 'CCNA' },
        { icon: 'fas fa-cogs', text: 'Operations' },
        { icon: 'fas fa-bolt', text: 'Automation' },
    ];

    return (
        <section id="command-center" className="command-center">
            <div
                className="parallax-bg"
                id="parallaxBg"
                style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
            >
                <div className="grid-overlay"></div>
                <div className="quote-container">
                    <h1 className="main-quote glitch-text" data-text="Turning a big dream into a big reality">
                        Turning a big dream into a big reality
                    </h1>
                </div>
            </div>

            <div className="center-content">
                <div className="identity-card">
                    <div className="card-header">
                        <span className="status-indicator">ACTIVE</span>
                        <span className="op-id">OP-2026</span>
                    </div>

                    <div className="profile-section">
                        <div className="profile-img-container">
                            <img src={aboutImg} alt="Moataz Zaky Profile Photo" className="profile-img" />
                        </div>
                        <div className="profile-info">
                            <h2 className="name-display">MOATAZ ZAKY</h2>
                            <p className="title-display">Senior Operations @ INSTANT SOFTWARE SOLUTIONS</p>
                            <div className="role-tags">
                                <span className="role-tag">Operations Specialist</span>
                                <span className="role-tag">Full-Stack Developer</span>
                                <span className="role-tag">Cybersecurity Student</span>
                            </div>
                        </div>
                    </div>

                    <div className="badges-row">
                        {badges.map((badge, i) => (
                            <div key={i} className="badge-item">
                                <i className={badge.icon}></i>
                                <span>{badge.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="stats-grid">
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-item">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="card-actions">
                        <button className="btn-primary" onClick={scrollToContact}>
                            <i className="fas fa-terminal"></i> INITIATE CONTACT
                        </button>
                        <a
                            href="https://www.linkedin.com/in/moatazaky/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <i className="fab fa-linkedin"></i> LINKEDIN
                        </a>
                        <a
                            href="https://github.com/Eli0zak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <i className="fab fa-github"></i> GITHUB
                        </a>
                    </div>

                    <div className="scroll-indicator">
                        <i className="fas fa-chevron-down"></i>
                        <span>SCROLL TO EXPLORE</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, tooltip, visible }) => {
    const [opacity, setOpacity] = useState(visible ? 1 : 0);
    const [display, setDisplay] = useState(visible ? 'flex' : 'none');

    useEffect(() => {
        if (visible) {
            setDisplay('flex');
            setTimeout(() => setOpacity(1), 50);
        } else {
            setOpacity(0);
            setTimeout(() => setDisplay('none'), 300);
        }
    }, [visible]);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={tooltip}
            style={{ opacity, display, transition: 'opacity 0.3s ease' }}
        >
            <i className={icon}></i>
        </a>
    );
};

export default Hero;
