import React from "react";

const WorkExpCard = ({ shopifyProj }) => {
  const { client, company, project, desc, link } = shopifyProj;

  return (
    <a
      href={link}
      className="test-link proj-card"
      target="_blank"
      rel="noopener noreferrer"
      style={{ alignSelf: "flex-end" }}
    >
      <div className="scroll-cards">
        <h3 className="client">{client}</h3>
        <h3 className="company">{company}</h3>
        <h4 className="project">{project}</h4>
        <p className="desc">{desc}</p>
      </div>
    </a>
  );
};
export default WorkExpCard;
