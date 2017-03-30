import React, { Component } from 'react'
import { connect } from 'react-redux';
import { moveToDone, moveToDo, moveToInProgress } from '../actions';
import '../index.css'

class KanbanCard extends Component {

  constructor(props){
    super(props);

    this.moveEvent = this.moveEvent.bind(this);
    this.moveEventToDo = this.moveEventToDo.bind(this);
    this.moveEventInProgress = this.moveEventInProgress.bind(this);
    this.moveToDone = this.moveToDone.bind(this);
    this.moveToDo = this.moveToDo.bind(this);
    this.moveToInProgress = this.moveToInProgress.bind(this);
  }

  moveEvent(event){

    event.preventDefault();
    this.moveToDone(this.props)
    .then((card) => {
      this.props.onMoveToDone(card.id, "Done")
      console.log(event, 'event value');
    })
  }

  moveToDone(card){

    console.log(event.target, 'event target');
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(card)
      }

      let http = new XMLHttpRequest();
      http.open("PUT", `http://localhost:8080/update/${card.id}`);
      http.addEventListener("load", reqListener);
      http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      http.send(`status=Done`);
    })
  }

  moveEventToDo(event){

    event.preventDefault();
    this.moveToDo(this.props)
    .then((card) => {
      this.props.onMoveToDo(card.id, "To-Do")
      console.log(event, 'event value');
    })
  }

  moveToDo(card){

    console.log(event.target, 'event target');
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(card)
      }

      let http = new XMLHttpRequest();
      http.open("PUT", `http://localhost:8080/update/${card.id}`);
      http.addEventListener("load", reqListener);
      http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      http.send(`status=To-Do`);
    })
  }

  moveEventInProgress(event){

    event.preventDefault();
    this.moveToInProgress(this.props)
    .then((card) => {
      this.props.onMoveToInProgress(card.id, "In-Progress")
      console.log(event, 'event value');
    })
  }

  moveToInProgress(card){
    console.log(event.target, 'event target');
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(card)
      }

      let http = new XMLHttpRequest();
      http.open("PUT", `http://localhost:8080/update/${card.id}`);
      http.addEventListener("load", reqListener);
      http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      http.send(`status=In-Progress`);
    })
  }

  render(){
    return(
      <div>
      <div>
        Title: {this.props.title}<br />
        Priority: {this.props.priority}<br />
        Status: {this.props.status}<br />
      </div>
      <div>
      <button onClick={this.moveEventToDo} value={"To-Do"}>To-Do</button>
      </div>
      <div>
      <button onClick={this.moveEventInProgress} value={"In-Progress"}>In-Progress</button>
      </div>
      <div>
      <button onClick={this.moveEvent} value={"Done"}>Done</button>
      </div>
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
    onMoveToDo: (id, status) => {
      dispatch(moveToDo(id, status));
    },
    onMoveToInProgress: (id, status) => {
      dispatch(moveToInProgress(id, status));
    },
    onMoveToDone: (id, status) => {
      dispatch(moveToDone(id, status));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCard);
