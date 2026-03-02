import React, { createContext, useState, useContext, useEffect } from 'react';
import AOS from 'aos';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState('business'); // 'business' or 'tech'

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'business' ? 'tech' : 'business'));
    };

    useEffect(() => {
        // Sync with body class for CSS compatibility
        if (mode === 'tech') {
            document.body.classList.add('tech-mode');
        } else {
            document.body.classList.remove('tech-mode');
        }
        // Re-initialize AOS to pick up newly visible elements after mode switch
        setTimeout(() => {
            AOS.refresh();
        }, 150);
    }, [mode]);

    return (
        <ModeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);
