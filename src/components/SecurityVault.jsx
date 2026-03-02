import React, { useState, useEffect } from 'react';
import { useMode } from '../context/ModeContext';

const SecurityVault = () => {
    const { mode } = useMode();

    if (mode === 'business') return null;

    const certifications = [
        {
            icon: '🛡️',
            title: 'CCNA (200-301)',
            issuer: 'Cisco / LinkedIn Learning',
            date: 'Dec 2023',
            link: 'https://www.linkedin.com/learning/certificates/bb947d140b373939751911885bae8665a4a41ac3da9232da9c16c60181c7986a',
        },
        {
            icon: '🔒',
            title: 'Career Essentials in Cybersecurity',
            issuer: 'Microsoft & LinkedIn',
            date: '2024',
            link: 'https://www.linkedin.com/learning/certificates/4d17b0b22171596bd32b1aed1112b02c3ba80627da2c7771d937ca11a8bbeefd',
        },
        {
            icon: '🎓',
            title: 'Cyber Security Diploma',
            issuer: 'Optical Soft',
            date: 'Dec 2024',
            link: null,
        },
        {
            icon: '💻',
            title: 'Cybersecurity Foundations',
            issuer: 'LinkedIn Learning',
            date: '2024',
            link: null,
        },
        {
            icon: '⚙️',
            title: 'CompTIA A+ Core 1 (220-1101)',
            issuer: 'CompTIA',
            date: '2024',
            link: null,
        },
    ];

    const skills = [
        { name: 'Network Security', level: 85 },
        { name: 'Python Scripting', level: 75 },
        { name: 'OSINT & Recon', level: 80 },
        { name: 'Linux Administration', level: 70 },
        { name: 'Vulnerability Assessment', level: 72 },
        { name: 'Incident Response', level: 65 },
    ];

    const softSkills = [
        'Problem Solving', 'Critical Thinking', 'Team Leadership',
        'Communication', 'Adaptability', 'Attention to Detail'
    ];

    return (
        <section id="security" className="security-vault">
            <div className="section-header">
                <h2>🔐 SECURITY VAULT</h2>
                <p>Certifications, Skills & Cybersecurity Arsenal</p>
            </div>

            <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="cert-card">
                        <div className="cert-icon">{cert.icon}</div>
                        <div className="cert-info">
                            <h3>{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                            {cert.link && (
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                    View Certificate →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="skills-section">
                <h3>🛠️ Technical Skills</h3>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-header">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-fill"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="soft-skills-section">
                <h3>🤝 Soft Skills</h3>
                <div className="soft-skills-grid">
                    {softSkills.map((skill, index) => (
                        <span key={index} className="soft-skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecurityVault;
