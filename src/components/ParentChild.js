// Create two components a parent and a child. Have the parent pass a function as a
// prop to the child. When the child’s button is clicked, it calls the function to update
// the parent’s state.

import React, { useState } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={incrementCount} />
    </div>
  );
};

const ChildComponent = ({ onIncrement }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
};

export default ParentComponent;