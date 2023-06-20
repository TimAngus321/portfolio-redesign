import { workExp } from "../types/workExpType";

const WorkExpCard = (props: workExp) => {

    const { link, role, companyName, workPeriod, companyDesc} = props;

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <li className="work-exp-card">
          <h2 className="work-exp-role">{role}</h2>
          <h4 className="company-name">{companyName}</h4>
          <h4 className="work-period">{workPeriod}</h4>
          <p className="company-desc">{companyDesc}</p>
        </li>
      </a>
    );
}
export default WorkExpCard;
