import React from "react";
import { TransitionGroup } from "react-transition-group";

// Animate slide in when clicked

class SkillCard extends React.Component {
  render() {
    const { name, image, image2, alt, alt2 } = this.props.skill;

    return (

     
    <TransitionGroup
    component="li"
    className="skill-card">

        <img className="skill-image" src={image} alt={alt} />
        <img className="skill-image" src={image2} alt={alt2} />
        <h3 className="skill-name">{name}</h3>

        </TransitionGroup>

    );
  }
}
export default SkillCard;
