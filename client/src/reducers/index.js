
import { ADD_TASK, MOVE_TO_DONE, MOVE_TO_DO, MOVE_TO_IN_PROGRESS } from '../actions';

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

    let moveToDone = state.cards.map( card => {
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
         ...moveToDone
        ]
      })

    break;

    case MOVE_TO_DO:

    let moveToDo = state.cards.map( card => {
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
         ...moveToDo
        ]
      })
      
    break;

    case MOVE_TO_IN_PROGRESS:

    let moveToInProgress = state.cards.map( card => {
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
         ...moveToInProgress
        ]
      })
    break;

    default:
      return state;
  }
}

export default cards;
