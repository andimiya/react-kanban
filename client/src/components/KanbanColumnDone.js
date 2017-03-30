import React, {Component} from 'react';
import KanbanCard from './KanbanCard.js'
import '../index.css'

class DoneColumn extends Component {

  render() {
    return (
      <div className="done">
      <h1>Done</h1>
      { this.props.cards
        .filter (card => card.status === "Done")
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

export default DoneColumn;
