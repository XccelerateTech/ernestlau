import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "No answer now"
        }
    }

    handleClick = () => {
        let question = prompt("Answer me! Why you so ugly?", "I dont know?");
        console.log(question)
        if (question != null) {
            this.setState({
                question: question
            })
        }
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>Button</button>
                <p>{this.state.question}</p>
            </div>
        );
    }
}

export default App;
