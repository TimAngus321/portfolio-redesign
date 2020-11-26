import React, { Component, useEffect, useRef } from 'react';
import { Timeline, Tween, SplitWords } from 'react-gsap';
import { gsap, TweenLite, TimelineLite } from 'gsap/all';
// import { Timeline, Tween, SplitWords } from 'react-gsap';


const skillSetStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const individualSkillStyle = {
  transform: 'rotate(90deg)', 
  transformOrigin: '0px 0% 0',
}

class AllOfMySkills extends Component {
  state = {
    skillSets: [
        {id: "frontend", skillset: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs"] },
        {id: "backend",  skillset: ["Ruby on Rails", "PostgreSQL", "Ruby", "SQL"] },
        {id: "fullstack", skillset: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs","Ruby on Rails", "PostgreSQL", "Ruby", "SQL" ] },
        {id: "eccommerce", skillset: ["Shopify", "Liquid", "Node.js", "AWS", "Lambda"] },
        {id: "mobile", skillset: ["React Navtive", "HTML", "SCSS"] },
        {id: "softskills", skillset: ["German(B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician"] }
    ], 
  };

render() {
    return (
        <div className="animated-skills-container">
          {this.state.skillSets.map(({skillset, id}) => (
            <div className={id} style={skillSetStyle}>
              {skillset.map((skillset, skills) =>
               <p key={skills} style={individualSkillStyle}>
               {skillset}
               </p>
               )} 
            </div>
          ))
        }
        </div>
    )
  }
}

export default AllOfMySkills;