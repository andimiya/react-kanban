export const ADD_TASK = 'ADD_TASK';

export const addTask = (id, title, priority, status) => {
  return {
    type: ADD_TASK,
    id,
    title,
    priority,
    status
  }
}

export default addTask;
