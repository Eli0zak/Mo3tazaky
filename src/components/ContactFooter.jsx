import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Official SVG Logos for brand authenticity
const LinkedInIcon = () => (
    <svg className="brand-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const GitHubIcon = () => (
    <svg className="brand-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

const WhatsAppIcon = () => (
    <svg className="brand-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.242-4.141c1.658.984 3.284 1.498 4.887 1.499 5.373.001 9.742-4.363 9.745-9.736.002-2.584-1.002-5.016-2.829-6.842S13.914 1.919 11.332 1.918c-5.378 0-9.747 4.364-9.75 9.739-.001 1.764.484 3.42 1.402 4.908l-.999 3.652 3.73-.978zm11.554-6.444c-.24-.12-1.42-.7-1.639-.78-.22-.08-.38-.12-.54.12-.16.24-.61.78-.75.94-.14.16-.28.18-.52.06-2.083-1.026-3.411-2.22-4.131-3.456-.19-.325-.02-.5.15-.67.15-.15.34-.38.5-.57.17-.19.22-.32.33-.54.11-.22.06-.41-.03-.57-.09-.16-.75-1.8-.99-2.38-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.07 4.48.71.3 1.26.49 1.69.63.72.23 1.37.2 1.89.12.58-.08 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
    </svg>
);

const EmailIcon = () => (
    <svg className="brand-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
);

export default function ContactFooter() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sentStatus, setSentStatus] = useState(''); // '', 'sending', 'success', 'failed'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSentStatus('sending');
        setErrorMessage('');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mbm9tfr';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_cmby58g';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'q0usovuCRCOWw_51f';

        const templateParams = {
            from_name: form.name,
            name: form.name,
            from_email: form.email,
            email: form.email,
            reply_to: form.email,
            reply_email: form.email,
            message: form.message,
            to_name: 'Moataz Zaky',
        };

        emailjs.init(publicKey);

        emailjs.send(serviceId, templateId, templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSentStatus('success');
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => setSentStatus(''), 5000);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setSentStatus('failed');
                setErrorMessage(err?.text || err?.message || 'Connection Error');
                setTimeout(() => {
                    setSentStatus('');
                    setErrorMessage('');
                }, 8000);
            });
    };

    return (
        <>
            <section id="contact" className="section-wrapper section-alt studio-contact-section">
                {/* Visual blur blobs for abstract studio atmosphere */}
                <div className="studio-blur-blob blob-1"></div>
                <div className="studio-blur-blob blob-2"></div>

                <div className="container">
                    <div className="studio-contact-card glass-card">
                        
                        {/* Left Side: Brand presentation and Quick Links */}
                        <div className="studio-contact-info">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="studio-tag">{isAr ? 'تواصل معي' : 'GET IN TOUCH'}</div>
                                <h2 className="studio-title">{isAr ? 'دعنا نبدأ في مناقشة مشروعك' : "Let's create something extraordinary"}</h2>
                                <p className="studio-subtitle">{t('contact_subtitle')}</p>
                            </motion.div>

                            <div className="studio-links-grid">
                                <a 
                                    href="https://linkedin.com/in/moatazaky/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="studio-link-card brand-linkedin"
                                >
                                    <div className="brand-icon-wrapper">
                                        <LinkedInIcon />
                                    </div>
                                    <div className="brand-details">
                                        <span className="brand-label">LinkedIn</span>
                                        <span className="brand-username">@moatazaky</span>
                                    </div>
                                    <span className="brand-arrow">↗</span>
                                </a>

                                <a 
                                    href="https://github.com/Eli0zak" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="studio-link-card brand-github"
                                >
                                    <div className="brand-icon-wrapper">
                                        <GitHubIcon />
                                    </div>
                                    <div className="brand-details">
                                        <span className="brand-label">GitHub</span>
                                        <span className="brand-username">@Eli0zak</span>
                                    </div>
                                    <span className="brand-arrow">↗</span>
                                </a>

                                <a 
                                    href="https://wa.me/201554050957" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="studio-link-card brand-whatsapp"
                                >
                                    <div className="brand-icon-wrapper">
                                        <WhatsAppIcon />
                                    </div>
                                    <div className="brand-details">
                                        <span className="brand-label">WhatsApp</span>
                                        <span className="brand-username">+20 1554050957</span>
                                    </div>
                                    <span className="brand-arrow">↗</span>
                                </a>

                                <a 
                                    href="mailto:Mo3tazaky@hotmail.com" 
                                    className="studio-link-card brand-email"
                                >
                                    <div className="brand-icon-wrapper">
                                        <EmailIcon />
                                    </div>
                                    <div className="brand-details">
                                        <span className="brand-label">{isAr ? 'البريد الإلكتروني' : 'Direct Email'}</span>
                                        <span className="brand-username">Mo3tazaky@hotmail.com</span>
                                    </div>
                                    <span className="brand-arrow">↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: High-End Contact Form */}
                        <div className="studio-contact-form-wrap">
                            <form className="studio-form" onSubmit={handleSubmit}>
                                <div className="studio-form-field">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        className="studio-input"
                                        placeholder=" "
                                        id="form-name"
                                    />
                                    <label htmlFor="form-name" className="studio-label">{t('contact_name')}</label>
                                    <span className="input-bar"></span>
                                </div>

                                <div className="studio-form-field">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        className="studio-input"
                                        placeholder=" "
                                        id="form-email"
                                    />
                                    <label htmlFor="form-email" className="studio-label">{t('contact_email')}</label>
                                    <span className="input-bar"></span>
                                </div>

                                <div className="studio-form-field">
                                    <textarea
                                        name="message"
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        className="studio-input studio-textarea"
                                        placeholder=" "
                                        id="form-message"
                                    />
                                    <label htmlFor="form-message" className="studio-label">{t('contact_message')}</label>
                                    <span className="input-bar"></span>
                                </div>

                                <button 
                                    type="submit" 
                                    className="studio-submit-btn" 
                                    disabled={sentStatus === 'sending'}
                                >
                                    <span>
                                        {sentStatus === 'sending' 
                                            ? (isAr ? 'جاري الإرسال...' : 'SENDING MESSAGE...') 
                                            : (isAr ? 'إرسال الرسالة' : 'SEND MESSAGE')}
                                    </span>
                                    <span className="studio-submit-glow"></span>
                                </button>

                                {sentStatus === 'sending' && (
                                    <div className="studio-alert alert-loading">
                                        <span className="alert-spinner">⏳</span>
                                        <span>{isAr ? 'جاري نقل رسالتك بأمان...' : 'Transmitting message securely...'}</span>
                                    </div>
                                )}
                                {sentStatus === 'success' && (
                                    <div className="studio-alert alert-success">
                                        <span>✓</span>
                                        <span>{isAr ? 'تم استلام رسالتك! سأتواصل معك قريباً.' : 'Message received! I will reply shortly.'}</span>
                                    </div>
                                )}
                                {sentStatus === 'failed' && (
                                    <div className="studio-alert alert-error">
                                        <span>✕</span>
                                        <span>{isAr ? `فشل الإرسال: ${errorMessage}` : `Failed: ${errorMessage}`}</span>
                                    </div>
                                )}
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer" style={{ background: 'transparent', position: 'relative', zIndex: 2 }}>
                <div className="footer-line" />
                <div className="footer-inner container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <span className="footer-copy" style={{ fontSize: '0.82rem', opacity: 0.6 }}>{t('footer_copy')}</span>
                    <span className="footer-tagline" style={{ fontSize: '0.82rem', opacity: 0.6 }}>{t('footer_quote')}</span>
                </div>
            </footer>
        </>
    );
}
