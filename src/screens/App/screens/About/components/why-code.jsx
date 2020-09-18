import React, { Component } from 'react';


class WhyCode extends Component {
  constructor() {
    super();
    this.state = {
      name: 'AboutMe'
    };
  }

  render() {
    return <div className="about-me-info">
      I started coding at a college in Phuket when I was a website administrator...
    </div>
  }
}

export default WhyCode;