import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Button from './Button';

class AddTodoForm extends React.Component {
  text = React.createRef();

  changeHandler = e => {
    let text = e.target.value;
    this.setState({ text });
  };

  addTodoItem = () => {
    const { text } = this.state;
    if (!text) return;
    this.props.addTodo(text);
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
        <Button text="Add" />
      </form>
    );
  }
}

const mapDispathToProps = {
  addTodo
};

export default connect(
  null,
  mapDispathToProps
)(AddTodoForm);
