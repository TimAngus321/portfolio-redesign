import React from 'react';
import frontEndSkills from '../front-end-skills';

const SkillCard = ({frontEndSkills, image }) => (
    <li>
        <h3>{frontEndSkills}</h3>
        <img src={image} alt="Skill"></img>
        
    </li>

)

export default SkillCard;