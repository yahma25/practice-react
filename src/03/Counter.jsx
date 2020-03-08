import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.increaseCount2 = this.increaseCount2.bind(this);
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  increaseCount2() {
    this.setState(prevState => {
      return { count: ++prevState.count };
    });
  }

  render() {
    return (
      <div>
        <span>카운트: {this.state.count}</span>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
