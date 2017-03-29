module.exports = function editStatus(){
  return new Promise((resolve, reject) => {
    const updateStatus = JSON.parse(this.response);

    const http = new XMLHttpRequest();
    http.open('PUT', `http://localhost:8080/update/2`);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(updateStatus);
  })
}
