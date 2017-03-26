import React, {Component} from 'react';
import '../index.css';

import { connect } from 'react-redux';
import addTask from '../actions';

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      priority: "",
      status: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }

  // trigger addTask, reset state to ""
  handleSubmit(event) {
    event.preventDefault();
    this.addTask({
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status
    })
<<<<<<< HEAD
    this.setState({
      title: "",
      priority: "",
      status: ""
=======
    console.log('handle submit triggered')
    this.setState({
      title: "",
      priority: "",
      status: this.state.status
>>>>>>> 3dc41f3ccbd0b6eee05289ca7159fc65a97a1273
    })
  }

  handleChangeTitle(event){
    this.setState({
      title : event.target.value
    })
  }

  handleChangePriority(event){
    this.setState({
      priority : event.target.value
    })
  }

  handleChangeStatus(event){
    this.setState({
      status : event.target.value
    })
  }

  addTask(card) {
<<<<<<< HEAD

    var oReq = new XMLHttpRequest();
    oReq.open('POST', 'http://localhost:8080/new');
    oReq.setRequestHeader("Content-Type", "application/json");
    // oReq.addEventListener('load', reqListener);
    oReq.send(JSON.stringify(card))
    console.log(card, 'card');
    //
    // oReq.send(`title=${card.title}&priority=${card.priority}&status=${card.status}`);  //Look this up - syntax for XHR request
=======


    var oReq = new XMLHttpRequest();
    oReq.open('POST', 'http://localhost:8080/new');
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    oReq.send(`title=${card.title}&priority`);  //Look this up - syntax for XHR request
>>>>>>> 3dc41f3ccbd0b6eee05289ca7159fc65a97a1273
  }

  render() {

    return (
      <form action="http://localhost:8080/new" method="post" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" value={this.state.title} onChange={this.handleChangeTitle}  />
          <input type="text" placeholder="priority" value={this.state.priority} onChange={this.handleChangePriority} />
          <input type="text" placeholder="status" value={this.state.status} onChange={this.handleChangeStatus} />
<<<<<<< HEAD
        <input type="submit" value="Add Task" />

=======
        <input type="submit" value="Add Task" onSubmit={this.handleSubmit} />
>>>>>>> 3dc41f3ccbd0b6eee05289ca7159fc65a97a1273
      </form>
    )
  }
}
//
const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (title, priority, status) => {
      dispatch(addTask(title, priority, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
