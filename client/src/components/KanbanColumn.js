import React from 'react'
import KanbanCard from './KanbanCard.js'
import '../index.css'

const KanbanColumn = this.state.cards.map((card) => {
    return <KanbanCard title={card.title} />;
})

export default KanbanColumn
