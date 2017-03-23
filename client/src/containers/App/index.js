import React, { Component } from 'react';
import Header from '../../components/Header.js'
import KanbanContainer from '../KanbanContainer.js'
import NewTask from '../../components/NewTask.js'
import KanbanCard from '../../components/KanbanCard.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <KanbanContainer />
      <NewTask />
      <KanbanCard />
      </div>
    );
  }
}

export default App;
