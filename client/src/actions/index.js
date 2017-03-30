export const ADD_TASK = 'ADD_TASK';
export const MOVE_TO_DONE = 'MOVE_TO_DONE';

export function addTask(id, title, priority, status){
  return {
    type: ADD_TASK,
    id,
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
