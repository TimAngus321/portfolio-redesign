import { TransitionGroup } from "react-transition-group";
import styles from "../style/skillCard.module.scss";
import { skills } from "../types/skillsetType";
import useSkills from "../hooks/useSkills";
// import { ColorExtractor } from "react-color-extractor";
import motion from "framer-motion";

const SkillCard = (props: skills) => {
  const { name, image, styleClass, alt, waterfall } = props;
  const {
    // skillLogoColors,
    getColorPalette,
    hoverColors,
    // waterfallColors,
  } = useSkills();

  return (
    <>
      <TransitionGroup
        component="li"
        className={`skillCard snake ${waterfall ? "active" : null}`}
        onMouseOver={() => getColorPalette(image)}
        // onMouseOver={null}
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
          // style={{
          //   backgroundImage: `linear-gradient(to right, ${hoverColors[0]}
          //   , ${hoverColors[1] ?? hoverColors[0]})`,
          // }}
          style={{
            backgroundImage: `linear-gradient(to right,
          ${waterfall[0]}, ${waterfall[1] ?? waterfall[0]})`,
          }}
        ></div>
        <div
          className={`tail right`}
          // style={{
          //   backgroundImage: `linear-gradient(to right, ${
          //     hoverColors[1] ?? hoverColors[0]
          //   }, ${hoverColors[2] ?? hoverColors[0]})`,
          // }}
          style={{
            backgroundImage: `linear-gradient(to right,
            ${waterfall[1] ?? waterfall[0]}, ${waterfall[2] ?? waterfall[0]})`,
          }}
        ></div>
        <div
          className={`tail bottom`}
          // style={{
          //   backgroundImage: `linear-gradient(to right, ${
          //     hoverColors[2] ?? hoverColors[0]
          //   }, ${hoverColors[3] ?? hoverColors[0]})`,
          // }}
          style={{
            backgroundImage: `linear-gradient(to right,
            ${waterfall[2] ?? waterfall[0]}, ${waterfall[3] ?? waterfall[0]})`,
          }}
        ></div>
        <div
          className={`tail left`}
          // style={{
          //   backgroundImage: `linear-gradient(to right, ${
          //     hoverColors[4] ?? hoverColors[0]
          //   }, ${hoverColors[5] ?? hoverColors[0]})`,
          // }}
          style={{
            backgroundImage: `linear-gradient(to right,
            ${waterfall[4] ?? waterfall[0]}, ${waterfall[5] ?? waterfall[0]})`,
          }}
        ></div>
      </TransitionGroup>
    </>
  );
};

export default SkillCard;
