import React, { Component } from 'react';
import { routeConstants } from 'shared/constants';
import AllTheSkills from './all-the-skills';

const SkillSets = {
  frontend: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs"],
  backend: ["Ruby on Rails", "PostgreSQL", "Ruby", "SQL"],
  fullstack: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs","Ruby on Rails", "PostgreSQL", "Ruby", "SQL" ],
  eccomerce: ["Shopify", "Liquid", "Node.js", "AWS", "Lambda"],
  mobile: ["React Navtive", "HTML", "SCSS"],
  softskills: ["German(B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician"]
  
} 

  class Skills extends Component {
    constructor() {
      super();

    }
 
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