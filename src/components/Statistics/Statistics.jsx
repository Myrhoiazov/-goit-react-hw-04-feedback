import style from './Statistics.module.css';
import { Component } from 'react';
import Section from '../Section/Section.jsx';
import Notification from '../Notification/Notification.jsx';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <Section title="Statistics">
        {total === 0 ? (
          <Notification title="There is no feedback..." />
        ) : (
          <ul className={style.list}>
            <li className={style.item}>Good: {good}</li>
            <li className={style.item}>Neutral: {neutral}</li>
            <li className={style.item}>Bad: {bad}</li>
            <li className={style.item}>Total: {total}</li>
            <li className={style.item}>
              Positive feedback: {positivePercentage}%
            </li>
          </ul>
        )}
      </Section>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
