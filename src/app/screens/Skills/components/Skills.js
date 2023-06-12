import { Link } from "react-router-dom";
import { routeConstants } from "shared/constants";
import frontendSkillSet from "../front-end-skills";
import backendSkillSet from "../backend-skills";
import shopifySkillSet from "../shopify-skills";
import developingSkills from "../developing-skills";
import hostingUsed from "../hosting-used";
import mobileSkillset from "../mobile-skills";
import languages from "../languages";
import SkillCard from "./SkillCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useSkills from "../hooks/useSkills";

const { CONTACT, WORK } = routeConstants;

const Skills = () => {
  
  const {
    skillSet,
    updateSkillSet,
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
            <Link className="contact-link" to={WORK.route}>
              projects I've built
            </Link>{" "}
            using the following tech. If you use these
            technologies in your projects or company and need help feel free to get in{" "}
            <Link className="contact-link" to={CONTACT.route}>
              contact{" "}
            </Link>{" "}.
          </p>
          <div className="about-my-skills">
          <span
              className="about-btn"
              onClick={(e) => updateSkillSet(languages)}
            >
              &nbsp;Languages&nbsp;
            </span>
            <span
              className="about-btn"
              onClick={(e) => updateSkillSet(frontendSkillSet)}
            >
              &nbsp;Front-end&nbsp;
            </span>
            <span
              className="about-btn"
              onClick={(e) => updateSkillSet(mobileSkillset)}
            >
              &nbsp;Mobile&nbsp;
            </span>
            <span
              className="about-btn"
              onClick={(e) => updateSkillSet(backendSkillSet)}
            >
              &nbsp;Backend&nbsp;
            </span>
            <span
              className="about-btn"
              onClick={(e) => updateSkillSet(hostingUsed)}
            >
              &nbsp;Hosting&nbsp;
            </span>
            <span
              className="about-btn"
              onClick={(e) => updateSkillSet(shopifySkillSet)}
            >
              &nbsp;Shopify&nbsp;
            </span>
            <span
              className="about-btn"
              onClick={(e) => updateSkillSet(developingSkills)}
            >
              &nbsp;Learning&nbsp;
            </span>
          </div>
          </div>
        </div>
        <div className="revealed-skills-container">
          <div className="reveal-skills">
            <div className="selected-skillset">
              <TransitionGroup component="ul">
                {Object.keys(skillSet).map((key) => (
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
                      skill={skillSet[key]}
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
