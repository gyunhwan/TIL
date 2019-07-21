import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNum extends Component {
  render() {
    return (
      <div className="container">
        <div id="value" className="counter">
          {this.props.result}
        </div>
        <input className="input" onChange={this.props.changeInputNum} />
      </div>
    );
  }
}

InputNum.propTypes = {
  result: PropTypes.number.isRequired,
  changeInputNum: PropTypes.func.isRequired
};

export default InputNum;
