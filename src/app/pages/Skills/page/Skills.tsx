import strings from "app/constants/strings";
import { AnimatePresence, motion } from "framer-motion";
import SEO from "../../../components/SEOComponent/SEO";
import SkillCard from "../components/SkillCard";
import backendSkillSet from "../data/backend-skills";
import developingSkills from "../data/developing-skills";
import frontendSkillSet from "../data/front-end-skills";
import hostingUsed from "../data/hosting-used";
import languages from "../data/languages";
import miscSkills from "../data/misc-tools";
import mobileSkillset from "../data/mobile-skills";
import projectSkills from "../data/project-skills";
import shopifySkillSet from "../data/shopify-skills";
import testingSkills from "../data/testing-skills";
import useSkills from "../hooks/useSkills";
import "../style/skillCardAnimations.scss";
import skillPageStyle from "../style/skillCardPageStyle.module.scss";

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
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.front
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() => updateSkillSet(frontendSkillSet, strings?.front)}
              >
                {strings?.front}
              </button>
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.lang
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() => updateSkillSet(languages, strings?.lang)}
              >
                {strings?.lang}
              </button>
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.mobile
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() => updateSkillSet(mobileSkillset, strings?.mobile)}
              >
                {strings?.mobile}
              </button>
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.back
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() => updateSkillSet(backendSkillSet, strings?.back)}
              >
                {strings?.back}
              </button>
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.host
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() => updateSkillSet(hostingUsed, strings?.host)}
              >
                {strings?.host}
              </button>
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.shopify
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() =>
                  updateSkillSet(shopifySkillSet, strings?.shopify)
                }
              >
                {strings?.shopify}
              </button>
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.test
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() => updateSkillSet(testingSkills, strings?.test)}
              >
                {strings?.test}
              </button>
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.design
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() => updateSkillSet(projectSkills, strings?.design)}
              >
                {strings?.design}
              </button>
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.tools
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() => updateSkillSet(miscSkills, strings?.tools)}
              >
                {strings?.tools}
              </button>
              <button
                className={`default-btn ${
                  skillPageStyle?.aboutMySkillsButton
                } ${
                  highlightSkillset === strings?.learning
                    ? skillPageStyle?.clickedBtn
                    : null
                }`}
                onClick={() =>
                  updateSkillSet(developingSkills, strings?.learning)
                }
              >
                {strings?.learning}
              </button>
            </div>
          </div>
        </div>

        <div className={skillPageStyle?.revealedSkillsContainer}>
          <div className={skillPageStyle?.revealSkills}>
            <div className={skillPageStyle?.selectedSkillset}>
              <AnimatePresence>
                <motion.ul ref={scope} className="skill-card">
                  {Object.keys(skillSet).map((key, i) => (
                    <SkillCard
                      key={key}
                      name={skillSet[i]?.name}
                      image={skillSet[i]?.image}
                      alt={skillSet[i]?.alt}
                      styleClass={skillSet[i]?.styleClass}
                      waterfall={skillSet[i]?.waterfall}
                    />
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
