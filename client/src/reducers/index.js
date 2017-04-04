
import { ADD_TASK, CHANGE_STATUS } from '../actions';

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

    case CHANGE_STATUS:

    let changeStatus = state.cards.map( card => {
      if(card.id !== action.id){
         return card;
      }
      card.id = action.id;
      card.status = action.status;

      return card;
     });

     return Object.assign({},
       state, {
         cards: [
         ...changeStatus
        ]
      })
    default:
      return state;
  }
}

export default cards;
