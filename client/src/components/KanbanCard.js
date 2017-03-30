import React from 'react'
import '../index.css'

const KanbanCard = (props) => (
  <div className="card">
    <h2>{props.title}</h2>
    <p>{ props.priority}</p>
    <p>{ props.status}</p>
  </div>
)

export default KanbanCard
