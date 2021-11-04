import React, { useState } from 'react';
import frontendSkillSets from '../front-end-skills';
import SkillCard from './SkillCard';





  class Skills extends React.Component {


  state = {
    skillSets: {}
   }

  loadFrontEndSkills = () => {
   this.setState({ skillSets: frontendSkillSets})
  };
 

    //  const { onLoadFrontend, showFrontend, showBackend, showFullstack, showEccomerce, showMobile, showSoftskills } = this.state;

    render() {
    return (    
    <div className="skills-container">
    <div className="select-skills">
    <h2 className="skills-title">Tech Stack</h2>
    <div className="about-my-skills">
      <span 
      className="about-btn" 
      onClick={this.loadFrontEndSkills}
      >
      &nbsp;Front-end&nbsp;
      </span>
      <span
      className="about-btn" 
      // onClick={() => loadSkillComponent("showBackend")}
      >
      &nbsp;Backend&nbsp;
      </span>
      <span 
      className="about-btn" 
      // onClick={() => loadSkillComponent("showEccomerce")}
      >
      &nbsp;Shopify&nbsp;
      </span>
      <span 
      className="about-btn" 
      // onClick={() => loadSkillComponent("showFullstack")}
      >
      &nbsp;Fullstack&nbsp;
      </span>
      <span
      className="about-btn" 
      // onClick={() => loadSkillComponent("showMobile")}
      >
      &nbsp;Mobile Development&nbsp;
      </span>
    </div>
    </div>
       <div className="falling-skills-container">
      
      <div className="reveal-skills">
        <div className="selected-skillset">
          <ul className="skill-cards">
        {Object.keys(this.state.skillSets).map(key => 
        <SkillCard 
        key={key} 
        skill={this.state.skillSets[key]}
        image={this.state.skillSets[key]}
        />
        )}
        </ul>
        </div>
      </div>
      </div>
    </div>
    )
    }
  }


export default Skills;