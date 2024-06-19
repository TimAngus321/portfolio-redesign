import { workExp } from "../types/workExpType";
import styles from "../style/workExpCard.module.scss";

const WorkExpCard = (props: workExp) => {
  const { title, desc } = props;

  return (
      <li className={styles?.workExpCard}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </li>
  );
};
export default WorkExpCard;
