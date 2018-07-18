import uid from 'uid';
import { add, remove, edit } from './actionsType';

export const addTodo = text => ({
  type: add,
  id: uid(),
  text,
});

export const deleteTodo = id => ({
  type: remove,
  id,
});

export const editTodo = (id, text) => ({
  type: edit,
  text,
  id,
});
