module.exports = function newCard(card){
  return new Promise((resolve, reject) => {

    function reqListener() {
      let results = JSON.parse(this.response);
      resolve(results);
    }

    const http = new XMLHttpRequest();
    http.addEventListener('load', reqListener);
    http.open('POST', 'http://localhost:8080/new');
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(JSON.stringify(card));
  });
};
