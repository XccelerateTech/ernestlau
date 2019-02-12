import React, { Component } from 'react';
import DisplayList from './DisplayList'
import AddItem from './AddItem'

class ShoppingListApp extends Component {

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

  deleteItem = (id) => {
    const list = this.state.list.filter( item => {
      return item.id !== id;
    });
    this.setState(
      {list}
    )
  }

  addItem = (item) => {
    item.id = Math.random();
    const list = [...this.state.list,item]
    this.setState(
      {
        list
      }
    )

  }
  render() {
    return (
      <div className="App">
      <DisplayList name={this.state.name} list={this.state.list} deleteItem={this.deleteItem}></DisplayList>
      <AddItem addItem={this.addItem}></AddItem>
      </div>
    );
  }
}

export default ShoppingListApp;