import React, { useState } from "react";

const ListManager = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (item) {
      setList([...list, item]);
      setItem("");
    }
  };

  return (
    <div>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {list.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListManager;
