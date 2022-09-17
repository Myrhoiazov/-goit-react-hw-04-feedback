import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Container from './Container/Container.jsx';
import { useState } from 'react';

const options = [
  { name: 'good', label: 'Good' },
  { name: 'neutral', label: 'Neutral' },
  { name: 'bad', label: 'Bad' },
];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChangeFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <Container>
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleChangeFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </Container>
  );
};
