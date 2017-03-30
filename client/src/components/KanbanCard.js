import React, { Component } from 'react'
import { connect } from 'react-redux';
import { moveToDone } from '../actions';
import '../index.css'

class KanbanCard extends Component {
  constructor(props){
    super(props);

    this.moveEvent = this.moveEvent.bind(this);
    this.moveToDone = this.moveToDone.bind(this);
  }

  moveEvent(event){
    event.preventDefault();
    this.moveToDone(this.props)
    .then((card) => {
      this.props.onMoveToDone(card.id, card.title, card.priority, card.status)
    })
  }

  moveToDone(card){
    console.log(event.target.value, 'event value');
    console.log(card.id, 'card id');
    console.log(this.props);
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(card)
      }

      let http = new XMLHttpRequest();
      http.open("PUT", `http://localhost:8080/update/43`);
      http.addEventListener("load", reqListener);
      http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      http.send(`status=Done`);
    })
  }
  render(){
    return(
      <div>
      <div>
        {this.props.title}
        {this.props.priority}
        {this.props.status}
      </div>

      <button onClick={this.moveToDone} value="Done">Done</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMoveToDone: (id, status) => {
      dispatch(moveToDone(id, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCard);
