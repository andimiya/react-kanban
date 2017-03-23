import React, {Component} from 'react';
// import KanbanColumn from '../components/KanbanColumn.js';
import KanbanCard from '../components/KanbanCard.js';
import '../index.css';

class KanbanContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount(){
    let that = this;
    function reqListener() {
    that.setState({
      cards: JSON.parse(this.responseText)
    })
   }
   var oReq = new XMLHttpRequest();
   oReq.addEventListener('load', reqListener);
   oReq.open('GET', 'http://localhost:8080/api');
   oReq.send();
  }

  render() {
    return (

    <div>
    {
    this.state.cards
    .filter(card => {
      return card.status === 'in progress'
    })
    .map (card => {
      return (
        <KanbanCard
          key={card.id}
          title={card.title}
          priority={card.priority}
          status={card.status}
        />
      )
    })
    }
    </div>

    // {
    // this.state.cards
    // .filter(card => {
    //   return card.status === 'in progress'
    // })
    // .map (card => {
    //   return (
    //     <KanbanColumn
    //       key={card.id}
    //       title={card.title}
    //       priority={card.priority}
    //       status={card.status}
    //     />
    //   )
    // })
    // }

    )
  }
}

export default KanbanContainer;
