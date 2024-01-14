import React from 'react';

import './Statistics.css'
const Statistics = ({good, neutral, bad,totalFeedback, positivePercentage }) => {
  return (
      <div>
        <ul className='sts_ul'>
          <li>
            <p>good {good}</p>
          </li>
          <li>
            <p>neutral {neutral}</p>
          </li>
          <li>
            <p>bad {bad}</p>
          </li>
          <li>
            <p>total {totalFeedback}</p>
          </li>
          <li>
            <p>positive feedback {positivePercentage}%</p>
          </li>
        </ul>
      </div>
    );
  
}
export default Statistics;