import React, {Component} from 'react';
import KanbanCard from './KanbanCard.js'
import { connect } from 'react-redux';
import '../index.css'

class ToDoColumn extends Component {

  render() {
    return (
      <div className="to-do">
      <h1>To-Do</h1>
      { this.props.cards
        .filter(card => card.status === "To-Do")
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

export default ToDoColumn;
