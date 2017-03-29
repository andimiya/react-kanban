export const ADD_TASK = 'ADD_TASK';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export const addTask = (title, priority, status) => {
  return {
    type: ADD_TASK,
    title,
    priority,
    status
  }
}

export const updateStatus = (id, status) => {
  return {
    type: UPDATE_STATUS,
    id,
    status
  };
}
