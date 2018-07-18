import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { addTodo } from '../actions';
import Button from './Button';

class AddTodoForm extends React.Component {
  text = React.createRef();

  static propTypes = {
    addTodo: func.isRequired,
  };

  changeHandler = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  addTodoItem = () => {
    const { text } = this.state;
    const { addTodo } = this.props;
    if (!text) return;
    addTodo(text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.addTodoItem();
        }}
      >
        <input type="text" onChange={this.changeHandler} />
        <Button text="Add" onClick={this.addTodoItem} />
      </form>
    );
  }
}

const mapDispathToProps = {
  addTodo,
};

export default connect(
  null,
  mapDispathToProps,
)(AddTodoForm);
