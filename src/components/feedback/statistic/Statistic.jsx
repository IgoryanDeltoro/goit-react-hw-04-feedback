import PropTypes from 'prop-types';
import css from '../statistic/Statistic.module.css';
import Notification from '../notification/Notification';

const Statistic = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul className={css.list}>
      {!total() ? (
        <>
          <Notification message="There is no feedback"></Notification>
        </>
      ) : (
        <>
          <li className={css.item}>
            <p className={css.description}>Good:</p>
            <span className={css.span}>{good}</span>
          </li>
          <li className={css.item}>
            <p className={css.description}>Neutral:</p>
            <span className={css.span}>{neutral}</span>
          </li>
          <li className={css.item}>
            <p className={css.description}>Bad:</p>
            <span className={css.span}>{bad}</span>
          </li>
          <li className={css.item}>
            <p className={css.description}>Total:</p>
            <span className={css.span}>{total()}</span>
          </li>
          <li className={css.item}>
            <p className={css.description}>Positive feedback:</p>
            <span className={css.span}>
              {!percentage(total) ? 0 : percentage(total)}%
            </span>
          </li>
        </>
      )}
    </ul>
  );
};

Statistic.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
};

export default Statistic;
