// Create a component that renders an array of items (e.g., a list of fruits) using the
// map() function. Make sure to include a unique key for each element.

import React from 'react';

const FruitList = () => {
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Strawberry' }
  ];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;