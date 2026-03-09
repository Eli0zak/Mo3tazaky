import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

export default function LanguageToggle() {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || 'en');

    const toggle = () => {
        const next = lang === 'en' ? 'ar' : 'en';
        setLang(next);
        i18n.changeLanguage(next);
        document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = next;
    };

    return (
        <motion.button
            onClick={toggle}
            className="lang-toggle"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Switch Language"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={lang}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="lang-label"
                >
                    {lang === 'en' ? '🌐 عربي' : '🌐 EN'}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    );
}
