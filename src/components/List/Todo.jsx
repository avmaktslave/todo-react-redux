import React from 'react'
import {string, func} from 'prop-types';
import Button from '../Button';

const Todo = ({text, onDelete}) => (
    <li>
      {text}
      <Button text="Delete" onClick={onDelete} />
    </li>
);

Todo.propTypes = {
  text: string.isRequired,
  onDelete: func.isRequired
}

export default Todo;

