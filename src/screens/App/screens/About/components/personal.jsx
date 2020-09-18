import React, { Component } from 'react';


class Personal extends Component {
  constructor() {
    super();
    this.state = {
      name: 'AboutMe'
    };
  }

  render() {
    return <div className="about-me-info">
      I love travelling, music, rock climbing and coding.
    </div>
  }
}

export default Personal;