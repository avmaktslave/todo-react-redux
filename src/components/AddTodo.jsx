import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import Button from './Button';

const AddTodoForm = ({dispatch}) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input type="text" ref={node => input = node}/>
        <Button />
      </form>
    </div>
  )
}

export default connect()(AddTodoForm);