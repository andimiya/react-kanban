export const ADD_CARD = 'ADD_CARD';
export const EDIT_STATUS = 'EDIT_STATUS';

export const addCard = (title, priority, status) => {
  return {
    type: ADD_CARD,
    title,
    priority,
    status
  }
}

export const editStatus = (id, status) => {
  return {
    type: EDIT_STATUS,
    id,
    status
  };
}
