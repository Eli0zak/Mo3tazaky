import React, { createContext, useState, useContext, useEffect } from 'react';

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
    }, [mode]);

    return (
        <ModeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);
