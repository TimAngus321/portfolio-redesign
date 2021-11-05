import React from "react";

// Todo create card component (style work)
// Animate slide in when clicked

class SkillCard extends React.Component {
  render() {
    const { name, image, alt } = this.props.skill;

    return (
      <li className="skill-card">
        <img className="skill-image" src={image} alt={alt} />
        <h3 className="skill-name">{name}</h3>
      </li>
    );
  }
}
export default SkillCard;
