import { add, remove, edit } from '../actions/actionsType';

const mainReducer = (state = [], action) => {
  switch (action.type) {
    case add:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case remove:
      return state.filter(todo => todo.id !== action.id);
    case edit:
      return state.map(
        todo => (todo.id !== action.id ? todo : { ...todo, text: action.text }),
      );
    default:
      return state;
  }
};

export default mainReducer;
