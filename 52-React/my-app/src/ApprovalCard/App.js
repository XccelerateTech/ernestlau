import React, { Component } from 'react';
import ApprovalCard from './ApprovalCard';
import CommentCard from './CommentCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, author: "Peter", comment: "Shit on my month" },
        { id: 2, author: "Cindy", comment: "Fuck you" },
        { id: 3, author: "Tom", comment: "Oh dear!" }
      ]
    }
  }



  render() {
    return (
      <div className="App">
        <ApprovalCard>
          {this.state.list.map((lists) => <CommentCard author={lists.author} date={new Date().toLocaleDateString()} comment={lists.comment} />)}
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
