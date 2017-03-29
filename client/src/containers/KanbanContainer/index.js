import React, {Component} from 'react';
import KanbanColumn from '../../components/KanbanColumn.js';
import NewTask from '../../components/NewTask.js';
import '../../index.css';

import getAllCards from '../../lib/getAllCards';
import newCard from '../../lib/newCard';

import { connect } from 'react-redux';
import { addCardAction, editStatusAction } from '../../actions';

class KanbanContainer extends Component {
  constructor(){
    super();

    this.state = {
      cards: []
    };

    this.addCardAction = this.addCardAction.bind(this);
    this.moveToDo = this.moveToDo.bind(this);
    this.moveInProgress = this.moveInProgress.bind(this);
    this.moveDone = this.moveDone.bind(this);

  }

  componentDidMount(){
    getAllCards()
    .then(results => {
      results.forEach(card => {
        // console.log(event.target.value);
        this.props.onAddCard(card.title, card.priority, card.status);
      });
    });
  }

  addCardAction(card) {
    newCard()
    .then(results => {
      results.forEach(card => {
        this.props.onAddCard(card.title, card.priority, card.status);
      })
    })
  }

  moveToDo() {
    //   return new Promise((resolve, reject) => {
    //     const updateStatus = JSON.parse(this.response);
    //     console.log(updateStatus, 'update status');
    //
    //     const http = new XMLHttpRequest();
    //     http.open('PUT', `http://localhost:8080/update/2`);
    //     http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     http.send(updateStatus);
    //   })
    //
    // .then(results => {
    //   results.forEach(card => {
    //     this.props.onEditStatus(card.id, card.status);
    //   })
    // })

      console.log('Click To-Do');
  };

  moveInProgress(){
    console.log('Click - InProgress');
  }

  moveDone(){
    console.log('Click - Done');
  }

  render() {
    return (
    <div>
    <div className="new-task">
      <NewTask />
    </div>
    <div className="board-container">
    <KanbanColumn
      cards={this.props.cards}
      addCardAction={this.addCard}
      moveToDo={this.props.moveToDo}
      moveInProgress={this.props.moveInProgress}
      moveDone={this.props.moveDone}
    />
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
    onAddCard: (title, priority, status) => {
      dispatch(addCardAction(title, priority, status));
    },
    onEditStatus: (id, status) => {
      dispatch(editStatusAction(id, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanContainer);
