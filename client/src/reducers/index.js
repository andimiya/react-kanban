
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

      let editCard = state.cards.map( card => {
        if ( card.id !== action.id ) {
          return card;
        }
        card.status = action.status;
        return card;
      });

      return Object.assign({}, state, {
        cards : [
          ...editCard
        ]
      });

    default:
      return state;
  }
}

export default cards;
