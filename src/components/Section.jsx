import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div>
        <h2>Please leave your feedback</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
