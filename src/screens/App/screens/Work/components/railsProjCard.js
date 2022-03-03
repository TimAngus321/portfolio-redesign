import React from "react";

const RailsProjCard = ({ allRailsProj }) => {
  const { link, name, techStack, desc } = allRailsProj;

  return (
    <a
      href={link}
      className="test-link proj-card"
      target="_blank"
      rel="noopener noreferrer"
      style={{ alignSelf: "flex-end" }}
    >
      <div className="scroll-cards">
        <h4 className="name">{name}</h4>
        <p className="tech-stack">{techStack}</p>
        <p className="desc">{desc}</p>
      </div>
    </a>
  );
};

export default RailsProjCard;
