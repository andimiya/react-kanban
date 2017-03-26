import React, {Component} from 'react';
// import KanbanColumn from '../components/KanbanColumn.js';
import KanbanCard from '../components/KanbanCard.js';
import NewTask from '../components/NewTask.js';
import '../index.css';

import { connect } from 'react-redux';
import addTask from '../actions';

class KanbanContainer extends Component {
  constructor(){
    super();
    this.onServerData = this.onServerData.bind(this);
  }

  onServerData(data) {
    const { dispatch } = this.props;
    const parsedServerData = JSON.parse(data.currentTarget.response);
    parsedServerData.forEach(card => {
      this.props.onAddTask(card.title, card.priority, card.status);
    });
    console.log(this.props, 'state');
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

// action creators or action on props

  render() {
    return (

    <div>
      <NewTask />
    {
    this.props.cards
    .filter(card => {
      return card.status === 'in progress'
    })
    .map (card => {

console.log(card, 'props card');

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
    this.props.cards
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
