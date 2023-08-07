// import { TransitionGroup } from "react-transition-group";
import styles from "../style/skillCard.module.scss";
import { skills } from "../types/skillsetType";
import useSkills from "../hooks/useSkills";
// import { ColorExtractor } from "react-color-extractor";
import { motion, AnimatePresence } from "framer-motion";
import useFramerAnimation from "../hooks/useFramerAnimation";

const SkillCard = (props: skills) => {
  const { name, image, styleClass, alt, waterfall } = props;
  const {
    // skillLogoColors,
    getColorPalette,
    hoverColors,
    // controls,
    // waterfallColors,
  } = useSkills();
  // const { liVariants } = useFramerAnimation();


  return (
    <AnimatePresence>
    <motion.li
      className={`skillCard snake `}
      onMouseOver={() => getColorPalette(image)}
      // variants={liVariants}
      // animate={{ transition: { staggerChildren: 0.3, ['--block' as string]: '100%' },}}
     
        
    
      // style={{['--block' as string]: '100%' }}
      // style={
      //   {
      //   `--block`: 100%, 
      //   boxShadow: `inset 0 0 0 var(--block) ${waterfall[0]}`} as customCSS
      // }

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
    </motion.li>
    </AnimatePresence>
  );
};

export default SkillCard;
