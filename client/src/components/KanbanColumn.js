import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStatus } from '../actions';
import KanbanCard from './KanbanCard.js'
import '../index.css'

class Column extends Component {

  constructor(props){
    super(props);

    this.moveToDo = this.moveToDo.bind(this);
    this.moveToInProgress = this.moveToInProgress.bind(this);
    this.moveToDone = this.moveToDone.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveRight(event){
    console.log(this.props);
    //
    // if (this.props.status === 'To-Do'){
    //   console.log(event.target.value, 'this props cards');
      this.moveToDone(this.props)
      .then((card) =>{
        console.log(card.status, 'id');
        // this.props.onChangeStatus(card.id, "In-Progress")
      })
    // }
    // else if (event.target.value === 'In-Progress'){
    //   this.moveToDone(this.props.cards)
    // }
  }

  moveLeft(event){
    if (event.target.value === 'In-Progress'){
      this.moveToDo()
    }
    else if (event.target.value === 'Done'){
      this.moveToInProgress(this.props.cards)
    }
  }

  moveToDo(card){
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

  moveToInProgress(card){
    console.log('test');
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

  moveToDone(card){
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

  render() {
    return (
      <div className="column-container">
      <div className="column">
      <h1>To-Do</h1>
      { this.props.cards
        .filter (card => card.status === "To-Do")
        .map (card => {
          return (
            <KanbanCard
              key={card.id}
              id={card.id}
              title={card.title}
              priority={card.priority}
              status={card.status}
              moveRight={this.moveRight}
            />
          )
        })
      }
      </div>
      <div className="divider"></div>
      <div className="column">
      <h1>In-Progress</h1>
      { this.props.cards
        .filter (card => card.status === "In-Progress")
        .map (card => {
          return (
            <KanbanCard
              key={card.id}
              id={card.id}
              title={card.title}
              priority={card.priority}
              status={card.status}
              moveRight={this.moveRight}
              moveLeft={this.moveLeft}
            />
          )
        })
      }
      </div>
      <div className="divider"></div>
      <div className="column">
      <h1>Done</h1>
      { this.props.cards
        .filter (card => card.status === "Done")
        .map (card => {
          return (
            <KanbanCard
              key={card.id}
              id={card.id}
              title={card.title}
              priority={card.priority}
              status={card.status}
              moveLeft={this.moveLeft}
            />
          )
        })
      }
    </div>
    </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStatus: (id, status) => {
      dispatch(changeStatus(id, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);
