import React, { Component } from 'react';

import './Section.css'
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