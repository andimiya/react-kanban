import { ADD_TASK } from '../actions';

const initialState = {
  cards: []
};

// console.log(store.getState());

const newTaskReducer = (state = initialState, action) => {

  let newState = state;

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
      newState;
  }
  return newState;
}

export default newTaskReducer;
