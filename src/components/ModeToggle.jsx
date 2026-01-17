import React from 'react';
import { useMode } from '../context/ModeContext';

const ModeToggle = () => {
    const { mode, toggleMode } = useMode();

    return (
        <div className="mode-toggle" id="modeToggle">
            <div className="toggle-container">
                <span
                    className={`mode-label ${mode === 'business' ? 'active' : ''}`}
                    onClick={() => mode !== 'business' && toggleMode()}
                >
                    BUSINESS
                </span>
                <div className="toggle-switch">
                    <input
                        type="checkbox"
                        id="modeSwitch"
                        checked={mode === 'tech'}
                        onChange={toggleMode}
                    />
                    <label htmlFor="modeSwitch" className="switch-label">
                        <span className="switch-slider"></span>
                    </label>
                </div>
                <span
                    className={`mode-label ${mode === 'tech' ? 'active' : ''}`}
                    onClick={() => mode !== 'tech' && toggleMode()}
                >
                    TECH
                </span>
            </div>
        </div>
    );
};

export default ModeToggle;
