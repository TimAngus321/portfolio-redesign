import React, { Component } from 'react';

class Professional extends Component {
  constructor() {
    super();
    this.state = {
      name: 'AboutMe'
    };
  }

  render() {
    return <div className="about-me-info">
      I have worked for...
    </div>
  }
}

export default Professional;