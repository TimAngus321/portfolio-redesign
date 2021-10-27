import React, { Component, useRef, useEffect } from 'react';
import { routeConstants } from 'shared/constants';
import AllTheSkills from './all-the-skills';
import { Timeline, Tween } from 'react-gsap';
import AnimatedStatefulSkills from './all-my-skills';
import SkillCard from './skill-card';
import frontEndSkills from '../front-end-skills.js';


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
          showSoftskills: false,
          onLoadFrontend: true,
        } 
      };
      this.toggleComponent = this.toggleComponent.bind(this);
    }
    

    toggleComponent(name) {
      switch (name) {
        case "showFrontend": 
        this.setState({ showFrontend: !this.state.showFrontend });
        this.setState({ 
          showBackend: false, 
          showFullstack: false,
          showEccomerce: false,
          showMobile: false,
          showSoftskills: false,
          onLoadFrontend: false
        });
        break;
        case "showBackend":
        this.setState({ showBackend: !this.state.showBackend });
        this.setState({ 
          showFrontend: false,
          showFullstack: false,
          showEccomerce: false,
          showMobile: false,
          showSoftskills: false,
          onLoadFrontend: false
        });
        break;
        case "showFullstack":
        this.setState({ showFullstack: !this.state.showFullstack });
        this.setState({
          showFrontend: false,
          showBackend: false,
          showEccomerce: false,
          showMobile: false,
          showSoftskills: false,
          onLoadFrontend: false,
        });
        break;
        case "showEccomerce":
        this.setState({ showEccomerce: !this.state.showEccomerce });
        this.setState({
          showFrontend: false,
          showBackend: false,
          showFullstack: false,
          showMobile: false,
          showSoftskills: false,
          onLoadFrontend: false,
        });
        break;
        case "showMobile":
        this.setState({ showMobile: !this.state.showMobile });
        this.setState({
          showFrontend: false,
          showBackend: false,
          showFullstack: false,
          showEccomerce: false,
          showSoftskills: false,
          onLoadFrontend: false,
        });
        break;
        case "showSoftskills":
        this.setState({ showSoftskills: !this.state.showSoftskills });
        this.setState({
          showFrontend: false,
          showBackend: false,
          showFullstack: false,
          showMobile: false,
          showEccomerce: false,
          onLoadFrontend: false,
        });
        break;
        default:
        return null;
      }
    }

    renderFrontend = () => {
      alert('test');
    }
 
   render() {
     const { onLoadFrontend, showFrontend, showBackend, showFullstack, showEccomerce, showMobile, showSoftskills } = this.state;

    return (    
    <div className="skills-container">
    <div className="select-skills">
    <h2 className="skills-title">Tech Stack</h2>
    <div className="about-my-skills">
      <span 
      className="about-btn" 
      onClick={() => this.toggleComponent("showFrontend")}
      >
      &nbsp;Front-end&nbsp;
      </span>
      <span
      className="about-btn" 
      onClick={() => this.toggleComponent("showBackend")}
      >
      &nbsp;Backend&nbsp;
      </span>
      <span 
      className="about-btn" 
      onClick={() => this.toggleComponent("showEccomerce")}
      >
      &nbsp;Shopify&nbsp;
      </span>
      <span 
      className="about-btn" 
      onClick={() => this.toggleComponent("showFullstack")}
      >
      &nbsp;Fullstack&nbsp;
      </span>
      <span
      className="about-btn" 
      onClick={() => this.toggleComponent("showMobile")}
      >
      &nbsp;Mobile Development&nbsp;
      </span>
    </div>
    </div>
       <div className="falling-skills-container">
      
      <div className="reveal-skills">
        <div className="selected-skillset">
        {onLoadFrontend && <SkillCard  />}
        {showFrontend && <SkillCard frontEndSkills={frontEndSkills.skill1.name} image={frontEndSkills.skill1.image} />}
        {/* {showBackend && skillSets.backend.join(' ')}
        {showFullstack && skillSets.fullstack.join(' ')}
        {showEccomerce && skillSets.eccomerce.join(' ')}
        {showSoftskills && skillSets.softskills.join(' ')}
        {showMobile && skillSets.mobile.join(' ')} */}
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Skills;