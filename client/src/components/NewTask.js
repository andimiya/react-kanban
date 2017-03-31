import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import '../index.css';

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      priority: "",
      status:""
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
      id: this.state.id,
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status
    })
    .then((card) => {
      this.props.onAddTask(
        card.id,
        card.title,
        card.priority,
        card.status)
    })
    this.setState({
      id:"",
      title:"",
      priority:"",
      status:""
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
    return new Promise(function(resolve, reject){
    function reqListener(){
      let results = JSON.parse(this.responseText);
      resolve(results)
    }

    var oReq = new XMLHttpRequest();
    console.log(card, 'card');
    oReq.open('POST', 'http://localhost:8080/new');
    oReq.addEventListener('load', reqListener);
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send(JSON.stringify(card))
    })
  }

  render() {
    return (
      <form action="http://localhost:8080/new" method="post" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" value={this.state.title} onChange={this.handleChangeTitle}  />
          <input type="text" placeholder="priority" value={this.state.priority} onChange={this.handleChangePriority} />
          <select name="status" value={this.state.value} onChange={this.handleChangeStatus}>
            <option value="Default">Select a Status</option>
            <option value="To-Do">To-Do</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Done">Done</option>
          </select>


        <input type="submit" value="Add Task" />
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
    onAddTask: (id, title, priority, status) => {
      dispatch(addTask(id, title, priority, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
