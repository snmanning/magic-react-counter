import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          amount: 1
        };
      }
    
    increment() {
      this.setState({
        count: this.state.count + this.state.amount
      });
    }
  
    decrement() {
      this.setState({
        count: this.state.count - this.state.amount
      })
    }  

    changeAmount(evt) {
      this.setState({
        amount: parseInt(evt.target.value, 10)
      })
    }

    render () {
        return (
            <div className='Counter-container'>
                {this.props.title ? <h1 className="Counter-title">{this.props.title}</h1> : null}
                <p className="Counter-display">{this.state.count}</p>
                <input type='number' 
                          min='1' 
                          max='100' 
                          step='1' 
                          placeholder='Amount to count...' 
                          value={this.state.amount}
                          onChange={this.changeAmount.bind(this)}
                          className="Counter-input"/>
                <section>
                  <button onClick={this.increment.bind(this)} className="Counter-button">+</button>
                  <button onClick={this.decrement.bind(this)} className="Counter-button">-</button>
                </section>
            </div>
                )
    }
}

export default Counter