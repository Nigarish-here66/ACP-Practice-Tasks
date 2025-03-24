// Develop a React component with a button that toggles the display of a text message
// (show/hide) using useState.

import React, { useState } from 'react';
import './App.css';

const ToggleVisibility = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <p>Text message</p>}
        </div>
    );
}