import React, {Component} from 'react';
import '../index.css';

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
    this.setState({
      title: "",
      priority: "",
      status: ""
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

    var oReq = new XMLHttpRequest();
    oReq.open('POST', 'http://localhost:8080/new');
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    oReq.send(`title=${card.title}&priority=${card.priority}&status=${card.status}`);  //Look this up - syntax for XHR request
  }

  render() {
    return (
      <form action="http://localhost:8080/new" method="post" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" value={this.state.title} onChange={this.handleChangeTitle}  />
          <input type="text" placeholder="priority" value={this.state.priority} onChange={this.handleChangePriority} />
          <input type="text" placeholder="status" value={this.state.status} onChange={this.handleChangeStatus} />
        <input type="submit" value="Add Task" />

      </form>
    )
  }
}

export default NewTask
