import React, { Component } from 'react';
import List from './List';
import AddTodo from './AddTodo';

export default class ToDo extends Component {
  render() {
    return (
      <div className="todo-wrap">
        <AddTodo />
        <List/>
      </div>
    )
  }
}
