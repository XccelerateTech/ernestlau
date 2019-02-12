import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignupForm from './SignupForm';
import { userSignupRequest,isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends Component {
  static propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <SignupForm isUserExists={this.props.isUserExists} userSignupRequest={ this.props.userSignupRequest } addFlashMessage={this.props.addFlashMessage}/>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default connect(null, { userSignupRequest,addFlashMessage,isUserExists })(SignupPage);