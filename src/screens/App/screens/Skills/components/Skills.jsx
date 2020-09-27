import React, { Component } from 'react';
import { routeConstants } from 'shared/constants';
import AllSkills from './all-skills';

  class Skills extends Component {
    
    
   render() {

    return (
    <div className="skills-container">
    <h2 className="skills-title">Tech Stack</h2>
    {/* <h2 className="front-end-circle">Frontend</h2>
    <h2 className="back-end-circle">Backend</h2>
    <h2 className="ecommerce-circle">E-commerce</h2>
    <h2 className="UI-UX-circle">UI/UX</h2>
    <h2 className="dev-skills">Dev Skills</h2> */}
      <div className="falling-skills-container">
      <AllSkills />
      </div>
    </div>

    )
  }
}

export default Skills;