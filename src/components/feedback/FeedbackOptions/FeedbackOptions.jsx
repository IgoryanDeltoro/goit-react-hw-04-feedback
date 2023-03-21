import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ counterFeedback, total }) => {
  return (
    <>
      <button
        className={css.goodBtn}
        type="button"
        onClick={() => {
          counterFeedback('good');
          total();
        }}
      >
        Good
      </button>
      <button
        className={css.neutralBtn}
        type="button"
        onClick={() => {
          counterFeedback('neutral');
          total();
        }}
      >
        Neutral
      </button>
      <button
        className={css.badBtn}
        type="button"
        onClick={() => {
          counterFeedback('bad');
          total();
        }}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.protoType = {
  counterFeedback: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default FeedbackOptions;
