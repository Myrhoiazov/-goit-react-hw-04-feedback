import style from './FeedbackOptions.module.css';
import Section from '../Section/Section.jsx';
import PropTypes from 'prop-types';
const shortid = require('shortid');

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Section title="Please leave feedback">
      {options.map(option => (
        <button
          key={shortid.generate()}
          className={style.btn}
          type="button"
          name={option.name}
          onClick={onLeaveFeedback}
        >
          {option.label}
        </button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      onLeaveFeedback: PropTypes.func,
    })
  ).isRequired,
};

export default FeedbackOptions;
