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

    var that = this;

    function reqListener () {
      var data = JSON.parse(this.responseText);
      console.log(data, 'data');
      that.setState({
        cards: data
      })
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', 'http://localhost:8080/api');
    oReq.send();
  }

  render() {
    console.log(this.state.cards, 'state cards')
    return (
      <KanbanColumn
        cards={this.state.cards
          .filter((card) => {
            return card.status === 'done'
          }
        )}
      />
    )
  }
}

export default KanbanContainer;
