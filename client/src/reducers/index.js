
import { ADD_TASK, MOVE_TO_DONE } from '../actions';

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
            id: action.id,
            title: action.title,
            priority: action.priority,
            status: action.status,
          }
        ]
      })
    break;

    case MOVE_TO_DONE:

      let updatedCards = state.cards.map( card => {
        if ( card.id !== action.id ) {
          return card;
        }
        card.status = action.status;
        return card;
      });

      return Object.assign({}, state, {
        cards : [
          ...updatedCards
        ]
      });


    default:
      return state;
  }
}

export default cards;
