import React from "react";
import { TransitionGroup } from "react-transition-group";

const SkillCard = ({ skill }) => {
  const { name, image, styleClass, alt } = skill;

  return (
    <TransitionGroup component="li" className="skill-card">
      <img className={`skill-image ${styleClass}`} src={image} alt={alt} />
      <h3 className="skill-name">{name}</h3>
    </TransitionGroup>
  );
};
export default SkillCard;
