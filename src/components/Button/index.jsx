import React from 'react';
import {string} from 'prop-types';


const Button = ({text}) => (
  <button>{text}</button>
);

Button.propTypes = {
  text: string.isRequired
}

export default Button;