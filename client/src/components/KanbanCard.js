import React from 'react'
import '../index.css'

const KanbanCard = (props) => {
  return (
    <div className={props.status}>
    <div>
      <h3>{props.title}</h3>
      Priority: {props.priority}<br />
      Status: {props.status}<br />
    </div>
    <div className="buttons">

      {(props.status === 'In-Progress' || props.status === 'Done') &&
        <button
          className="left-button"
          onClick={props.moveLeft}
          value={props.id}
          name={props.status}>&larr;
        </button>
      }

      {(props.status === 'To-Do' || props.status === 'In-Progress') &&
        <button
          className="right-button" onClick={props.moveRight}
          value={props.id}
          name={props.status}>&rarr;
        </button>
      }
    </div>
    </div>
  )
}

export default KanbanCard;
