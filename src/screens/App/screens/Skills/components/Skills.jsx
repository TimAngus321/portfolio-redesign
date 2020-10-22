import React, { Component } from 'react';
import { routeConstants } from 'shared/constants';
import AllTheSkills from './all-the-skills';

const skillSets = {
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
      this.state = {
        skillSets: {
          name: "skillSet",
          showFrontend: false,
          showBackend: false,
          showFullstack: false,
          showEccomerce: false,
          showMobile: false,
          showSoftskills: false
        } 
      };
      this.hideComponent = this.hideComponent.bind(this);
    }

    

    hideComponent(name) {
      switch (name) {
        case "showFrontend": 
        this.setState({ showFrontend: !this.state.showFrontend });
        this.setState({ 
          showBackend: false, 
          showFullstack: false,
          showEccomerce: false,
          showMobile: false,
          showSoftskills: false
        });
        break;
        case "showBackend":
        this.setState({ showBackend: !this.state.showBackend });
        this.setState({ 
          showFrontend: false,
          showFullstack: false,
          showEccomerce: false,
          showMobile: false,
          showSoftskills: false
        });
        break;
        case "showFullstack":
        this.setState({ showFullstack: !this.state.showFullstack });
        this.setState({
          showFrontend: false,
          showBackend: false,
          showEccomerce: false,
          showMobile: false,
          showSoftskills: false
        });
        break;
        case "showEccomerce":
        this.setState({ showEccomerce: !this.state.showEccomerce });
        this.setState({
          showFrontend: false,
          showBackend: false,
          showFullstack: false,
          showMobile: false,
          showSoftskills: false
        });
        break;
        case "showMobile":
        this.setState({ showMobile: !this.state.showMobile });
        this.setState({
          showFrontend: false,
          showBackend: false,
          showFullstack: false,
          showEccomerce: false,
          showSoftskills: false
        });
        break;
        case "showSoftskills":
        this.setState({ showSoftskills: !this.state.showSoftskills });
        this.setState({
          showFrontend: false,
          showBackend: false,
          showFullstack: false,
          showMobile: false,
          showEccomerce: false
        });
        break;
        default:
        return null;
      }
    }
 
   render() {
     const { showFrontend, showBackend, showFullstack, showEccomerce, showMobile, showSoftskills } = this.state;

    return (    
      <div>
    <div className="skills-container">
    <div className="select-skills">
    <h2 className="skills-title">Tech Stack</h2>
    <h3 className="about-my-skills">
      As a 
      <span 
      className="fade-in-skills" 
      onClick={() => this.hideComponent("showFullstack")}
      onMouseOver={() => this.hideComponent('showFullstack')}>
      &nbsp;Fullstack developer&nbsp;
      </span>
      my skillset covers
      the
      <span 
      className="fade-in-skills" 
      onClick={() => this.hideComponent("showFrontend")}
      onMouseOver={() => this.hideComponent('showFrontend')}>
      &nbsp;Front-end&nbsp;
      </span>
      as well as the 
      <span
      className="fade-in-skills" 
      onClick={() => this.hideComponent("showBackend")}
      onMouseOver={() => this.hideComponent('showBackend')}>
      &nbsp;Backend&nbsp;
       </span>
      . Additionally
      I have softskills and I am learning new skills all 
      the time. 
    </h3>
    <p className="sub-heading-skills">
      Hover or click on a skillset to see my various skillsets
    </p>
    </div>
      <div className="falling-skills-container">
      <AllTheSkills />
      {showFrontend && skillSets.frontend}
      {showBackend && skillSets.backend}
      {showFullstack && skillSets.fullstack}
      </div>
    </div>
</div>
    )
  }
}

export default Skills;