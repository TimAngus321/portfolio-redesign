import React from "react";

class PersonalProjCard extends React.Component {
  render() {
    const { name, techStack, desc, link } = this.props.name;

    return (
      <div className="work-exp-card">
        <h4 className="name">{name}</h4>
        <p className="tech-stack">{techStack}</p>
        <p className="desc">{desc}</p>
        <a href={link} className="link">
          {name}
        </a>
      </div>
    );
  }
}
export default PersonalProjCard;
