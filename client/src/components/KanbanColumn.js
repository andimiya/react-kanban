import React, { Component } from 'react';
import KanbanCard from './KanbanCard.js'
import '../index.css'

class Column extends Component {

  render() {
    return (
      <div className="column">
      <h1>To-Do</h1>
      { this.props.cards
        .filter (card => card.status === "To-Do")
        .map (card => {
          return (
            <KanbanCard
              key={card.id}
              id={card.id}
              title={card.title}
              priority={card.priority}
              status={card.status}
            />
          )
        })
      }
      <h1>In-Progress</h1>
      { this.props.cards
        .filter (card => card.status === "In-Progress")
        .map (card => {
          return (
            <KanbanCard
              key={card.id}
              id={card.id}
              title={card.title}
              priority={card.priority}
              status={card.status}
            />
          )
        })
      }
      <h1>Done</h1>
      { this.props.cards
        .filter (card => card.status === "Done")
        .map (card => {
          return (
            <KanbanCard
              key={card.id}
              id={card.id}
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

export default Column;
