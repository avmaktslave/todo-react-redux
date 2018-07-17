import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';
import PropTypes, { shape, string } from 'prop-types';
import Todo from './Todo';

const List = ({ todos, deleteTodo }) =>
  console.log(todos) || (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          text={todo.text}
          onDelete={deleteTodo}
          id={todo.id}
        />
      ))}
    </ul>
  );

List.propTypes = {
  todos: PropTypes.arrayOf(
    shape({
      id: string.isRequired,
      text: string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = todos => ({ todos });

const mapDispatchToProps = {
  deleteTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
