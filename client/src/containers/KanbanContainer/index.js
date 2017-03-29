import React, {Component} from 'react';
import KanbanColumn from '../../components/KanbanColumn.js';
import NewTask from '../../components/NewTask.js';
import '../../index.css';

import getAllCards from '../../lib/getAllCards';
import newCard from '../../lib/newCard';
import updateStatus from '../../lib/editStatus';

import { connect } from 'react-redux';
import { addCardAction, editStatusAction } from '../../actions';

class KanbanContainer extends Component {
  constructor(){
    super();

    this.state = {
      cards: []
    };

    this.addCardAction = this.addCardAction.bind(this);
    this.editStatusAction = this.editStatusAction.bind(this);
  }

  componentDidMount(){
    getAllCards()
    .then(results => {
      results.forEach(card => {
        console.log(card, 'card');
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

  editStatusAction(card) {
    updateStatus(card)
    .then(() => {
      this.props.onEditStatus(card.id, card.status);
    });
  }

  render() {
    console.log(this.props, 'this props');
    return (
    <div>
    <div className="new-task">
      <NewTask />
    </div>
    <div className="board-container">
    <KanbanColumn
      cards={this.props.cards}
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
