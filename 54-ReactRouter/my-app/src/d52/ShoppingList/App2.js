import React, { Component } from 'react';
import './App.css';
import DisplayList2 from './DisplayList2'

class App2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Jyoti',
      list: [
          {id: 1, item:"milk"},
          {id: 2, item: "coffee"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
      <DisplayList2 name={this.state.name} list={this.state.list}></DisplayList2>

      </div>
    );
  }
}

export default App2;