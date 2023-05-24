import React from "react";

const WorkExpCard = ({ workProjects }) => {


  const { companyTitle, company, projectTitle, project, link, img } = workProjects;

  const cardStyle = { 
    backgroundImage: `url(${img} )`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    alignSelf: `flex-end`,
    height: `300px`,
    width: '100%',
    borderRadius: '10px 10px 0 0',
  }

  return (
    <a
      href={link}
      className="test-link proj-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{...cardStyle}}>
      </div>
      <div className="scroll-cards">
        <div className="company-info">
          <h3 className="company">{companyTitle}</h3>
          <p className="company-name">{company}</p>
        </div>
        <div className="project-info">
          <h3 className="project">{projectTitle}</h3>
          <p className="project-info">{project}</p>
        </div>
      </div>
    </a>
  );
};
export default WorkExpCard;
