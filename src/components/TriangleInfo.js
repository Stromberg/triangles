import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { triangleType, TriangleType } from '../models/Triangle';

// React Component that displays info about a Triangle
class TriangleInfo extends Component {
  render() {
    let type = triangleType(this.props.length1, this.props.length2, this.props.length3);

    let color = "red";
    let msg = "This is not a valid Triangle!";

    if (type !== TriangleType.NotATriangle) {
      msg = "This is an " + type + " Triangle!";
      color = "green";
    }

    return (
      <span style={{ color: color }}>{msg}</span>
    );
  }
}

TriangleInfo.propTypes = {
  length1: PropTypes.number,
  length2: PropTypes.number,
  length3: PropTypes.number
};

export default TriangleInfo;