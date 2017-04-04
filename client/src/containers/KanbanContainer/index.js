import React, {Component} from 'react';
import Column from '../../components/KanbanColumn.js';
import NewTask from '../../components/NewTask.js';
import '../../index.css';

import { connect } from 'react-redux';
import { addTask } from '../../actions';

class KanbanContainer extends Component {
  constructor(props){
    super(props);

    this.onServerData = this.onServerData.bind(this);
  }

  onServerData(data) {
    // Parses the data received from the GET request
    const parsedServerData = JSON.parse(data.currentTarget.response);
    parsedServerData.forEach(card => {
      // Adds each card it gets from the server, to the STORE
      this.props.onAddTask(card.id, card.title, card.priority, card.status);
    });
  };

    // Gets all the cards from the server to display on the page
  componentDidMount(){
    this.loadDatafromServer();
   }

   loadDatafromServer(){
     // Does the XMLHttpRequest request
     var oReq = new XMLHttpRequest();
     oReq.addEventListener('load', this.onServerData);
     oReq.open('GET', 'http://localhost:8080/api');
     oReq.send();
   }

  render() {
    console.log(this.props.cards, 'column props');
    return (

    <div>
    <div className="new-task">
      <NewTask />
    </div>

    <div className="board-container">
      <Column
        cards={this.props.cards}
      />
    </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

// function that takes the dispatch property as an input
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
)(KanbanContainer);
