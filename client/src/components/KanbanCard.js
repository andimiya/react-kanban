import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeStatus } from '../actions';
import '../index.css'

class KanbanCard extends Component {

  constructor(props){
    super(props);

    this.moveEvent = this.moveEvent.bind(this);
    this.changeStatus = this.changeStatus.bind(this);

  }

  moveEvent(event){
console.log(this.props.status, 'prop');
    event.preventDefault();
    // this.changeStatus(this.props)
    // .then((card) => {
    //   this.props.changeStatus(card.id, "Done")
      console.log(event.target, 'move event');
    // })
  }

  changeStatus(card){
    console.log(event.target.value, 'change status event');
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(card)
      }

      let http = new XMLHttpRequest();
      http.open("PUT", `http://localhost:8080/update/${card.id}`);
      http.addEventListener("load", reqListener);
      http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      http.send(`status=${event.target.value}`);
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
      <button onClick={this.moveEvent} value="To-Do">To-Do</button>
      </div>
      <div>
      <button onClick={this.moveEvent} value={"In-Progress"}>In-Progress</button>
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
    onChangeStatus: (id, status) => {
      dispatch(changeStatus(id, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCard);
