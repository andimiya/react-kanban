import React, {Component} from 'react';
import Kanban from '../components/Kanban.js'
import '../index.css'

class KanbanContainer extends Component {
  constructor(props){
    super(props)

    // this.state = []

      this.state = {
      bookList : [
        {
          _id: 1,
          title: 'Ready Player One',
          author: 'Ernest Cline'
        },
        {
          _id: 2,
          title: 'Enders Game',
          author: 'Orson Scott Card'
        },
        {
          _id: 3,
          title: 'Bladerunner',
          author: 'Harrison Ford'
        }
      ]
    }
  }



  // getCards(){
  //   let req = new XMLHttpRequest()
  //   req.open('GET', 'api/kanban')
  // }

  render() {
    return (
    <div>
      <h1>Test</h1>

      <ul>

      {this.state.bookList.map((book) =>
      <Kanban
        key={book._id}
        title={book.title}
        author={book.author}
      />
      )}
    </ul>
  </div>
  )
  }
}

export default KanbanContainer
