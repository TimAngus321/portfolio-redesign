import React, { Component } from 'react';
import { routeConstants } from 'shared/constants';
import AllSkills from './all-skills';
import WorldSlider from './staggered-bars';
import MySkills from './my-skills';
import AllMySkills from './all-my-skills';
import AllTheSkills from './all-the-skills';


  class Skills extends Component {
 
   render() {

    return (    
      <div>
    <div className="skills-container">
    <h2 className="skills-title">Tech Stack</h2>
      <div className="falling-skills-container">
      <AllTheSkills />
      </div>
    </div>
</div>
    )
  }
}

export default Skills;