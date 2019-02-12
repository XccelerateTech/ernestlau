import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import FlashMessages from './FlashMessage'
import {deleteFlashMessage} from '../../actions/flashMessages'

class FlashMessagesList extends Component {
    static propTypes = {
        message: PropTypes.array.isRequired,
        deleteFlashMessage: PropTypes.func.isRequired
    }

  render() {
    const messages = this.props.message.map(message=>
        <FlashMessages key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}></FlashMessages>
        )
    return (
      <div className="contatiner">
        {messages}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        message: state.flashMessages
    }
}

export default connect(mapStateToProps,{deleteFlashMessage})(FlashMessagesList);