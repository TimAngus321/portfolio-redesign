import React from "react";

const WorkExpCard = (props) => {

    const { role, compnayName, workPeriod, companyDesc, link } = props.company;

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <li className="work-exp-card">
          <h2 className="work-exp-role">{role}</h2>
          <h4 className="company-name">{compnayName}</h4>
          <h4 className="work-period">{workPeriod}</h4>
          <p className="company-desc">{companyDesc}</p>
        </li>
      </a>
    );
}
export default WorkExpCard;
