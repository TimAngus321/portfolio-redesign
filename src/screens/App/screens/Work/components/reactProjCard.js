import React from "react";

const ReactProjCard = ({ allReactApps }) => {
  const { link, name, techStack, desc } = allReactApps;

  return (
    <a
      href={link}
      className="test-link proj-card"
      target="_blank"
      rel="noopener noreferrer"
      style={{ alignSelf: "flex-end" }}
    >
      <div className="scroll-cards">
        <h4 class="name">{name}</h4>
        <p className="tech-stack">{techStack}</p>
        <p className="desc">{desc}</p>
      </div>
    </a>
  );
};

export default ReactProjCard;
