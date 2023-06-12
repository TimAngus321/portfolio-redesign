import { TransitionGroup } from "react-transition-group";
import styles from '../style/skillCard.module.scss';

const SkillCard = ({ skill }) => {
  const { name, image, styleClass, alt } = skill;

  return (
    <TransitionGroup component="li" className={styles.skillCard}>
      <img loading="lazy" className={`${styles.skillImage} ${styleClass}`} src={image} alt={alt} />
      <h3 className={styles.skillName}>{name}</h3>
    </TransitionGroup>
  );
};
export default SkillCard;
