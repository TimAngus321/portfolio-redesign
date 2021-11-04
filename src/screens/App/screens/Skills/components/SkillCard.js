import React from 'react';

class SkillCard extends React.Component {

    render() {

        const {name, image, alt} = this.props.skill;

        return (
           <li className="skill-card">
               <h3 className="skill-name">
                {name}
               </h3>
            <img src={image} alt={alt} className="skill-image" />
           </li> 
        )
    }

  
}
export default SkillCard;
