import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "shared/constants";
import frontendSkillSet from "../front-end-skills";
import backendSkillSet from "../backend-skills";
import shopifySkillSet from "../shopify-skills";
import mobileSkills from "../mobile-dev-skills";
import SkillCard from "./SkillCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const { CONTACT } = routeConstants;

const Skills = () => {

  const [skillSets, setSkillset] = useState({}) 

  useEffect(() => {
    setSkillset(frontendSkillSet);
  }, []);

  const clearState = () => {
    let currentState = skillSets;
    currentState = {};
    setSkillset(currentState);
  };

  const loadFrontEndSkills = () => {
    clearState();
    setTimeout(() => {
      setSkillset(frontendSkillSet);
    }, 500);
  };

  const loadBackendSkills = () => {
    clearState();
    setTimeout(() => {
      setSkillset(backendSkillSet );
    }, 500);
  };

  const loadShopifySkills = () => {
    clearState();
    setTimeout(() => {
      setSkillset(shopifySkillSet);
    }, 500);
  };

  const loadMobileSkills = () => {
    clearState();
    setTimeout(() => {
      setSkillset(mobileSkills);
    }, 500);
  };

    return (
      <div className="page-container-fixed-skills">
        <div className="skills-container">
          <div className="select-skills">
            <h2 className="skills-title">Tech Stack</h2>
            <p className="skills-blurb">
              After studying at Le Wagon and doing additional studies online I
              have learnt and built projects with numerous languages,
              frameworks, platforms and tools to help comapnies and clients
              achieve their goals. Feel free to check out my current tech stack
              and what I'm currently learning. If you use these technologies in
              your project and need help feel free to get in{" "}
              <Link className="contact-link" to={CONTACT.route}>
                contact{" "}
              </Link>{" "}
              with me.
            </p>
            <div className="about-my-skills">
              <span className="about-btn" onClick={loadFrontEndSkills}>
                &nbsp;Front-end&nbsp;
              </span>
              <span className="about-btn" onClick={loadBackendSkills}>
                &nbsp;Backend&nbsp;
              </span>
              <span className="about-btn" onClick={loadShopifySkills}>
                &nbsp;Shopify&nbsp;
              </span>
              <span className="about-btn" onClick={loadMobileSkills}>
                &nbsp;Mobile Development&nbsp;
              </span>
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
                        image={skillSets[key]}
                        image2={skillSets[key]}
                      />
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills;
