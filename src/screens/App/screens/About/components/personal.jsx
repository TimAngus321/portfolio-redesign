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
      I love travelling and I've visited many coutries around Europe, Asia and and states in the U.S.A
      <br/><br/>
      I'm a big fan of music and love live music and creating music. 
      <br/><br/>
      I always love trying new sports and recently I have fallen back in love with:
      Rock climbing, running and biking. 
      <br/><br/>
      To keep my mind sharp I enjoy reading news and dev articles, novels and watching documenteries (not just coding tutorials!)
      <br/><br/>
      
    </div>
  }
}

export default Personal;