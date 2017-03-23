import React, { Component } from 'react';
import Header from '../../components/Header.js'
import KanbanContainer from '../KanbanContainer.js'
import KanbanColumn from '../../components/KanbanColumn.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <KanbanContainer />
      <KanbanColumn />
      </div>
    );
  }
}

export default App;
