import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
   
    return (
      <div className="tap">
      <button onClick={this.handleClick}>{this.state.count}</button>
       <button onClick={this.handleClick}>{this.state.count}</button>
      <button onClick={this.handleClick}>{this.state.count}</button>
    <button onClick={this.handleClick}>{this.state.count}</button>
  </div>
   );

  }
}

export default App;