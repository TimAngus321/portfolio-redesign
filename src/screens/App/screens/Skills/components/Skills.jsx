import React, { Component } from 'react';
import { routeConstants } from 'shared/constants';
import AllSkills from './all-skills';

  class Skills extends Component {
    
    
   render() {

    return (
    <div className="skills-container">
    <h2 className="skills-title">Tech Stack</h2>
      <div className="falling-skills-container">
      <AllSkills />
      </div>
    </div>

    )
  }
}

export default Skills;