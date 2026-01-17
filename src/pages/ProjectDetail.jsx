import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId];

    // Scroll to top is handled by ScrollToTop component in App.jsx, 
    // but we can enforce it here too just in case.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1>Project Not Found</h1>
                    <Link to="/" className="back-button">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="project-page">
            <div className="container">
                <Link to="/#growth-lab" className="back-button">
                    <i className="fas fa-arrow-left"></i> Back to Portfolio
                </Link>

                <div className="project-header">
                    <h1
                        className="project-title"
                        style={{
                            background: project.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        {project.title}
                    </h1>
                    <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <div className="project-content">
                    <div className="project-section">
                        <h2><i className="fas fa-info-circle"></i> Overview</h2>
                        <p>
                            {project.overview}
                        </p>
                    </div>

                    <div className="project-image-placeholder">
                        <i className={`${project.icon} fa-2x`}></i>
                        <span style={{ marginLeft: '10px' }}>{project.screenshotLabel}</span>
                    </div>

                    <div className="project-section">
                        <h2><i className="fas fa-star"></i> Key Features</h2>
                        <ul>
                            {project.keyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="project-section">
                        <h2><i className="fas fa-code"></i> Technical Stack</h2>
                        <div className="tech-stack">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {project.useCases && (
                        <div className="project-section">
                            <h2><i className="fas fa-tasks"></i> Use Cases</h2>
                            <ul>
                                {project.useCases.map((useCase, index) => (
                                    <li key={index}>{useCase}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.links && (
                        <div className="project-section">
                            <h2><i className="fas fa-link"></i> Project Links</h2>
                            <div className="project-links-container">
                                {project.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link-btn"
                                    >
                                        <i className={link.icon}></i>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
