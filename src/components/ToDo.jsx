import React from 'react';
import List from './List';
import AddTodo from './AddTodo';

const ToDo = () => (
  <div className="todo-wrap">
    <AddTodo />
    <List />
  </div>
);

export default ToDo;
