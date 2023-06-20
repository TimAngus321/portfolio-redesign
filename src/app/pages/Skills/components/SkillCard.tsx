import { TransitionGroup } from "react-transition-group";
import styles from "../style/skillCard.module.scss";

const SkillCard = (skillSet: any) => {
  const { name, image, styleClass, alt } = skillSet?.skill;

  return (
      <TransitionGroup component="li" className={styles.skillCard}>
        <img
          loading="lazy"
          className={`${styles.skillImage} ${styleClass}`}
          src={image}
          alt={alt}
        />
        <h3 className={styles.skillName}>{name}</h3>
      </TransitionGroup>
  );
};
export default SkillCard;
