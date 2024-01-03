// App.js
import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedBackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (type) => {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  };
 

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;


    const all = this.props.good + this.props.neutral + this.props.bad;
    const normal = this.props.good + this.props.neutral;
    const positive = (normal * 100) / all;

    return (
      <div className='all'>
        <Section title="Please leave your feedback">
          <FeedbackOptions onLeaveFeedback={this.handleLeaveFeedback} />
        </Section>

        <Section  title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} positivePercentage={positive}/>
          ) : (
            <Notification  message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export  {App};
