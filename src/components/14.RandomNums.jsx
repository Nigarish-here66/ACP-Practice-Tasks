import { useState } from "react";

export default function RandomNums() {
  const [number, setNumber] = useState(0);

  const handleIncrement = (value) => {
    setNumber((prev) => prev + value);
  };

  const handleDecrement = (value) => {
    setNumber((prev) => prev - value);
  };

  const handleMultiply = (value) => {
    setNumber((prev) => prev * value);
  };

  return (
    <div className="App">
      <h1>{number}</h1>
      <div>
        <button onClick={() => handleIncrement(2)}>Increment with 2</button>
        <button onClick={() => handleDecrement(1)}>Decrement with 1</button>
        <button onClick={() => handleIncrement(5)}>Increment with 5</button>
        <button onClick={() => handleDecrement(2)}>Decrement with 2</button>
        <button onClick={() => handleMultiply(5)}>Multiply with 5</button>
      </div>
    </div>
  );
}
