import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  handleIncrement = (value) => {
    this.setState((prevState) => ({
      number: prevState.number + value
    }));
  };

  handleDecrement = (value) => {
    this.setState((prevState) => ({
      number: prevState.number - value
    }));
  };

  handleMultiply = (value) => {
    this.setState((prevState) => ({
      number: prevState.number * value
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.number}</h1>
        <div>
          <button onClick={() => this.handleIncrement(2)}>Increment with 2</button>
          <button onClick={() => this.handleDecrement(1)}>Decrement with 1</button>
          <button onClick={() => this.handleIncrement(5)}>Increment with 5</button>
          <button onClick={() => this.handleDecrement(2)}>Decrement with 2</button>
          <button onClick={() => this.handleMultiply(5)}>Multiply with 5</button>
        </div>
      </div>
    );
  }
}

export default App;
