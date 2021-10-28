import React from 'react';
import frontendSkillSets from '../front-end-skills';

const SkillCard = () => (
    <li>
        <h3>{frontendSkillSets.skill1.name}</h3>
        <img src={frontendSkillSets.skill1.image} alt="Skill"></img>
        
    </li>

)

export default SkillCard;