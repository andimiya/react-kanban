import React from 'react'
import '../index.css'

function KanbanCard(props){
  return(
    <div>
    <div>
      Title: {props.title}<br />
      Priority: {props.priority}<br />
      Status: {props.status}<br />
    </div>
    <div>

      {(props.status === 'To-Do' || props.status === 'In-Progress') &&
        <button onClick={props.moveRight} value={props.status}> Right Arrow </button>
      }

      {(props.status === 'In-Progress' || props.status === 'Done') &&
        <button onClick={props.moveLeft} value={props.status}> Left Arrow </button>
      }
    </div>

    </div>
  )
}

export default KanbanCard;
