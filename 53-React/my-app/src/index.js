import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inittime: new Date(),
            date: new Date(),
            timerCreated: false
        }
    }

    componentDidMount() {
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }

    createTimer() {
        this.setState({
            inittime: new Date(),
            timerCreated: true
          })
    }

    render() {
        let pk = new Date(this.state.date.getTime() - this.state.inittime.getTime() - 28800000)
        let timer = ""
        if (this.state.timerCreated) {
            timer = (<h2>You make the timer at {this.state.inittime.toLocaleTimeString()} now. 
            it already passed {pk.toLocaleTimeString()} after you make the timer.</h2>)
        }

        return (
            <div>
                <h1>Hello, world!</h1>
                <button onClick={this.createTimer.bind(this)}>Create Timer Now!</button>
                {timer}
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );