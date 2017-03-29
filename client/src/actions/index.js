export const ADD_CARD = 'ADD_CARD';
export const EDIT_STATUS = 'EDIT_STATUS';

export const addCardAction = (title, priority, status) => {
  return {
    type: ADD_CARD,
    title,
    priority,
    status
  }
}

export const editStatusAction = (id, status) => {
  return {
    type: EDIT_STATUS,
    id,
    status
  };
}
