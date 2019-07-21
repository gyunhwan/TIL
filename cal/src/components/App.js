import React, { Component } from 'react';
import InputNum from './InputNum';
import Result from './Result';
import Position from './Position';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [0],
      position: 0,
      inputNum: 0,
      undoAbled: true,
      redoAbled: true
    };
  }
  changeInputNum = e => {
    this.setState({
      inputNum: e.target.value
    });
  };
  changeResult = e => {
    switch (e.target.id) {
      case 'addButton':
        this.setState({
          result: [
            ...this.state.result,
            parseInt(this.state.result[this.state.position]) +
              parseInt(this.state.inputNum)
          ],
          position: this.state.result.length,
          redoAbled: true,
          undoAbled: false
        });
        break;
      case 'subButton':
        this.setState({
          result: [
            ...this.state.result,
            parseInt(this.state.result[this.state.position]) -
              parseInt(this.state.inputNum)
          ],
          position: this.state.result.length,
          redoAbled: true,
          undoAbled: false
        });

      case this.default:
        break;
    }
  };
  changePosition = e => {
    switch (e.target.id) {
      case 'undoButton':
        if (this.state.position === 1) {
          this.setState({
            position: this.state.position - 1,
            undoAbled: true,
            redoAbled: false
          });
        } else {
          this.setState({
            position: this.state.position - 1,
            redoAbled: false
          });
        }
        break;
      case 'redoButton':
        if (this.state.position === this.state.result.length - 2) {
          this.setState({
            position: this.state.position + 1,
            undoAbled: false,
            redoAbled: true
          });
        } else {
          this.setState({
            position: this.state.position + 1,
            undoAbled: false
          });
        }
    }
  };
  render() {
    return (
      <div className="container">
        <InputNum
          num={this.state.inputNum}
          result={this.state.result[this.state.position]}
          changeInputNum={this.changeInputNum}
        />
        <div className="btnGroup">
          <Result changeResult={this.changeResult} />
          <Position
            undoAbled={this.state.undoAbled}
            redoAbled={this.state.redoAbled}
            changePosition={this.changePosition}
          />
        </div>
      </div>
    );
  }
}

export default App;
