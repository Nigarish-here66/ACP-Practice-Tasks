import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("No message yet");

  return (
    <div>
      <p>{message}</p>
      <Child updateParent={setMessage} />
    </div>
  );
};

export default Parent;
