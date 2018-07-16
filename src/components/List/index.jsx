import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../../actions';
import PropTypes from 'prop-types';
import Todo from './Todo';

const List = ({todos, delTodo}) => (
  <ul>
    {console.log(todos)}
    {todos.map(todo => {
      return <Todo 
        key={todo.id}
        text={todo.text}
        onDelete={delTodo}
      />
    })}
  </ul>
);

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delTodo: id => {
      dispatch(deleteTodo(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);