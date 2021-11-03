import React, { useState } from 'react';
import frontendSkillSets from '../front-end-skills';
import SkillCard from './front-end-skill-card';


  class Skills extends React.component {
  
  //   const [skillsComponent, setSkillComponent] = useState();
    
    

  //  const loadSkillComponent = async location => {
  //    const { default: skillsComponent } = await import(`/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/screens/App/screens/Skills/components/${location}`);
  //    setSkillComponent(skillsComponent)
  //  }

   state = {
    frontendSkillSets: {}
   }

   loadFrontEndSkills = () => {
     this.setState({ SkillCard: frontendSkillSets})
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
      onClick={this.props.loadFrontEndSkills}
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

        {<SkillCard />}
        </div>
      </div>
      </div>
    </div>
    )
    }
  }


export default Skills;