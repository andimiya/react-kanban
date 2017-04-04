export const ADD_TASK = 'ADD_TASK';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export function addTask(id, title, priority, status){
  return {
    type: ADD_TASK,
    id,
    title,
    priority,
    status
  }
}

export function changeStatus(id, status){
  return {
    type: CHANGE_STATUS,
    id,
    status
  }
}
