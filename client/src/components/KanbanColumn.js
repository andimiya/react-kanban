import React from 'react'
import KanbanCard from './KanbanCard.js'
import '../index.css'

const KanbanColumn = (props) => {
  console.log(props, 'props')
  return(
    <div>
      {
        props
        .map(card => {
          return (
            <KanbanCard
            title={card.title}
            />
          )
        })
      }
    </div>
  )
}

export default KanbanColumn
