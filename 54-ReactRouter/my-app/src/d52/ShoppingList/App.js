import React, { Component } from 'react';
import './App.css';
import DisplayList from './DisplayList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jyoti',
    }
  }
  render() {
    return (
      <div className="App">
      <DisplayList name={this.state.name}></DisplayList>

      </div>
    );
  }
}

export default App;
