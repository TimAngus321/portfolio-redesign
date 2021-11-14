import React from "react";

class PersonalProjCard extends React.Component {
  render() {
    const { name, techStack, desc, link } = this.props.name;

    return (
      <div
        className="proj-card"
        onclick={`window.location=${link}`}
        style={{ cursor: "pointer;" }}
      >
        <h4 class="name">{name}</h4>
        <p className="tech-stack">{techStack}</p>
        <p className="desc">{desc}</p>
      </div>
    );
  }
}
export default PersonalProjCard;
