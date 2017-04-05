export const ADD_TASK = 'ADD_TASK';
export const CHANGE_STATUS = 'CHANGE_STATUS';
// cost PORT

export function addTask(id, title, priority, status){
  //
  // return new Promise(function(resolve, reject){
  //   function reqListener(card){
  //     console.log(card, 'card');
  //     resolve(card)
  //   }
  //     console.log(id, 'card id');
  //     console.log(status, 'card status');
  //     console.log(self.props, 'props new');
  //     self.props
  //     let http = new XMLHttpRequest();
  //     http.open("PUT", `http://localhost:8080/update/${id}`);
  //     http.addEventListener("load", reqListener);
  //     http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //     http.send(`status=${status}`)
  //   })
  //   .then((card) =>{
      return {
        type: ADD_TASK,
        id,
        title,
        priority,
        status
      }
    // })
  // }
}

export function changeStatus(id, status){
  return {
    type: CHANGE_STATUS,
    id,
    status
  }
}
