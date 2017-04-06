import React from 'react'
import '../index.css'

const KanbanCard = (props) => {
  return (
  <div className="card-container">
    <div className={props.status}>
    <div>
      <h3>{props.title}</h3>
      Priority: {props.priority}<br />
      Status: {props.status}<br />
    </div>
    <div className="left-button">
      {(props.status === 'In-Progress' || props.status === 'Done') &&
        <button
          className="left-button"
          onClick={props.moveLeft}
          value={props.id}
          name={props.status}>&larr;
        </button>
      }
    </div>
    <div className="right-button">

      {(props.status === 'To-Do' || props.status === 'In-Progress') &&
        <button
          className="right-button" onClick={props.moveRight}
          value={props.id}
          name={props.status}>&rarr;
        </button>
      }
    </div>
    <div className="delete-button">
      <a href="#"
        onClick={props.delete}
        value={props.id}>
        <img src={"https://s3.amazonaws.com/web-ready-andrea/trash.png"} />
      </a>
    </div>
    </div>
    </div>
  )
}

export default KanbanCard;
