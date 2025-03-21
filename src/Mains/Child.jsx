import React from "react";

const Child = ({ updateParent }) => {
  return <button onClick={() => updateParent("Message from Child")}>Send to Parent</button>;
};

export default Child;
