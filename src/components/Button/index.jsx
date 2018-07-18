import React from 'react';
import { string, func } from 'prop-types';

const Button = ({ text, onClick }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: string.isRequired,
  onClick: func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
