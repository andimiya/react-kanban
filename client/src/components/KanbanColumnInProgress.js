import React, {Component} from 'react';
import KanbanCard from './KanbanCard.js'
import '../index.css'

class InProgressColumn extends Component {

  render() {

    return (
      <div className="in-progress">
      <h1>In-Progress</h1>
      { this.props.cards
        .filter(card => card.status === "In-Progress")
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

export default InProgressColumn;
