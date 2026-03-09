import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './components/LanguageToggle';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import TimelineSection from './components/TimelineSection';
import SkillsSection from './components/SkillsSection';
import ContactFooter from './components/ContactFooter';
import ProjectDetailPage from './pages/ProjectDetailPage';
import DataStream from './components/DataStream';
import MorphingTitle from './components/MorphingTitle';
import ScrollToTop from './components/ScrollToTop';



// Fixed top nav
function Navbar() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const isAr = i18n.language === 'ar';

    const links = [
        { href: '#hero', label: t('nav_hero') },
        { href: '#solutions', label: t('nav_solutions') },
        { href: '#timeline', label: t('nav_timeline') },
        { href: '#skills', label: t('nav_skills') },
        { href: '#contact', label: t('nav_contact') },
    ];

    const handleNavClick = (href) => {
        // If we're not on the home page, go there first then scroll
        navigate('/');
        setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <motion.nav
            className="site-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="nav-inner">
                <button onClick={() => handleNavClick('#hero')} className="nav-logo" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <span className="nav-logo-dot" />
                    MZ
                </button>
                <div className="nav-links">
                    {links.map((l) => (
                        <button
                            key={l.href}
                            onClick={() => handleNavClick(l.href)}
                            className="nav-link"
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
                <LanguageToggle />
            </div>
        </motion.nav>
    );
}

// Home page — all sections
function HomePage() {
    return (
        <main>
            {/* Unified: data stream trunk + section icon navigator */}
            <DataStream />
            {/* Large background watermark text */}
            <MorphingTitle />
            <HeroSection />
            <ProjectsSection />
            <TimelineSection />
            <SkillsSection />
            <ContactFooter />
        </main>
    );
}




function AppContent() {
    const { i18n } = useTranslation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={i18n.language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="app-root"
            >
                <ScrollToTop />
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
