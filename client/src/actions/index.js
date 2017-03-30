export const ADD_TASK = 'ADD_TASK';
export const MOVE_TO_DONE = 'MOVE_TO_DONE';
export const MOVE_TO_DO = 'MOVE_TO_DO';
export const MOVE_TO_IN_PROGRESS = 'MOVE_TO_IN_PROGRESS';

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

export function moveToDo(id, status){
  return {
    type: MOVE_TO_DO,
    id,
    status
  }
}

export function moveToInProgress(id, status){
  return {
    type: MOVE_TO_IN_PROGRESS,
    id,
    status
  }
}
