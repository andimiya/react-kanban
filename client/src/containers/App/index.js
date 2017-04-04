import React, { Component } from 'react';
import Header from '../../components/Header.js'
import KanbanContainer from '../KanbanContainer'
import './styles.css'

class App extends Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Questrial" />
      <Header />
      <KanbanContainer />
      </div>
    );
  }
}

export default App;
