import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "shared/constants";
import frontendSkillSet from "../front-end-skills";
import backendSkillSet from "../backend-skills";
import shopifySkillSet from "../shopify-skills";
import developingSkills from "../developing-skills";
import SkillCard from "./SkillCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const { CONTACT, WORK } = routeConstants;

const Skills = () => {
  const [skillSets, setSkillset] = useState({});
  const [skillsetName, setskillsetName] = useState(frontendSkillSet);

  const clearState = () => {
    let currentState = {};
    setSkillset(currentState);
  };

  useEffect(() => {
    clearState();
    setTimeout(() => {
      setSkillset(skillsetName);
    }, 500);
  }, [skillsetName]);

  return (
    <section className="page-container-fixed-skills">
      <main className="skills-container">
        <div className="select-skills-container">
        <div className="select-skills">
        <header>
          <h2 className="skills-title">Tech Stack</h2>
          </header>
          <p className="skills-blurb">
            After studying at Le Wagon and doing additional studies online I
            have learnt and{" "}
            <Link className="contact-link" to={WORK.route}>
              built projects
            </Link>{" "}
            with numerous languages, frameworks, platforms and tools to help
            comapnies and clients achieve their goals. Feel free to check out my
            current tech stack and what I'm currently learning. If you use these
            technologies in your project and need help feel free to get in{" "}
            <Link className="contact-link" to={CONTACT.route}>
              contact{" "}
            </Link>{" "}
            with me.
          </p>
          <div className="about-my-skills">
            <span
              className="about-btn"
              onClick={(e) => setskillsetName(frontendSkillSet)}
            >
              &nbsp;Front-end&nbsp;
            </span>
            <span
              className="about-btn"
              onClick={(e) => setskillsetName(backendSkillSet)}
            >
              &nbsp;Backend&nbsp;
            </span>
            <span
              className="about-btn"
              onClick={(e) => setskillsetName(shopifySkillSet)}
            >
              &nbsp;Shopify&nbsp;
            </span>
            <span
              className="about-btn"
              onClick={(e) => setskillsetName(developingSkills)}
            >
              &nbsp;Learning&nbsp;
            </span>
          </div>
          </div>
        </div>
        <div className="revealed-skills-container">
          <div className="reveal-skills">
            <div className="selected-skillset">
              <TransitionGroup component="ul" className="skill-cards">
                {Object.keys(skillSets).map((key) => (
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
                      skill={skillSets[key]}
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
