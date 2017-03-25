import { ADD_TASK } from '../actions';

const initialState = cards();

const newTaskReducer = (state = initialState, action) => {

  let newState = state;

  switch(action.type) {
    case 'REMOVE_ITEM':
      return state.delete(action.index);

    case 'SET_ITEMS':
      return cards(action.data);

    default:
      newState;
  }
  return newState;
};

export default newTaskReducer;
