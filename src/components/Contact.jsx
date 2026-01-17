import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-icon">📡</span>
                        ESTABLISH CONNECTION
                    </h2>
                    <p className="section-subtitle">Let's Build Something Extraordinary</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card" data-aos="zoom-in">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h3>Email</h3>
                        <a href="mailto:mo3tazaky@hotmail.com" className="contact-link">mo3tazaky@hotmail.com</a>
                    </div>

                    <div className="contact-card" data-aos="zoom-in" data-aos-delay="100">
                        <div className="contact-icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/moatazaky/" target="_blank" rel="noreferrer" className="contact-link">Connect with me</a>
                    </div>

                    <div className="contact-card" data-aos="zoom-in" data-aos-delay="200">
                        <div className="contact-icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <h3>GitHub</h3>
                        <a href="https://github.com/eli0zak" target="_blank" rel="noreferrer" className="contact-link">View my code</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
