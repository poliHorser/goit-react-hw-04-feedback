import React, { Component } from 'react';

import './FeedBackOptions.css'

class FeedbackOptions extends Component {
  render() {
    
    return (
      <div>
        <ul className='btn_ul'>
          <li className='btn_li'>
            <button className='one' onClick={() => this.props.onLeaveFeedback('good')}>
              <p className='btn_p'>good</p>
            </button>
          </li>
      
          <li className='btn_li two'>
            <button className='two' onClick={() => this.props.onLeaveFeedback('neutral')}>
              <p className='btn_p'>neutral</p>
            </button>
          </li>
          <li className='btn_li three'>
            <button className='three' onClick={() => this.props.onLeaveFeedback('bad')}>
              <p className='btn_p'>bad</p>
            </button>
          </li>
          </ul>
      </div>
    );
  }
}
export default FeedbackOptions;