import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder,deleteReminder,clearReminder } from '../actions';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueDate: ''
    }
  }


  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate)
  }

  deleteReminder(id) {
    this.props.deleteReminder(id)
  }

  clearReminder() {
    this.props.clearReminder()
  }

  renderReminders() {
    const { reminders } = this.props
    return (
          reminders.map(reminder => {
            return (<li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div><em>{ moment(new Date(reminder.dueDate)).fromNow()}</em></div>
              </div>
              <div className="list-item delete-button" onClick={()=> this.deleteReminder(reminder.id)}>&#x2715;</div>
            </li>)
          })
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
          <div className="form-group mr-2">
            <input type="text" className="form-control mr-2" placeholder="I have to..."
              onChange={(e) => {
                this.setState({ text: e.target.value })
              }
              } />
              <input type="datetime-local" className="form-control"
              onChange={(e) => {
                this.setState({ dueDate: e.target.value })
              }
              }></input>
          </div>
          <button onClick={() => {
            this.addReminder()
          }}
            type="button" className="btn btn-success">Add Reminder</button>
        </div>
        <ul className="list-group col-sm-8 mt-2">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={800}>
        {this.renderReminders()}
        </ReactCSSTransitionGroup>
        </ul>
        <div className="btn btn-danger mt-3"
        onClick={()=>{this.clearReminder()}}>
        Clear Reminders
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    reminders: state
  }
}

export default connect(mapStateToprops, { addReminder,deleteReminder,clearReminder })(App);