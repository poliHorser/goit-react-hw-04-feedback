import { useState } from "react"
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedBackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  
  const [feedbacks, SetFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  const handleLeaveFeedback = (type) => {
    SetFeedbacks((prevFeedbacks) => ({ ...prevFeedbacks, [type]: prevFeedbacks[type] + 1 }))
  }

  
  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;
  const objKey = Object.keys(feedbacks);

  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  
  return (
  <div className='all'>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={objKey} onLeaveFeedback={handleLeaveFeedback} />
        </Section>
        <Section  title="Statistics">
          {totalFeedback > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback} positivePercentage={positiveFeedback} />
          ) : (
            <Notification  message="There is no feedback" />
          )}
        </Section>
      </div>
  )
}
export  {App}