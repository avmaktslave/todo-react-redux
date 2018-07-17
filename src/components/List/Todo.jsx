import React from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../../actions';
import { string, func } from 'prop-types';
import Button from '../Button';

class Todo extends React.Component {
  state = {
    textAr: '',
    isShowEdit: false
  };

  componentDidMount() {
    this.setState({
      textAr: this.props.text
    });
  }

  editHandler = e => {
    console.log(e.target.value);
    this.setState({ textAr: e.target.value });
  };

  onEdit = () => {
    this.setState({ isShowEdit: true });
  };

  editSave = () => {
    const { id } = this.props;
    const { textAr } = this.state;
    this.props.editTodo(id, textAr);
    this.setState({
      isShowEdit: false
    });
  };

  render() {
    const { text, onDelete, id } = this.props;
    const { isShowEdit, textAr } = this.state;
    return (
      <li>
        {text}
        {isShowEdit && (
          <div className="textAreaWrap">
            <textarea
              cols="30"
              rows="5"
              value={textAr}
              onChange={this.editHandler}
            />
            <Button text="Save" onClick={this.editSave} />
          </div>
        )}
        <Button text="Edit" onClick={this.onEdit} />
        <Button text="Delete" onClick={() => onDelete(id)} />
      </li>
    );
  }
}

Todo.propTypes = {
  text: string.isRequired,
  onDelete: func.isRequired
};

const mapDispatchToProps = {
  editTodo
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
