import skillPageStyle from "../style/skillCardPageStyle.module.scss";
import SkillCard from "./SkillCard";
import useFramerAnimation from "../hooks/useFramerAnimation";
import useSkills from "../hooks/useSkills";

const SkillCards = () => {

const {parentAnimation, isPresent, safeToRemove, scope, animate} = useFramerAnimation();
const { skillSet } = useSkills();

return (

<div className={skillPageStyle?.revealedSkillsContainer}>
<div className={skillPageStyle?.revealSkills}>
  <div className={skillPageStyle?.selectedSkillset}>
    
      <ul
        className="skill-card"
        // variants={parentAnimation}
        // initial="initial"
        // animate="animate"
        // exit="exit"
        // initial: {
        //   opacity: 1,
        //   x: "220%",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   ease: "easeInOut",
        // },
        // animate: {
        //   transition: {
        //     duration: 1,
        //     ease: "easeInOut",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     type: "spring",
        //     bounce: 0.3,
        //   },
        //   opacity: 1,
        //   x: "0%",
        // },
        // exit: {
        //   opacity: 0,
        //   x: "220%",
        //   transition: {
        //     duration: 0.3,
        //     ease: "easeInOut",
        //   },
        // },
        //   transition: {
        //     duration: 0.7,
        //     ease: "easeInOut",
        //   }
      >
        {Object.keys(skillSet).map((key, i) => (
          <SkillCard
            key={i}
            name={skillSet[i]?.name}
            image={skillSet[i]?.image}
            alt={skillSet[i]?.alt}
            styleClass={skillSet[i]?.styleClass}
            // waterfall={skillSet[i]?.waterfall}
          />
        ))}
      </ul>
  </div>
</div>
</div>

)
        }

        export default SkillCards;

