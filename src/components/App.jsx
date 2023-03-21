import { useState } from 'react';
import FeedbackOptions from './feedback/FeedbackOptions/FeedbackOptions';
import Statistic from './feedback/statistic/Statistic';
import Section from './feedback/section/Section';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counterFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = total => {
    return Math.floor((100 / total()) * good);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          counterFeedback={counterFeedback}
          total={countTotalFeedback}
        />
      </Section>
      <Section title={'Statistic'}>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          percentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
};

export default Feedback;
