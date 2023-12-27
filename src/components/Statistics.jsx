// Statistics.js
import React, { Component } from 'react';

class Statistics extends Component {
  Positive = () => {
    const all = this.props.good + this.props.neutral + this.props.bad;
    const good = this.props.good + this.props.neutral;
    const positive = (good * 100) / all;
    return positive.toFixed(2);
  };
  
  render() {
    return (
      <div>
        <ul>
          <li>
            <p>good {this.props.good}</p>
          </li>
          <li>
            <p>neutral {this.props.neutral}</p>
          </li>
          <li>
            <p>bad {this.props.bad}</p>
          </li>
          <li>
            <p>total {this.props.good + this.props.neutral + this.props.bad}</p>
          </li>
          <li>
            <p>positive feedback {this.Positive()}%</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
