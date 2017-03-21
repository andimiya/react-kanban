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
    fetch(`/api`)
      .then(result => {
        // result.json()
        console.log(result);
      })
      // .then(items => this.setState({cards}))
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
