import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React Component that displays an error message
class ErrorMsg extends Component {
  render() {
    let msg = "";
    if (this.props.message) {
      msg = "*" + this.props.message;
    }

    return (
      <span style={{ color: "red" }}>{msg}</span>
    );
  }
}

ErrorMsg.propTypes = {
  message: PropTypes.string
};

export default ErrorMsg;