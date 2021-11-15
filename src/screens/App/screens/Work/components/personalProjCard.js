import React from "react";

class PersonalProjCard extends React.Component {
  render() {
    const { name, techStack, desc, link } = this.props.name;

    return (
      <a
        href={link}
        className="test-link proj-card"
        target="_blank"
        rel="noopener noreferrer"
        style={{zIndex: '99999', position: "relative"}}
      >
        <div>
          <h4 class="name">{name}</h4>
          <p className="tech-stack">{techStack}</p>
          <p className="desc">{desc}</p>
        </div>
      </a>
    );
  }
}

export default PersonalProjCard;
