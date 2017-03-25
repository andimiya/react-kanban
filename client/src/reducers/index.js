import { ADD_TASK } from '../actions';

const initialState = {
  cards: []
};

function cards(state = initialState, action) {
  switch(action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        cards: [
          ...state.cards,
          {
            title: action.title,
            priority: action.prioriy
          }
        ]
      })
    default:
      return state;
  }
}

export default cards;
