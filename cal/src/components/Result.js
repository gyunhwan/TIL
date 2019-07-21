import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  render() {
    return (
      <div>
        <button
          id="addButton"
          className="btn"
          onClick={this.props.changeResult}
        >
          +
        </button>
        <button
          id="subButton"
          className="btn"
          onClick={this.props.changeResult}
        >
          -
        </button>
      </div>
    );
  }
}

Result.propTypes = {
  changeResult: PropTypes.func.isRequired
};

export default Result;
