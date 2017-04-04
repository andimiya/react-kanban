import React from 'react'
import '../index.css'

function KanbanCard(props){
  return(
    <div className="card">
    <div>
      <h3>{props.title}</h3>
      Priority: {props.priority}<br />
      Status: {props.status}<br />
    </div>
    <div className="buttons">

      {(props.status === 'In-Progress' || props.status === 'Done') &&
        <button class="left-button" onClick={props.moveLeft} value={props.status}>&larr;</button>
      }

      {(props.status === 'To-Do' || props.status === 'In-Progress') &&
        <button class="right-button" onClick={props.moveRight} value={props.status}>&rarr;</button>
      }

    </div>

    </div>
  )
}

export default KanbanCard;
