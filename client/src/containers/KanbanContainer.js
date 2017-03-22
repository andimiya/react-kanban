import React, {Component} from 'react';
// import Kanban from '../components/Kanban.js';
import '../index.css';

class KanbanContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount(){
    function reqListener () {
      var data = JSON.parse(this.responseText);
      console.log(data, 'data');
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', 'http://localhost:8080/api');
    oReq.send();
  }

  render() {
    return (
    <div>
      <h1>Test</h1>


  </div>
  )
  }
}

export default KanbanContainer
