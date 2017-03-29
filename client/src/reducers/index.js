
import { ADD_TASK, UPDATE_STATUS } from '../actions';

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
            priority: action.priority,
            status: action.status,
          }
        ]
      });
      case UPDATE_STATUS:
        return Object.assign({}, state, {
          cards: [
            ...state.cards,
            {
              status: action.status,
            }
          ]
        });

    default:
      return state;
  }
}

export default cards;
