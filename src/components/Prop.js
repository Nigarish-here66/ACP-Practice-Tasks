// Build a React component that accepts a "name" prop and displays a simple greeting
// (like  "Hello, [name]!").

import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default Greeting;