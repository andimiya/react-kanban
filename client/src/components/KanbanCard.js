import React from 'react'
import '../index.css'

const KanbanCard = (props) => (
  <div className={props.status}>
    <h2>{props.title}</h2>
    <p>{ props.priority}</p>
    <p>{ props.status}</p>

    // <button action="http://localhost:8080/update/{props.id}" method="put">Edit</button>
  </div>
)

export default KanbanCard
