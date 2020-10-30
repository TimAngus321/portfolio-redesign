import React, { Component } from 'react';
import { gsap } from 'gsap';
// import SkillSets from './skills-array.js';

class AnimatedStatefulSkills extends Component {
    state = {
        skillSets: [
            {frontend: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs"] },
            {backend: ["Ruby on Rails", "PostgreSQL", "Ruby", "SQL"] },
            {fullstack: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs","Ruby on Rails", "PostgreSQL", "Ruby", "SQL" ] },
            {eccomerce: ["Shopify", "Liquid", "Node.js", "AWS", "Lambda"] },
            {mobile: ["React Navtive", "HTML", "SCSS"] },
            {softskills: ["German(B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician"] }
        ]
    }

    render() {
        return (
            <div>
                {this.state.skillSets.map(skillset => 
                    <div key={skillset.id}>{skillset.frontend}</div>
                )}
            </div>
        )
    }
}




export default AnimatedStatefulSkills;