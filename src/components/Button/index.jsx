import React from 'react';
import {string, func} from 'prop-types';


const Button = ({text, onClick}) => (
  <button onClick={onClick}>{text}</button>
);

Button.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired
}

export default Button;