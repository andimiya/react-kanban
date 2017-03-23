import React, {Component} from 'react'
import '../index.css'

class NewTask extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit triggered')
    this.setState({
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status
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
    var Data = {
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status
    };

    var oReq = new XMLHttpRequest();
    oReq.open('POST', 'http://localhost:8080/new');
    console.log(Data, 'data');
    oReq.send(this.addTask);
  }

  render() {
    return (
      <form action="http://localhost:8080/new" method="post" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" value={this.state.title} onChange={this.handleChangeTitle}  />
          <input type="text" placeholder="priority" value={this.state.priority} onChange={this.state.priority} />
          <input type="text" placeholder="status" value={this.state.status} onChange={this.state.status} />
        <input type="submit" value="Add Task" onSubmit={this.handleSubmit} />
      </form>
    )
  }
}

export default NewTask
