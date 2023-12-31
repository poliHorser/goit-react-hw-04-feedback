import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className='sect'>
        {this.props.title}
        {this.props.children}
      </div>
    );
  }
}

export default Section;
