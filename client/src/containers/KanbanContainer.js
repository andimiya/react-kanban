import React, {Component} from 'react';
// import KanbanColumn from '../components/KanbanColumn.js';
import KanbanCard from '../components/KanbanCard.js';
import NewTask from '../components/NewTask.js';
import '../index.css';

class KanbanContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(obj) {
    console.log(obj, 'obj');
    this.setState({
      cards: [obj]
    })
  }

  componentDidMount(){
    let that = this;
    function reqListener() {
    that.setState({
      cards: JSON.parse(this.responseText)
    })
   }
   var oReq = new XMLHttpRequest();
   oReq.addEventListener('load', reqListener);
   oReq.open('GET', 'http://localhost:8080/api');
   oReq.send();
  }

  render() {
    return (

    <div>
      <NewTask
        addTask={this.addTask}/>


    {
    this.state.cards
    .filter(card => {
      return card.status === 'in progress'
    })
    .map (card => {
      return (
        <KanbanCard
          key={card.id}
          title={card.title}
          priority={card.priority}
          status={card.status}
        />
      )
    })
    }

    {
    this.state.cards
    .filter(card => {
      return card.status === 'done'
    })
    .map (card => {
      return (
        <KanbanCard
          key={card.id}
          title={card.title}
          priority={card.priority}
          status={card.status}
        />
      )
    })
    }
    </div>
    )
  }
}

export default KanbanContainer;
