import React, {Component} from 'react';
import KanbanCard from '../../components/KanbanCard.js';
import NewTask from '../../components/NewTask.js';
import '../../index.css';

import { connect } from 'react-redux';
import addTask from '../../actions';

class KanbanContainer extends Component {
  constructor(){
    super();
    this.onServerData = this.onServerData.bind(this);
    this.editStatus = this.editStatus.bind(this);
  }

  onServerData(data) {
    const parsedServerData = JSON.parse(data.currentTarget.response);
    parsedServerData.forEach(card => {
      this.props.onAddTask(card.title, card.priority, card.status);
    });
  };

  componentDidMount(){
    this.loadDatafromServer();
   }

   loadDatafromServer(){
     var oReq = new XMLHttpRequest();
     oReq.addEventListener('load', this.onServerData);
     oReq.open('GET', 'http://localhost:8080/api');
     oReq.send();
   }

   editStatus(event){
     event.preventDefault();
     console.log('TEST CLICK');
   }

// action creators or action on props

  render() {
    console.log(this.props.cards);
    return (
    <div>
    <div className="new-task">
      <NewTask />
    </div>
    <div className="board-container">
    <div className="to-do">
    <h1>To-Do</h1>
    {
    this.props.cards
    .filter(card => {
      return card.status === 'To-Do'
    })
    .map (card => {
      return (
        <KanbanCard
          key={card.id}
          title={card.title}
          priority={card.priority}
          status={card.status}
          editStatus={this.editStatus}
        />
      )
    })
    }
    </div>
    <div className="in-progress">
    <h1>In-Progress</h1>
    {
    this.props.cards
    .filter(card => {
      return card.status === 'In-Progress'
    })
    .map (card => {
      return (
        <KanbanCard
          key={card.id}
          title={card.title}
          priority={card.priority}
          status={card.status}
          editStatus={this.editStatus}
        />
      )
    })
    }
    </div>
    <div className="done">
    <h1>Done</h1>
    {
    this.props.cards
    .filter(card => {
      return card.status === 'Done'
    })
    .map (card => {
      return (
        <KanbanCard
          key={card.id}
          title={card.title}
          priority={card.priority}
          status={card.status}
          editStatus={this.editStatus}
        />
      )
    })
    }
    </div>
    </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

// function that takes the dispatch property as an input
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (title, priority, status) => {
      dispatch(addTask(title, priority, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanContainer);
