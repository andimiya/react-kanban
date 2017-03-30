export const ADD_TASK = 'ADD_TASK';
export const MOVE_TO_DONE = 'MOVE_TO_DONE';

export function addTask(title, priority, status){
  return {
    type: ADD_TASK,
    title,
    priority,
    status
  }
}

export function moveToDone(id, status){
  return {
    type: MOVE_TO_DONE,
    id,
    status
  }
}
