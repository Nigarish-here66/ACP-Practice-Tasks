import React from "react";
import Counter from "./components/1.Counter";
import Greeting from "./components/2.Props";
import Toggle from "./components/3.Toggle";
import FormInput from "./components/4.Form";

const App = () => {
  return (
    <div>
      <h3>Task 01</h3>
          <Counter />

      <h3>Task 02</h3>
          <Greeting name="Nigarish"/>

      <h3>Task 03</h3>
          <Toggle />

      <h3>Task 04</h3>
          <FormInput />
          
      <h3>Task 05</h3>
      <h3>Task 06</h3>
      <h3>Task 07</h3>
      <h3>Task 08</h3>
      <h3>Task 09</h3>
      <h3>Task 10</h3>

    </div>
  );
};

export default App;
