import React, {Component} from 'react';
import KanbanColumn from '../../components/KanbanColumn.js';
import NewTask from '../../components/NewTask.js';
import '../../index.css';

import getAllCards from '../../lib/getAllCards';
import newCard from '../../lib/newCard';

import { connect } from 'react-redux';
import { addCard, editCard } from '../../actions';

class KanbanContainer extends Component {
  constructor(){
    super();

    this.state = {
      cards: []
    };

    console.log(this.addCard, 'this move todo');
    this.addCard = this.addCard.bind(this);
    this.moveToDo = this.moveToDo.bind(this);
    this.moveInProgress = this.moveInProgress.bind(this);
    this.moveDone = this.moveDone.bind(this);
  }

  componentDidMount(){
    getAllCards()
    .then(results => {
      results.forEach(card => {
        console.log(this.props.moveToDo, 'this props cards');
        this.props.onAddCard(card.title, card.priority, card.status);
      });
    });
  }

  addCard(card) {
    newCard()
    .then(results => {
      results.forEach(card => {
        this.props.onAddCard(card.title, card.priority, card.status);
      })
    })
  }

  moveToDo(card) {
    event.preventDefault();
    console.log('Click To-Do');
  };

  moveInProgress(card){
    console.log('Click - InProgress');
  }

  moveDone(card){
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
      addCard={this.addCard}
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
      dispatch(addCard(title, priority, status));
    },
    onEditCard: (id, status) => {
      dispatch(editCard(id, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanContainer);
