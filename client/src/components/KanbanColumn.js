import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStatus, deleteCard } from '../actions';
import KanbanCard from './KanbanCard.js'
import '../index.css'

class Column extends Component {

  constructor(props){
    super(props);

    this.moveStatus = this.moveStatus.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.delete = this.delete.bind(this);
  }

  moveRight(event){
    console.log('move right');
    let cardId = parseInt(event.target.value);
    let cardStatus = event.target.name;
    if (cardStatus === 'In-Progress'){
      this.moveStatus(cardId, 'Done')
    }
    else if (cardStatus === 'To-Do'){
      this.moveStatus(cardId, 'In-Progress')
    }
  }

  moveLeft(event){
    let cardId = parseInt(event.target.value);
    let cardStatus = event.target.name;
    if (cardStatus === 'In-Progress'){
      this.moveStatus(cardId, 'To-Do')
    }
    else if (cardStatus === 'Done'){
      this.moveStatus(cardId, 'In-Progress')

    }
  }

  moveStatus(id, status){
    // let self = this;
    return new Promise((resolve, reject) => {
      let reqListener = (event) => {
        this.props.onChangeStatus(id, status);
        resolve()
      }

      console.log(id, 'card id');
      console.log(status, 'card status');


      let http = new XMLHttpRequest();
      http.open("PUT", `http://localhost:8080/update/${id}`);
      http.addEventListener("load", reqListener);
      http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      http.send(`status=${status}`)
    })
  }

  delete(event){
    let cardId = parseInt(event.target.value);
    console.log(cardId);

    return new Promise((resolve, reject) => {
      let reqListener = (event) => {
        this.props.onDeleteCard(cardId);
        resolve()
      }

      let http = new XMLHttpRequest();
      http.open("DELETE", `http://localhost:8080/delete/${cardId}`);
      http.addEventListener("load", reqListener);
      http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      http.send(`id=${cardId}`)
    })

    console.log('delete');
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
              moveLeft={this.moveLeft}
              delete={this.delete}
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
              delete={this.delete}
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
              moveRight={this.moveRight}
              moveLeft={this.moveLeft}
              delete={this.delete}
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
    },
    onDeleteCard: (id) => {
      dispatch(deleteCard(id));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);
