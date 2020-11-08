import React, { Component, useEffect, useRef } from 'react';
import { Timeline, Tween, SplitWords } from 'react-gsap';
import { gsap, TweenLite } from 'gsap/all';

//TODO
// Redo animation on skills page but this time from a list with keys
// Then use timeline and tween to have certain keys animate, change color and enlarge
// to the middle of the right half of the screen


class Work extends Component {
  constructor(props) {
    super(props);
 
  this.allMySkills = {
    skillSets: [
        {frontend: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs"] },
        {backend: ["Ruby on Rails", "PostgreSQL", "Ruby", "SQL"] },
        {fullstack: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs","Ruby on Rails", "PostgreSQL", "Ruby", "SQL" ] },
        {eccomerce: ["Shopify", "Liquid", "Node.js", "AWS", "Lambda"] },
        {mobile: ["React Navtive", "HTML", "SCSS"] },
        {softskills: ["German(B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician"] }
    ]
  }
  this.fallingSkills = null;
 }

 componentDidMount() {
   this.fallingSkills = TweenLite.to(this.allMySkills, 1, { x: 100, y: 100});
 }




render() {
    return (
        <div className="animated-skills-container">

             {this.allMySkills.skillSets.map(skillset =>
                  <div key={skillset.id}>{skillset.frontend}</div>
                )}
                {this.allMySkills.skillSets.map(skillset =>
                  <div key={skillset.id}>{skillset.backend}</div>
                )}
                {this.allMySkills.skillSets.map(skillset =>
                  <div key={skillset.id}>{skillset.fullstack}</div>
                )}
                {this.allMySkills.skillSets.map(skillset =>
                  <div key={skillset.id}>{skillset.eccomerce}</div>
                )}
                {this.allMySkills.skillSets.map(skillset =>
                  <div key={skillset.id}>{skillset.mobile}</div>
                )}
                {this.allMySkills.skillSets.map(skillset =>
                  <div key={skillset.id}>{skillset.softskills}</div>
                )}
                {/* <div style={{color: 'white'}} ref={div => this.allMySkills = div} /> */}

        </div>
    )
}
}

export default Work;
