import React from 'react'
import {string} from 'prop-types'

const Todo = ({text}) => (
  <li>{text}</li>
);

Todo.propTypes = {
  text: string.isRequired
}

export default Todo;

