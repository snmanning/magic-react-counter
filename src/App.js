import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
    
  render() {
    return (
      <div>
        <Counter title='Females:'/>
        <Counter title='Males:'/>
      </div>
            );
  }
}

export default App;
