import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    // handleClick = () => {
    //     let count = this.state.count +1;
    //     this.setState({
    //         count: count
    //     })
    // }

    handleClick() {
        let count = this.state.count + 1;
        this.setState({
            count: count
        })
    }


    render() {
        return (
            <div className="App">
                <button onClick={(e) => {this.handleClick(e)}}>{this.state.count}</button>
            </div>
        );
    }

}

export default Counter;