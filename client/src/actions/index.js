export const ADD_TASK = 'ADD_TASK';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export const addTask = (id, title, priority, status) => {
  return {
    type: ADD_TASK,
    id,
    title,
    priority,
    status
  }
}

export const updateStatus = (status, id) => {
  return {
    type: UPDATE_STATUS,
    id,
    status
  };
}
