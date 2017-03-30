import React from 'react'
import '../index.css'

const KanbanCard = (props) => (

  <div className="card">
    <h2>{props.title}</h2>
    <p>{props.priority}</p>
    <p>{props.status}</p>

    <button value="To-Do" onClick={props.onClick}>To-Do</button>
    <button value="In-Progress" onClick={props.moveInProgress}>In-Progress</button>
    <button value="Done" onClick={props.moveDone}>Done</button>
  </div>
)

export default KanbanCard
