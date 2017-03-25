import { ADD_TASK } from '../actions';

const initialState = {
  cards: []
};

// console.log(store.getState());

function newTaskReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        cards: [
          ...state.cards,
          {
            title: action.title,
            priority: action.priority,
            status: action.status
          }
        ]
      })
    default:
      return state;
  }
  return state;
}

export default newTaskReducer;
