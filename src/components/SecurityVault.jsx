import React, { useState, useEffect } from 'react';
import { useMode } from '../context/ModeContext';
import ccnaImg from '../assets/img/CCNA.png';
import essentialsImg from '../assets/img/essentials in cyber.png';
import comptiaImg from '../assets/img/CopTIA A+.png';
import cyberFoundationsImg from '../assets/img/cyber Security foundations.png';
import cyberDipImg from '../assets/img/cyber sec cert.jpg';

const SecurityVault = () => {
    const { mode } = useMode();

    if (mode === 'business') return null;

    const certifications = [
        {
            img: ccnaImg,
            title: 'CCNA (200-301)',
            issuer: 'Cisco / LinkedIn Learning',
            date: 'Dec 2023',
            link: 'https://www.linkedin.com/learning/certificates/bb947d140b373939751911885bae8665a4a41ac3da9232da9c16c60181c7986a',
        },
        {
            img: essentialsImg,
            title: 'Career Essentials in Cybersecurity',
            issuer: 'Microsoft & LinkedIn',
            date: '2024',
            link: 'https://www.linkedin.com/learning/certificates/4d17b0b22171596bd32b1aed1112b02c3ba80627da2c7771d937ca11a8bbeefd',
        },
        {
            img: cyberDipImg,
            title: 'Cyber Security Diploma',
            issuer: 'Optical Soft',
            date: 'Dec 2024',
            link: null,
        },
        {
            img: cyberFoundationsImg,
            title: 'Cybersecurity Foundations',
            issuer: 'LinkedIn Learning',
            date: '2024',
            link: null,
        },
        {
            img: comptiaImg,
            title: 'CompTIA A+ Core 1',
            issuer: 'CompTIA',
            date: '2024',
            link: null,
        },
    ];

    const techSkills = [
        { name: 'Python', level: 75 },
        { name: 'JavaScript', level: 85 },
        { name: 'Network Security', level: 70 },
        { name: 'Penetration Testing', level: 65 },
        { name: 'Chrome Extensions', level: 80 },
        { name: 'Zapier / Automation', level: 90 },
        { name: 'React / TypeScript', level: 72 },
        { name: 'Node.js / Express', level: 70 },
    ];

    const softSkills = [
        'Negotiation', 'Problem Solving', 'Creative Thinking', 'Communication',
        'Teamwork', 'Adaptability', 'Time Management', 'Critical Thinking',
        'Client Relations', 'Leadership', 'Strategic Planning', 'Account Management',
    ];

    return (
        <section id="security-vault" className="security-vault tech-mode-content">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-icon">🔐</span>
                        SECURITY VAULT
                    </h2>
                    <p className="section-subtitle">Access Granted: Cybersecurity Arsenal & Skills</p>
                </div>

                <div className="vault-grid">
                    <VaultCard title="CERTIFICATIONS" icon="fas fa-certificate" id="cert" delay={0}>
                        <div className="cert-grid">
                            {certifications.map((cert, i) => (
                                <CertItem key={i} {...cert} />
                            ))}
                        </div>
                    </VaultCard>

                    <VaultCard title="TECHNICAL SKILLS" icon="fas fa-code" id="tech-skills" delay={200}>
                        <div className="skills-list">
                            {techSkills.map((skill, i) => (
                                <SkillBar key={i} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </VaultCard>

                    <VaultCard title="SOFT SKILLS" icon="fas fa-brain" id="soft-skills" delay={400}>
                        <div className="soft-skills-grid">
                            {softSkills.map(skill => (
                                <span key={skill} className="skill-badge">{skill}</span>
                            ))}
                        </div>
                    </VaultCard>

                    <VaultCard title="LIVE CODE" icon="fas fa-terminal" id="code" delay={600}>
                        <LivePythonCode />
                    </VaultCard>
                </div>
            </div>
        </section>
    );
};

const VaultCard = ({ title, icon, children, id, delay }) => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    return (
        <div className={`vault-card ${isUnlocked ? 'unlocked' : ''}`} id={id} style={{ animationDelay: `${delay}ms` }}>
            {!isUnlocked && (
                <div className="lock-overlay" onClick={() => setIsUnlocked(true)}>
                    <i className="fas fa-lock"></i>
                    <span>CLICK TO UNLOCK</span>
                </div>
            )}
            <div className="card-icon"><i className={icon}></i></div>
            <h3 className="card-title">{title}</h3>
            {children}
        </div>
    );
};

const CertItem = ({ img, link, title, issuer, date }) => (
    <div className="cert-item">
        {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={title} className="cert-img" />
                <div className="cert-info">
                    <span className="cert-title">{title}</span>
                    <span className="cert-issuer">{issuer}</span>
                    <span className="cert-date">{date}</span>
                    <span className="cert-link">View Certificate ↗</span>
                </div>
            </a>
        ) : (
            <div>
                <img src={img} alt={title} className="cert-img" />
                <div className="cert-info">
                    <span className="cert-title">{title}</span>
                    <span className="cert-issuer">{issuer}</span>
                    <span className="cert-date">{date}</span>
                </div>
            </div>
        )}
    </div>
);

const SkillBar = ({ name, level }) => (
    <div className="skill-bar">
        <div className="skill-header">
            <span className="skill-name">{name}</span>
            <span className="skill-level">{level}%</span>
        </div>
        <div className="skill-track">
            <div className="skill-fill" style={{ width: `${level}%` }}></div>
        </div>
    </div>
);

const LivePythonCode = () => {
    const [text, setText] = useState('');
    const codeSnippets = [
        'import socket\nimport nmap',
        'def scan_network(target):\n    scanner = nmap.PortScanner()',
        'class SecurityAnalyzer:\n    def __init__(self):\n        self.tools = []',
        'def penetration_test():\n    print("Ethical Hacking...")'
    ];
    useEffect(() => {
        let currentSnippetIndex = 0;
        let charIndex = 0;
        let typingInterval;
        let pauseTimeout;
        const type = () => {
            const currentSnippet = codeSnippets[currentSnippetIndex];
            if (charIndex < currentSnippet.length) {
                setText(currentSnippet.slice(0, charIndex + 1));
                charIndex++;
                typingInterval = setTimeout(type, 50);
            } else {
                pauseTimeout = setTimeout(() => {
                    currentSnippetIndex = (currentSnippetIndex + 1) % codeSnippets.length;
                    charIndex = 0;
                    setText('');
                    type();
                }, 3000);
            }
        };
        type();
        return () => {
            clearTimeout(typingInterval);
            clearTimeout(pauseTimeout);
        };
    }, []);
    return (
        <pre className="live-code"><code>{text}</code></pre>
    );
};

export default SecurityVault;
