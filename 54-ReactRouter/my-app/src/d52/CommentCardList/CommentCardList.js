import React, { Component } from 'react';
import '../App.css';
import faker from 'faker';
import CommentCard from './CommentCard'
import DisplayList from './DisplayList'

class CommentCardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Jyoti',
      list: [
          {id: 1, item:<CommentCard author="jyoti" comment="hello" image={faker.image.avatar()}/>},
          {id: 2, item: <CommentCard author="sam" comment="hi" image={faker.image.avatar()}/>}
      ]
    }
  }
  render() {
    return (
      <div className="App">
      <DisplayList name={this.state.name} list={this.state.list}></DisplayList>

      </div>
    );
  }
}

export default CommentCardList;