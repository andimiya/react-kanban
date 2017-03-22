import React from 'react'
import '../index.css'

const KanbanCard = (props) => (
  <div className="kanban-board">
    <h2>Test Dumb Kanban</h2>
    <h2>{props.title}</h2>
    // <p>{ props.author}</p>
  </div>
)

export default KanbanCard
