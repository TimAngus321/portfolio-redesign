import React from "react";

class WorkExpCard extends React.Component {
  render() {
    const { client, company, project, desc, link } = this.props.client;

    return (
      <div className="proj-card">
        <h3 className="client">{client}</h3>
        <h3 className="company">{company}</h3>
        <h4 className="project">{project}</h4>
        <p className="desc">{desc}</p>
        <a href={link} className="link">
          {company}
        </a>
      </div>
    );
  }
}
export default WorkExpCard;
