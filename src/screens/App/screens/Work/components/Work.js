import React, { Component, useEffect, useRef } from 'react';
import { Timeline, Tween, SplitWords } from 'react-gsap';
import { gsap, TweenLite, TimelineLite } from 'gsap/all';

//TODO
// Redo animation on skills page but this time from a list with keys
// Then use timeline and tween to have certain keys animate, change color and enlarge
// to the middle of the right half of the screen

const skillSetStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const individualSkillStyle = {
  transform: 'rotate(90deg)', 
  transformOrigin: '0px 0% 0',
}

class Work extends Component {
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

  // constructor(props) {
  // super(props)
  // this.timeline = new TimelineLite;
  // }

  // componentDidMount(){
  //   this.timeline.staggerTo( this.skillSets,  0.5, { autoAlpha: 1, y: -20 }, 0.1 );
  // }

  // useEffect() => {
  //   const timeLine = gsap.timeline();
  //   timeline.to('.fullstack', {
  //     y: '100%',
  //     duration: 5,
  //   })
  // }

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

export default Work;