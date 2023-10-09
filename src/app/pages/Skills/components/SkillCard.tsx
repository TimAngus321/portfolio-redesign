import { AnimatePresence, motion } from "framer-motion";
import useSkills from "../hooks/useSkills";
import styles from "../style/skillCard.module.scss";
import { skills } from "../types/skillsetType";

const SkillCard = (props: skills) => {
  const { name, image, styleClass, alt, waterfall } = props;
  const { triggerHover } = useSkills();

  return (
    <AnimatePresence>
      <motion.li
        className={`skillCard snake `}
        onMouseOver={() => triggerHover()}
      >
        <div className="inner">
          <img
            loading="lazy"
            className={`${styles?.skillImage} ${styleClass}`}
            src={image}
            alt={alt}
          />
          <h3 className={styles?.skillName}>{name}</h3>
        </div>

        <div
          className={`tail top`}
          style={{
            backgroundImage: `linear-gradient(to right,
          ${waterfall[0]}, ${waterfall[1] ?? waterfall[0]})`,
          }}
        ></div>
        <div
          className={`tail right`}
          style={{
            backgroundImage: `linear-gradient(to right,
            ${waterfall[1] ?? waterfall[0]}, ${waterfall[2] ?? waterfall[0]})`,
          }}
        ></div>
        <div
          className={`tail bottom`}
          style={{
            backgroundImage: `linear-gradient(to right,
            ${waterfall[2] ?? waterfall[0]}, ${waterfall[3] ?? waterfall[0]})`,
          }}
        ></div>
        <div
          className={`tail left`}
          style={{
            backgroundImage: `linear-gradient(to right,
            ${waterfall[4] ?? waterfall[0]}, ${waterfall[5] ?? waterfall[0]}, ${waterfall[6] ?? waterfall[0]})`,
          }}
        ></div>
      </motion.li>
    </AnimatePresence>
  );
};

export default SkillCard;
