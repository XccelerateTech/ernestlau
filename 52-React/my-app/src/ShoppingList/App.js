import React, { Component } from 'react';
import DisplayList from './DisplayList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Peter',
            list: [
                {id: 1, item: "milk"},
                {id: 2, item: "coffee"}
            ]
        }
    }


    render() {
        return (
            <div className="App">
                <DisplayList name={this.state.name} list={this.state.list}/>
            </div>
        );
    }

}

export default App;
