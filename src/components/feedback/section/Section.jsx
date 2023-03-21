import PropTypes from 'prop-types';
import css from '../section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        <>{children}</>
      </div>
    </section>
  );
};

Section.protoType = {
  title: PropTypes.string.isRequired,
};

export default Section;
