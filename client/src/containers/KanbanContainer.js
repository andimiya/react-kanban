import React, {Component} from 'react';
import KanbanColumn from '../components/KanbanColumn.js';
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
    console.log(this.responseText, 'responseText');
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
    this.state.cards.map(card => {
      console.log(this.state.cards, 'state')
      return (
        <KanbanColumn
          key={card.id}
          status={card.status}
        />
      )
    })
    }
    </div>
    // console.log(array, 'array');
    // console.log(this.state.cards, 'state')
    // console.log(this, 'this render')
    // return (
    //   console.log(card, 'card');
    )
  }
}

export default KanbanContainer;
