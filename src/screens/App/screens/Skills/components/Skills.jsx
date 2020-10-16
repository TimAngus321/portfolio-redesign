import React, { Component } from 'react';
import { routeConstants } from 'shared/constants';
import AllSkills from './all-skills';
import WorldSlider from './staggered-bars';
import MySkills from './my-skills';
import AllMySkills from './all-my-skills';
import AllTheSkills from './all-the-skills';
import AboutSkills from './about-skills';


  class Skills extends Component {
 
   render() {

    return (    
      <div>
    <div className="skills-container">
    <div className="select-skills">
    <h2 className="skills-title">Tech Stack</h2>
    <h3 className="specific-skillsets">
      As a Fullstack developer my skillset covers
      the Front-end as well as the Backend. Additionally
      I have softskills and I am learning new skills all 
      the time. 
    </h3>
    <p className="sub-heading-skills">
      Hover or click on a skillset to see what I know
    </p>
    </div>
      <div className="falling-skills-container">
      <AllTheSkills />
      </div>
    </div>
</div>
    )
  }
}

export default Skills;