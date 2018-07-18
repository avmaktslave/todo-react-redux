import * as action from './index';
import { add, remove, edit } from './actionsType';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Some text';
    const expectedAction = {
      type: add,
      id: expect.any(String),
      text,
    };
    expect(action.addTodo(text)).toEqual(expectedAction);
  });
  it('should create an action to delete a todo', () => {
    const id = expect.any(String);
    const expectedAction = {
      type: remove,
      id: expect.any(String),
    };
    expect(action.deleteTodo(id)).toEqual(expectedAction);
  });
  it('should create an action to edit a todo', () => {
    const text = 'Text for editing';
    const id = expect.any(String);
    const expectedAction = {
      type: edit,
      text,
      id: expect.any(String),
    };
    expect(action.editTodo(id, text)).toEqual(expectedAction);
  });
});
