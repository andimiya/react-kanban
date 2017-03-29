
import { ADD_CARD, EDIT_STATUS } from '../actions';

const initialState = {
  cards: []
};

function cards(state = initialState, action) {
  switch(action.type) {
    case ADD_CARD:
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
      case EDIT_STATUS:
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
