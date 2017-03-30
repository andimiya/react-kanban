import React, {Component} from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class NewTask extends Component {
  constructor() {
    super()

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
    this.props.onAddCard(this.state.title, this.state.priority, this.state.status);
    this.setState({
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

  addCardAction(card){
    var oReq = new XMLHttpRequest();
    oReq.open('POST', 'http://localhost:8080/new');
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send(JSON.stringify(card))
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
//
const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (title, priority, status) => {
      dispatch(addCard(title, priority, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
