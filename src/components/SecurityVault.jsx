
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

    return (
        <section id="security-vault" className="security-vault tech-mode-content">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-icon">🔐</span>
                        SECURITY VAULT
                    </h2>
                    <p className="section-subtitle">Access Granted: Cybersecurity Arsenal</p>
                </div>

                <div className="vault-grid">
                    <VaultCard title="CERTIFICATIONS" icon="fas fa-certificate" id="cert">
                        <div className="cert-grid">
                            <CertItem
                                img={ccnaImg}
                                title="CCNA (200-301)"
                                link="https://www.linkedin.com/learning/certificates/bb947d140b373939751911885bae8665a4a41ac3da9232da9c16c60181c7986a"
                            />
                            <CertItem
                                img={essentialsImg}
                                title="Career Essentials in Cybersecurity"
                                link="https://www.linkedin.com/learning/certificates/4d17b0b22171596bd32b1aed1112b02c3ba80627da2c7771d937ca11a8bbeefd"
                            />
                            <CertItem
                                img={comptiaImg}
                                title="CompTIA A+ Core 1"
                                link="https://www.linkedin.com/learning/certificates/8dbd55d6223a18c0650a92bba76dab2e720ef89aa4dbb41eb12991dff7eb5b42"
                            />
                            <CertItem
                                img={cyberFoundationsImg}
                                title="Cybersecurity Foundations"
                                link="https://www.linkedin.com/learning/certificates/64320bd68a5eb1123dc28986de9fdfb7a43ac6d76ffd99c7ba05f53caf5baa01"
                            />
                            <CertItem
                                img={cyberDipImg}
                                title="Cybersecurity Diploma"
                            />
                        </div>
                    </VaultCard>

                    <VaultCard title="TECHNICAL SKILLS" icon="fas fa-code" id="tech" delay="100">
                        <div className="skills-matrix">
                            <SkillBar name="Network Security" level={85} />
                            <SkillBar name="Penetration Testing" level={75} />
                            <SkillBar name="Python" level={80}>
                                <LivePythonCode />
                            </SkillBar>
                            <SkillBar name="Linux Administration" level={90} />
                            <SkillBar name="Bash Scripting" level={85} />
                            <SkillBar name="HTML/CSS" level={90} />
                        </div>
                    </VaultCard>

                    <VaultCard title="BUSINESS SKILLS" icon="fas fa-briefcase" id="business" delay="200">
                        <div className="skills-tags">
                            {[
                                "Negotiation", "Problem Solving", "Creative Thinking", "Communication",
                                "Teamwork", "Adaptability", "Time Management", "Critical Thinking",
                                "Client Relations", "Leadership", "Strategic Planning", "Account Management"
                            ].map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                        </div>
                    </VaultCard>
                </div>
            </div>
        </section>
    );
};

const VaultCard = ({ title, icon, children, id, delay }) => {
    const [isUnlocked, setIsUnlocked] = useState(false);

    return (
        <div className={`vault-card ${isUnlocked ? 'unlocked' : ''}`} data-aos="fade-up" data-aos-delay={delay}>
            <div className="vault-lock" onClick={() => setIsUnlocked(true)}>
                <i className="fas fa-lock"></i>
                <span className="lock-text">CLICK TO UNLOCK</span>
            </div>
            <div className="vault-content">
                <h3 className="vault-title">
                    <i className={icon}></i>
                    {title}
                </h3>
                {children}
            </div>
        </div>
    );
};

const CertItem = ({ img, link, title }) => (
    <div className="cert-item-img">
        {link ? (
            <a href={link} target="_blank" rel="noreferrer" className="cert-link">
                <img src={img} alt={title} className="cert-img" />
                <div className="cert-overlay">
                    <i className="fas fa-external-link-alt"></i>
                    <span>View Certificate</span>
                </div>
            </a>
        ) : (
            <div className="cert-no-link">
                <img src={img} alt={title} className="cert-img" />
                <div className="cert-label">
                    <span>{title}</span>
                </div>
            </div>
        )}
    </div>
);

const SkillBar = ({ name, level, children }) => (
    <div className="skill-item">
        <span className="skill-name">{name}</span>
        <div className="skill-level">
            <div className="skill-bar" style={{ width: `${level}%` }}></div>
        </div>
        {children}
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
        <div className="live-code">
            <code id="pythonCode">{text}</code>
        </div>
    );
};

export default SecurityVault;
