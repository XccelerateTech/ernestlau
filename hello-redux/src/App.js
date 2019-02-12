import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as types from './actions'
import {bindActionCreators} from 'redux'
import User from './components/User'
// import PropTypes from 'prop-types';

const mapStateToProps = (state) =>{
  return {
    counter: state.counter
  }
}

// if you do this, this.props will map the dispatch, and dispatch() function will disappear
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: function(){dispatch(increment())},
//     decrement: function(){dispatch(decrement())}
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch)
}

class App extends Component {
  render() {
    console.dir(this.props)
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={()=> this.props.increment()} className="btn btn-primary mr-2">Increase</button>
          <button onClick={()=> this.props.decrement()}className="btn btn-danger my-2">Decrease</button>
        </p>
        <User />
      </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);