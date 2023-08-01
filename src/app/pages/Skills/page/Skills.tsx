import { CSSTransition, TransitionGroup } from "react-transition-group";
import SkillCard from "../components/SkillCard";
import backendSkillSet from "../data/backend-skills";
import developingSkills from "../data/developing-skills";
import frontendSkillSet from "../data/front-end-skills";
import hostingUsed from "../data/hosting-used";
import languages from "../data/languages";
import mobileSkillset from "../data/mobile-skills";
import shopifySkillSet from "../data/shopify-skills";
import useSkills from "../hooks/useSkills";
import "../style/skillCardAnimations.scss";
import skillPageStyle from "../style/skillCardPageStyle.module.scss";
import SEO from "../../../components/SEOComponent/SEO";

const Skills = () => {
  const { skillSet, updateSkillSet, navigate } = useSkills();

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
                Feel free to check out what I'm learning, my current tech stack
                and{" "}
                <span
                  className={skillPageStyle?.contactLink}
                  onClick={() => navigate("/work")}
                >
                  projects I've built
                </span>{" "}
                using the following tech. If you use these technologies in your
                projects or company and need a dev or just an extra pair of
                hands feel free to get in{" "}
                <span
                  className={skillPageStyle?.contactLink}
                  onClick={() => navigate("/contact")}
                >
                  contact
                </span>
                .
              </p>
            </header>
            <div className={skillPageStyle?.aboutMySkills}>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(languages)}
              >
                Languages
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(frontendSkillSet)}
              >
                Front-end
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(mobileSkillset)}
              >
                Mobile
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(backendSkillSet)}
              >
                Backend
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(hostingUsed)}
              >
                Hosting
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(shopifySkillSet)}
              >
                Shopify
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(developingSkills)}
              >
                Learning
              </button>
            </div>
          </div>
        </div>
        <div className={skillPageStyle?.revealedSkillsContainer}>
          <div className={skillPageStyle?.revealSkills}>
            <div className={skillPageStyle?.selectedSkillset}>
              <TransitionGroup component="ul">
                {Object.keys(skillSet).map((key, i) => (
                  <CSSTransition
                    classNames="skill-card"
                    key={key}
                    timeout={{
                      enter: 1000,
                      exit: 500,
                    }}
                  >
                    <SkillCard
                      key={key}
                      name={skillSet[i]?.name}
                      image={skillSet[i]?.image}
                      alt={skillSet[i]?.alt}
                      styleClass={skillSet[i]?.styleClass}
                      // waterfall={Object.keys(waterfall).map((key, i) => (waterfall?.imgUrl[i] ===  skillSet[i]?.image ? waterfall?.colors : null))  }
                      waterfall={skillSet[i]?.waterfall}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
