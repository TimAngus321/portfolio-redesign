import React from "react";

// Animate slide in when clicked

class WorkExpCard extends React.Component {
  render() {
    const { role, compnayName, workPeriod, companyDesc } = this.props.company;

    return (
      <li className="work-exp-card">
        <h2 className="work-exp-role">{role}</h2>
        <h4 className="company-name">{compnayName}</h4>
        <h4 className="work-period">{workPeriod}</h4>
        <p className="company-desc">{companyDesc}</p>
      </li>
    );
  }
}
export default WorkExpCard;
