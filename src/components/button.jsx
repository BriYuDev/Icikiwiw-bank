import React, { Component } from 'react';

class Button extends Component {
  state = {};
  render() {
    return (
      <button
        type='button'
        className={`btn-gtstr py-4 px-6 bg-purple-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${this.props.styles}`}
      >
        Get Started
      </button>
    );
  }
}

export default Button;
