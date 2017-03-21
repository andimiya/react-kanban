import React, { Component } from 'react';
import Header from '../../components/Header.js'
import KanbanContainer from '../KanbanContainer.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <KanbanContainer />
      </div>
    );
  }
}

export default App;
