import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ContactFooter() {
    const { t } = useTranslation();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mailto fallback
        const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.location.href = `mailto:Mo3tazaky@hotmail.com?subject=${subject}&body=${body}`;
        setSent(true);
        setTimeout(() => setSent(false), 5000);
    };

    return (
        <>
            <section id="contact" className="section-wrapper section-alt">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-tag">CONNECT</div>
                        <h2 className="section-title gradient-text">{t('contact_title')}</h2>
                        <p className="section-subtitle contact-quote">{t('contact_subtitle')}</p>
                    </motion.div>

                    <div className="contact-grid centered-links">
                        {/* Social Links */}
                        <motion.div
                            className="contact-links"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ margin: '0 auto', maxWidth: '600px' }}
                        >
                            <div className="contact-links-inner glass-card">
                                <h3 className="contact-links-title">Quick Links</h3>
                                <div className="social-links-list">
                                    <a
                                        href="https://linkedin.com/in/moatazaky/"
                                        target="_blank" rel="noopener noreferrer"
                                        className="social-link-item"
                                    >
                                        <span className="social-icon">💼</span>
                                        <span>{t('contact_linkedin')}</span>
                                        <span className="social-arrow">↗</span>
                                    </a>
                                    <a
                                        href="https://github.com/Eli0zak"
                                        target="_blank" rel="noopener noreferrer"
                                        className="social-link-item"
                                    >
                                        <span className="social-icon">🐙</span>
                                        <span>{t('contact_github')}</span>
                                        <span className="social-arrow">↗</span>
                                    </a>
                                    <a
                                        href="mailto:Mo3tazaky@hotmail.com"
                                        className="social-link-item"
                                    >
                                        <span className="social-icon">📧</span>
                                        <span>{t('contact_email_link')}</span>
                                        <span className="social-arrow">↗</span>
                                    </a>
                                    <a
                                        href="https://wa.me/201554050957"
                                        target="_blank" rel="noopener noreferrer"
                                        className="social-link-item"
                                    >
                                        <span className="social-icon">💬</span>
                                        <span>{t('contact_whatsapp')}</span>
                                        <span className="social-arrow">↗</span>
                                    </a>
                                </div>

                                <div className="contact-signature">
                                    <p className="signature-quote">"{t('footer_quote').replace(/"/g, '')}"</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer">
                <div className="footer-line" />
                <div className="footer-inner container">
                    <span className="footer-copy">{t('footer_copy')}</span>
                    <span className="footer-tagline">{t('footer_quote')}</span>
                </div>
            </footer>
        </>
    );
}
