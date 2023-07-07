import { TransitionGroup } from "react-transition-group";
import styles from "../style/skillCard.module.scss";
import { skills } from "../types/skillsetType";
import useSkills from "../hooks/useSkills";
import { ColorExtractor } from "react-color-extractor";

const SkillCard = (props: skills) => {
  const { name, image, styleClass, alt } = props;
  const { getColors, handleImageHover, selectedImage, skillLogoColors } =
    useSkills();

  return (
    <>
      <TransitionGroup
        component="li"
        className={`skillCard snake`}
        onMouseOver={() => handleImageHover(image)}
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
          className="tail top"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              skillLogoColors?.colors[0]
            }, ${skillLogoColors?.colors[1] ?? skillLogoColors?.colors[0]} )`,
          }}
        ></div>
        <div
          className="tail right"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              skillLogoColors?.colors[1] ?? skillLogoColors?.colors[0]
            }, ${skillLogoColors?.colors[2] ?? skillLogoColors?.colors[0]})`,
          }}
        ></div>
        <div
          className="tail bottom"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              skillLogoColors?.colors[2] ?? skillLogoColors?.colors[0]
            }, ${skillLogoColors?.colors[3] ?? skillLogoColors?.colors[0]})`,
          }}
        ></div>
        <div
          className="tail left"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              skillLogoColors?.colors[4] ?? skillLogoColors?.colors[0]
            }, ${skillLogoColors?.colors[5] ?? skillLogoColors?.colors[0]})`,
          }}
        ></div>
      </TransitionGroup>
      <ColorExtractor src={selectedImage} getColors={getColors} />
    </>
  );
};
export default SkillCard;
