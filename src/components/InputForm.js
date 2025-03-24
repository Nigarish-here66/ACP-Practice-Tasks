// <!-- Create a simple React form with an input field. Use useState to update and display
// the current input value in real time as the user types.  -->

import React, { useState } from 'react';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Real-time Input Form</h2>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <p>Current input: {inputValue}</p>
      </form>
    </div>
  );
};

export default InputForm;