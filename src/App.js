import React, { Component } from 'react';
import TriangleInfo from './components/TriangleInfo';
import NumericInput from 'react-numeric-input';
import ErrorMsg from './components/ErrorMsg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      length1: 20,
      length2: 30,
      length3: 40
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Triangle Type?</h2>
        </div>
        <center>
          <table>
            <tbody>
              {this.renderLengthInput(1, this.state.length1)}
              {this.renderLengthInput(2, this.state.length2)}
              {this.renderLengthInput(3, this.state.length3)}
            </tbody>
          </table>
        </center>
        <TriangleInfo length1={this.state.length1} length2={this.state.length2} length3={this.state.length3} />
      </div>
    );
  }

  renderLengthInput(side, length) {
    let errorMsg = null;
    if (length <= 0) {
      errorMsg = "Must be a number greater than 0";
    }

    return (
      <tr>
        <td className="LengthTitle">
          Length {side}:
        </td>
        <td className="LengthInput">
          <NumericInput
            min={1} max={Number.MAX_VALUE} value={length}
            onChange={(valueAsNumber, valueAsString) => this.onChange(side, valueAsNumber)} />
        </td>
        <td className="LengthError">
          <ErrorMsg message={errorMsg} />
        </td>
      </tr>
    );
  }

  onChange(side, length) {
    if (side === 1) {
      this.setState({
        length1: length
      });
    }
    else if (side === 2) {
      this.setState({
        length2: length
      });
    }
    else if (side === 3) {
      this.setState({
        length3: length
      });
    } else {
      console.log("Unexpected side: " + side);
    }
  }
}

export default App;
