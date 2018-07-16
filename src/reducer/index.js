const mainReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'DELETE_TODO':
      return state
    default:
      return state
  }
}

export default mainReducer;