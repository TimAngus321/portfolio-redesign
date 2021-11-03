import React from 'react';
import frontendSkillSets from '../front-end-skills';



const skillCard = () => {

const {name, image} = frontendSkillSets;

 <div>
    {Object.keys(frontendSkillSets).map(key => 
    <li>
    <h3>{name}</h3>
    <image src={image} alt={name}></image>
    </li>
    )}

</div>

    }

export default skillCard;