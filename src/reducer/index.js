const mainReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      {
        id: action.id,
        text: action.text
      }
    ];
  case 'DELETE_TODO':
    return state.filter(todo => todo.id !== action.id);
  case 'EDIT_TODO':
    return state.map(
      todo => (todo.id !== action.id ? todo : { ...todo, text: action.text })
    );
  default:
    return state;
  }
};

export default mainReducer;
