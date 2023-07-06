import { workExp } from "../types/workExpType";
import styles from '../style/workExpCard.module.scss';

const WorkExpCard = (props: workExp) => {

    const { link, role, companyName, workPeriod, companyDesc} = props;

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <li className={styles?.workExpCard}>
          <h2>{role}</h2>
          <h4>{companyName}</h4>
          <h4>{workPeriod}</h4>
          <p>{companyDesc}</p>
        </li>
      </a>
    );
}
export default WorkExpCard;
