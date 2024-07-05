import strings from "app/constants/strings";
import { AnimatePresence, motion } from "framer-motion";
import SEO from "../../../components/SEOComponent/SEO";
import SkillCard from "../components/SkillCard";
import useSkills from "../hooks/useSkills";
import "../style/skillCardAnimations.scss";
import skillPageStyle from "../style/skillCardPageStyle.module.scss";
import sliderButtonsData from "../data/sliderBtnData";
import SliderBtn from "../../../components/SliderButton/SliderBtn";

const Skills = () => {
  const { navigate, skillSet, scope, updateSkillSet, highlightSkillset } =
    useSkills();

  return (
    <section className={skillPageStyle?.pageContainerSkills}>
      <SEO
        title={`Tim Angus's Porftolio - Skills Page`}
        description={`Skill page of Timothy Angus's portfolio. Discover all of my technical skills with some fun animations`}
        link={`https://tim-angus.com/skills`}
      />
      <div className={skillPageStyle?.skillsContainer}>
        <div className={skillPageStyle?.selectSkillsContainer}>
          <div className={skillPageStyle?.selectSkills}>
            <header>
              <h1 className={skillPageStyle?.skillsTitle}>Tech Stack</h1>

              <p className={skillPageStyle?.skillsBlurb}>
                This is my current tech stack and what I'm learning. I've built
                and improved lots of incredible products and projects with this
                tech you can explore here. You can also check out highlights of{" "}
                <span
                  className={skillPageStyle?.contactLink}
                  onClick={() => navigate(strings?.work)}
                >
                  previous projects & apps
                </span>{" "}
                I've built using this tech. If there is a project that you need
                help with{" "}
                <span
                  className={skillPageStyle?.contactLink}
                  onClick={() => navigate(strings?.contact)}
                >
                  contact me
                </span>
                .
              </p>
            </header>
            <div className={skillPageStyle?.aboutMySkills}>
              {sliderButtonsData.map((button, index) => (
                <SliderBtn
                  key={index}
                  label={button.label}
                  onClick={() => updateSkillSet(button.data, button.label)}
                  isActive={highlightSkillset === button.label}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={skillPageStyle?.revealedSkillsContainer}>
          <div className={skillPageStyle?.revealSkills}>
            <div className={skillPageStyle?.selectedSkillset}>
              <AnimatePresence>
                <motion.ul ref={scope} className="skill-card">
                  {skillSet.map((skills, i) => (
                    <SkillCard key={i} {...skills} />
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
