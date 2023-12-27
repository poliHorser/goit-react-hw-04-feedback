import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onLeaveFeedback('good')}>
          <p>good</p>
        </button>

        <button onClick={() => this.props.onLeaveFeedback('neutral')}>
          <p>neutral</p>
        </button>

        <button onClick={() => this.props.onLeaveFeedback('bad')}>
          <p>bad</p>
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
