import React, { Component, useRef, useEffect } from 'react';
import { routeConstants } from 'shared/constants';
import AllTheSkills from './all-the-skills';
import { Timeline, Tween } from 'react-gsap';

const skillSets = {
  frontend: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs"],
  backend: ["Ruby on Rails", "PostgreSQL", "Ruby", "SQL"],
  fullstack: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs","Ruby on Rails", "PostgreSQL", "Ruby", "SQL" ],
  eccomerce: ["Shopify", "Liquid", "Node.js", "AWS", "Lambda"],
  mobile: ["React Navtive"],
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
    <h4 className="about-my-skills">
      Although my most recent work exprience was primarily focused on
      <span 
      className="fade-in-skills" 
      onClick={() => this.hideComponent("showEccomerce")}
      // onMouseOver={() => this.hideComponent('showEccomerce')}
      >
      &nbsp;E-commerce&nbsp;
      </span>
      I am a 
      <span 
      className="fade-in-skills" 
      onClick={() => this.hideComponent("showFullstack")}
      // onMouseOver={() => this.hideComponent('showFullstack')}
      >
      &nbsp;Fullstack developer&nbsp;
      </span>
      with skillsets that covers
      <span 
      className="fade-in-skills" 
      onClick={() => this.hideComponent("showFrontend")}
      // onMouseOver={() => this.hideComponent('showFrontend')}
      >
      &nbsp;Front-end&nbsp;
      </span>
      as well as  
      <span
      className="fade-in-skills" 
      onClick={() => this.hideComponent("showBackend")}
      // onMouseOver={() => this.hideComponent('showBackend')}
      >
      &nbsp;Backend&nbsp;
      </span>
      . Additionally my previous experience working in the education sector
     has provided me with
     <span
      className="fade-in-skills" 
      onClick={() => this.hideComponent("showSoftskills")}
      // onMouseOver={() => this.hideComponent('showSoftskills')}
      >
      &nbsp;softskills&nbsp;
      </span>
      that help me excel at communicating 
      and working in teams. I am always learning new skills all 
      the time and hope soon to delve into
      <span
      className="fade-in-skills" 
      onClick={() => this.hideComponent("showMobile")}
      // onMouseOver={() => this.hideComponent('showMobile')}
      >
      &nbsp;Mobile Development&nbsp;
      </span>
      and 
      full-stack Javscript with the MERN stack.
    </h4>
    <p className="sub-heading-skills">
     * Click on a skillset (in orange) to see my various skillsets
    </p>
    </div>
      <div className="falling-skills-container">
      <AllTheSkills />
      <div className="reveal-skills">
        <div className="selected-skillset">
        {showFrontend && skillSets.frontend.join(' ')}
        {showBackend && skillSets.backend.join(' ')}
        {showFullstack && skillSets.fullstack.join(' ')}
        {showEccomerce && skillSets.eccomerce.join(' ')}
        {showSoftskills && skillSets.softskills.join(' ')}
        {showMobile && skillSets.mobile.join(' ')}
        </div>
      </div>
      </div>
    </div>
</div>
    )
  }
}

export default Skills;