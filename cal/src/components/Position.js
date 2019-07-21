import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Position extends Component {
  render() {
    return (
      <div>
        <button
          id="undoButton"
          className="btn"
          disabled={this.props.undoAbled}
          onClick={this.props.changePosition}
        >
          Undo
        </button>
        <button
          id="redoButton"
          className="btn"
          disabled={this.props.redoAbled}
          onClick={this.props.changePosition}
        >
          Redo
        </button>
      </div>
    );
  }
}

Position.propTypes = {
  undoAbled: PropTypes.bool.isRequired,
  redoAbled: PropTypes.bool.isRequired,
  changePosition: PropTypes.func.isRequired
};

export default Position;
