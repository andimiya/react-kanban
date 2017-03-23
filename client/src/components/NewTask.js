import React, {Component} from 'react'
import '../index.css'

class NewTask extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      cards: event.target.value
    })
  }

  handleSubmit(event) {
    alert(`Submitted`);
    event.preventDefault();
    this.addTask({
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status
    })
  }

  addTask(card) {
    var formData = {
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status
    };

    var oReq = new XMLHttpRequest();
    oReq.open('POST', 'http://localhost:8080/new');
    oReq.send(formData);
  }

  render() {
    return (
      <form action="http://localhost:8080/new" method="post" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" value={this.state.title}  />
          <input type="text" placeholder="priority" value={this.state.priority}  />
          <input type="text" placeholder="status" value={this.state.status}  />
        <input type="submit" value="Add Task" />
      </form>
    )
  }
}

export default NewTask
