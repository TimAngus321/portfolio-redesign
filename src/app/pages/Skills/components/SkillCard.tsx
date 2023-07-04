import { TransitionGroup } from "react-transition-group";
import styles from "../style/skillCard.module.scss";
import { skills } from "../types/skillsetType";
import useSkills from "../hooks/useSkills";
import { ColorExtractor } from "react-color-extractor";

const SkillCard = (props: skills) => {
  const { name, image, styleClass, alt } = props;
  const { getColors, handleImageHover, selectedImage } = useSkills();

  return (
    <>
      <TransitionGroup
        component="li"
        className={styles?.skillCard}
        onMouseOver={() => handleImageHover(image)}
      >
        <img
          loading="lazy"
          className={`${styles?.skillImage} ${styleClass}`}
          src={image}
          alt={alt}
        />
        <h3 className={styles?.skillName}>{name}</h3>
      </TransitionGroup>
      <ColorExtractor src={selectedImage} getColors={getColors} />
    </>
  );
};
export default SkillCard;
