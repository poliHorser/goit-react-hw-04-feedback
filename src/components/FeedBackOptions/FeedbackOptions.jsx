// FeedbackOptions.jsx
import React from 'react';
import './FeedBackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className='btn_ul'>
      <li>
        {options.map((option) => (
          <button key={option} type="button" name={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </li>
    </ul>
  );
};

export default FeedbackOptions;
