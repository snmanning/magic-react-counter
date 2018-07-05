import React, { Component } from 'react'

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
            <div>
                {this.props.title ? <h1>{this.props.title}</h1> : null}
                <button onClick={this.increment.bind(this)}>+</button>
                <p>{this.state.count}</p>
                <button onClick={this.decrement.bind(this)}>-</button>
                <input type='number' 
                          min='1' 
                          max='100' 
                          step='1' 
                          placeholder='Amount to count...' 
                          value={this.state.amount}
                          onChange={this.changeAmount.bind(this)}/>
            </div>
                )
    }
}

export default Counter