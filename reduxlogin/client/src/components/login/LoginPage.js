import React, { Component } from 'react';
import LoginForm from './LoginForm';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { loginFacebook } from '../../actions/loginFacebook'

class LoginPage extends Component {

  componentClicked() {
    return null;
  }

  responseFacebook = (userInfo) => {
    console.log(userInfo)
    if (userInfo.accessToken) {
      this.props.loginFacebook(userInfo.accessToken).then(()=>this.props.history.push('/'))
    }
    return null;
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <LoginForm />
          <FacebookLogin
            appId="2317982038275442"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        </div>
        <div className="col-sm-3"></div>
      </div>
    );
  }
}

export default connect(null, { loginFacebook })(LoginPage);