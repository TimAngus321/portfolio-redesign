import backendSkillSet from "../data/backend-skills";
import shopifySkillSet from "../data/shopify-skills";
import developingSkills from "../data/developing-skills";
import hostingUsed from "../data/hosting-used";
import mobileSkillset from "../data/mobile-skills";
import languages from "../data/languages";
import SkillCard from "../components/SkillCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useSkills from "../hooks/useSkills";
import frontendSkillSet from "../data/front-end-skills";
import "../style/skillCardAnimations.scss";
import skillPageStyle from "../style/skillCardPageStyle.module.scss";
import colorExtractor from "react-color-extractor";

const Skills = () => {
  const { skillSet, updateSkillSet, navigate } = useSkills();

  return (
    <section className={skillPageStyle?.pageContainerSkills}>
      <main className={skillPageStyle?.skillsContainer}>
        <div className={skillPageStyle?.selectSkillsContainer}>
          <div className={skillPageStyle?.selectSkills}>
            <header>
              <h2 className={skillPageStyle?.skillsTitle}>Tech Stack</h2>
            </header>
            <p className={skillPageStyle?.skillsBlurb}>
              Feel free to check out my tech stack and{" "}
              <span
                className={skillPageStyle?.contactLink}
                onClick={() => navigate("/work")}
              >
                projects I've built
              </span>{" "}
              using the following tech. If you use these technologies in your
              projects or company and need help feel free to get in{" "}
              <span
                className={skillPageStyle?.contactLink}
                onClick={() => navigate("/contact")}
              >
                contact{" "}
              </span>{" "}
              .
            </p>
            <div className={skillPageStyle?.aboutMySkills}>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(languages)}
              >
                &nbsp;Languages&nbsp;
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(frontendSkillSet)}
              >
                &nbsp;Front-end&nbsp;
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(mobileSkillset)}
              >
                &nbsp;Mobile&nbsp;
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(backendSkillSet)}
              >
                &nbsp;Backend&nbsp;
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(hostingUsed)}
              >
                &nbsp;Hosting&nbsp;
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(shopifySkillSet)}
              >
                &nbsp;Shopify&nbsp;
              </button>
              <button
                className="default-btn"
                onClick={() => updateSkillSet(developingSkills)}
              >
                &nbsp;Learning&nbsp;
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
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;
