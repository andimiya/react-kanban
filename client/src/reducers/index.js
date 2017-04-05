
import { ADD_TASK, CHANGE_STATUS, DELETE_CARD } from '../actions';

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
      });

    case CHANGE_STATUS:

    let changeStatus = state.cards.map( card => {
      console.log(card.id, action.id, card.id !== action.id, 'action');
      if(card.id !== action.id){
         return card;
      }
      card.status = action.status;
        return card;
     });

     return Object.assign({},
       state, {
         cards: [
         ...changeStatus
        ]
      });

    case DELETE_CARD:
      return Object.assign({}, state, {
        cards:
          state.cards.filter(cards =>{
            return cards.id !== action.id;
          })
      })

    default:
      return state;
  }

}

export default cards;
