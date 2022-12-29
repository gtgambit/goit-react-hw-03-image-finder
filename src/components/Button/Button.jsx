import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onButtonClick }) => {
  return (
    <button className={css.Button} onClick={onButtonClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func,
};
