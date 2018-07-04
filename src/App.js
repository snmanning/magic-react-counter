import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count:0
      };
    }
  render() {
    return (
      <div>
        <button onClick={() => alert('yayyyy')}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={() => alert('noooooo')}>-</button>
      </div>
    );
  }
}

export default App;
