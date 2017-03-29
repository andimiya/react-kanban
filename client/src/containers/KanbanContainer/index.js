import React, {Component} from 'react';
import KanbanCard from '../../components/KanbanCard.js';
import NewTask from '../../components/NewTask.js';
import '../../index.css';

import getAllCards from '../../lib/getAllCards';
import newCard from '../../lib/newCard';
import editStatus from '../../lib/editStatus';

import { connect } from 'react-redux';
import { addTask, updateStatus } from '../../actions';

class KanbanContainer extends Component {
  constructor(){
    super();
    this.editCard = this.editCard.bind(this);
  }

  componentDidMount(){
    getAllCards()
    .then(results => {

      results.forEach(card => {
        console.log(card, 'card');
        this.props.onAddTask(card.title, card.priority, card.status);
      });
    });
  }

  addCard(card) {
    newCard()
    .then(results => {
      results.forEach(card => {
        this.props.onAddTask(card.title, card.priority, card.status);
      })
    })
  }

  editCard(card) {
    editStatus(card)
    .then(() => {
      this.props.onUpdateStatus(card.id, card.status);
    });
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
    },
    onUpdateStatus: (id, status) => {
      dispatch(updateStatus(id, status));
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanContainer);
