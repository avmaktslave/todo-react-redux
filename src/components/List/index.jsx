import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';

const List = ({todos}) => (
  <ul>
    {console.log(todos)}
    {todos.map(todo => {
      return <Todo key={todo.id} text={todo.text} />
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

export default connect(mapStateToProps)(List);