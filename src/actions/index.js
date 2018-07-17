import uid from 'uid';
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uid(),
  text
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});

export const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  text,
  id
});
