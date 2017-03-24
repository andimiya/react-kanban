export const ADD_TASK = 'ADD_TASK';

function addTask(title, priority, status) {
  return {
    type: ADD_TASK,
    title,
    priority,
    status
  }
}

export default addTask;
