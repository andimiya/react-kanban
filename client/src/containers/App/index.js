import React, { Component } from 'react';
import Header from '../../components/Header.js'
import KanbanContainer from '../KanbanContainer.js'
import KanbanCard from '../../components/KanbanCard.js'
import './App.css'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
      <Header />
      <KanbanContainer />
      <KanbanCard />
      </div>
    );
  }
}

export default App;
