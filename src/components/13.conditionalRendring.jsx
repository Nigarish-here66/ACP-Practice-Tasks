import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isMorning, setIsMorning] = useState(true);

  return (
    <div>
      <p>{isMorning ? "Good Morning" : "Good Evening"}</p>
      <button onClick={() => setIsMorning(!isMorning)}>Toggle</button>
    </div>
  );
};

export default ConditionalRendering;
