import React, {Component} from 'react';
import KanbanCard from './KanbanCard.js'
import { connect } from 'react-redux';
import '../index.css'

class Column extends Component {

  render() {
    return (
      <div className="kanban-board">
      <div className="to-do">
      <h1>To-Do</h1>
      { this.props.cards
        .filter (card => {
          return card.status === 'To-Do'
        })
        .map (card => {
          return (
            <KanbanCard
              key={card.id}
              title={card.title}
              priority={card.priority}
              status={card.status}
              moveToDo={this.props.moveToDo}
              moveInProgress={this.props.moveInProgress}
              moveDone={this.props.moveDone}
            />
          )
        })
      }
      </div>
      <div className="in-progress">
      <h1>In-Progress</h1>
      { this.props.cards
        .filter (card => {
          return card.status === 'In-Progress'
        })
        .map (card => {
          return (
            <KanbanCard
              key={card.id}
              title={card.title}
              priority={card.priority}
              status={card.status}
              moveToDo={this.props.moveToDo}
              moveInProgress={this.props.moveInProgress}
              moveDone={this.props.moveDone}
            />
          )
        })
      }
      </div>
      <div className="done">
      <h1>Done</h1>
      { this.props.cards
        .filter (card => {
          return card.status === 'Done'
        })
        .map (card => {
          return (
            <KanbanCard
              key={card.id}
              title={card.title}
              priority={card.priority}
              status={card.status}
              moveToDo={this.props.moveToDo}
              moveInProgress={this.props.moveInProgress}
              moveDone={this.props.moveDone}
            />
          )
        })
      }
    </div>
    </div>
    )
  }
}

export default Column;
