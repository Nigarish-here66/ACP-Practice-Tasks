// Develop a component that conditionally renders a message. For example, display
// “Good Morning” if a state variable is true, and “Good Evening” if it’s false. Toggle the
// state with a button.

import React, { useState } from 'react';

const GreetingMessage = () => {
  const [isMorning, setIsMorning] = useState(true);

  const toggleGreeting = () => {
    setIsMorning(!isMorning);
  };

  return (
    <div>
      <h1>{isMorning ? "Good Morning" : "Good Evening"}</h1>
      <button onClick={toggleGreeting}>
        Toggle Greeting
      </button>
    </div>
  );
};

export default GreetingMessage;