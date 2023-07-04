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

const Skills = () => {
  
  const {
    skillSet,
    updateSkillSet,
    navigate
  } = useSkills();

  return (
    <section className="page-container-fixed-skills">
      <main className="skills-container">
        <div className="select-skills-container">
        <div className="select-skills">
        <header>
          <h2 className="skills-title">Tech Stack</h2>
          </header>
          <p className="skills-blurb">
            Feel free to check out my tech stack and{" "}
            <span className="contact-link" onClick={(e) => navigate('/work')}>
              projects I've built
            </span>{" "}
            using the following tech. If you use these
            technologies in your projects or company and need help feel free to get in{" "}
            <span className="contact-link" onClick={(e) => navigate('/contact')}>
              contact{" "}
            </span>{" "}.
          </p>
          <div className="about-my-skills">
          <button
              className="about-btn"
              onClick={(e) => updateSkillSet(languages)}
            >
              &nbsp;Languages&nbsp;
            </button>
            <button
              className="about-btn"
              onClick={(e) => updateSkillSet(frontendSkillSet)}
            >
              &nbsp;Front-end&nbsp;
            </button>
            <button
              className="about-btn"
              onClick={(e) => updateSkillSet(mobileSkillset)}
            >
              &nbsp;Mobile&nbsp;
            </button>
            <button
              className="about-btn"
              onClick={(e) => updateSkillSet(backendSkillSet)}
            >
              &nbsp;Backend&nbsp;
            </button>
            <button
              className="about-btn"
              onClick={(e) => updateSkillSet(hostingUsed)}
            >
              &nbsp;Hosting&nbsp;
            </button>
            <button
              className="about-btn"
              onClick={(e) => updateSkillSet(shopifySkillSet)}
            >
              &nbsp;Shopify&nbsp;
            </button>
            <button
              className="about-btn"
              onClick={(e) => updateSkillSet(developingSkills)}
            >
              &nbsp;Learning&nbsp;
            </button>
          </div>
          </div>
        </div>
        <div className="revealed-skills-container">
          <div className="reveal-skills">
            <div className="selected-skillset">
              <TransitionGroup component="ul">
                {Object.keys(skillSet).map((key, i) => (
                  <CSSTransition
                    classNames="skill-card"
                    key={key}
                    timeout={{
                      enter: 1500,
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
