import React from 'react'
import '../index.css'


const KanbanCard = (props) => (

  <div className="card">
    <h2>{props.title}</h2>
    <p>{ props.priority}</p>
    <p>{ props.status}</p>

    <button onClick={props.editStatus} value={event.target}>Edit</button>
  </div>
)

export default KanbanCard
