import React from 'react';
import frontendSkillSet from '../front-end-skills';
import backendSkillSet from '../backend-skills';
import shopifySkillSet from '../shopify-skills'
import mobileSkills from '../mobile-dev-skills';
import SkillCard from './SkillCard';

  class Skills extends React.Component {


  state = {
    skillSets: frontendSkillSet
   }

  loadFrontEndSkills = () => {
   this.setState({ skillSets: frontendSkillSet})
  };

  loadBackendSkills = () => {
    this.setState({ skillSets: backendSkillSet})
  }

  loadShopifySkills = () => {
    this.setState({ skillSets: shopifySkillSet})
  }
 
  loadMobileSkills = () => {
    this.setState({ skillSets: mobileSkills})
  }

    //  const { onLoadFrontend, showFrontend, showBackend, showFullstack, showEccomerce, showMobile, showSoftskills } = this.state;

    render() {
    return (
      <div className="photo-quote">  
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
     onClick={this.loadBackendSkills}
      >
      &nbsp;Backend&nbsp;
      </span>
      <span 
      className="about-btn" 
      onClick={this.loadShopifySkills}
      >
      &nbsp;Shopify&nbsp;
      </span>
      <span
      className="about-btn" 
       onClick={this.loadMobileSkills}
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
    </div>
    )
    }
  }


export default Skills;