import React, {Component} from 'react';
import KanbanColumn from '../components/KanbanColumn.js';
import '../index.css';

class KanbanContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    };
    // this.reqListener = this.reqListener.bind(this)
  // }

      // ['cards'].map((cards) =>{
      //   return (() =>{
          let oReq = new XMLHttpRequest();
          const reqListener = () =>{
            console.log('oreq: ', oReq.response);
            this.setState(
              {[`Cards`]: JSON.parse(oReq.response)}
            );
          };
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", `http://localhost:8080/api`);
          oReq.send();
        // })
        // ();
      // });
    }

  //
  // componentDidMount(){
  //
  //   var that = this;
  //
  //   function reqListener () {
  //     var data = JSON.parse(this.responseText);
  //     console.log(data, 'data');  //Object with an array
  //     console.log(this, 'this render'); //XMLHttpRequest
  //     console.log(that, 'that render');  //no data
  //     console.log(that.responseText, 'that responseText'); //undefined
  //     console.log(this.responseText, 'this responseText');  //data!!
  //     console.log(this.setState({cards: data}), 'setstate');
  //     this.setState({
  //       cards: data
  //     }.bind(this))
  //   }

    // var oReq = new XMLHttpRequest();
    // oReq.addEventListener('load', reqListener);
    // oReq.open('GET', 'http://localhost:8080/api');
    // oReq.send();
  // }

  render() {

    console.log(this.state.cards, 'state')
    console.log(this, 'this render')
    return (
      <KanbanColumn
        cards={this.state.cards
          .filter((card) => {
            return card.status === 'done'
          })
        }
      />
    )
  }
}

export default KanbanContainer;
