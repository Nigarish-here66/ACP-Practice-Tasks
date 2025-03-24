// Create a React functional component that displays a number and a button. Each
// time the button is clicked, the number increments by 1 using the useState hook.

import React from 'react';
import { useState } from 'react';

const Functional = () => {
    const [number, setNumber] = useState(0);
    return (    
        <div>
            <h1>{number}</h1>
                <button onClick={() => setNumber(number + 1)}>Increment</button>
            </div>
        );
    };