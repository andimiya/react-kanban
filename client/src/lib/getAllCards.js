module.exports = function getAllCards(){
  return new Promise ((resolve, reject) => {
    function reqListener(){
      const parsedServerData = JSON.parse(this.response);
      resolve(parsedServerData);
    }
    var http = new XMLHttpRequest();
    http.addEventListener('load', reqListener);
    http.open('GET', 'http://localhost:8080/api');
    http.send();
  });
};
