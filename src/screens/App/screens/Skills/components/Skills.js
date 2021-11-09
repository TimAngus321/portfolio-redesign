import React from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "shared/constants";
import frontendSkillSet from "../front-end-skills";
import backendSkillSet from "../backend-skills";
import shopifySkillSet from "../shopify-skills";
import mobileSkills from "../mobile-dev-skills";
import SkillCard from "./SkillCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const { CONTACT } = routeConstants;

class Skills extends React.Component {
  state = {
    skillSets: {},
  };

  componentDidMount() {
    this.setState({ skillSets: frontendSkillSet });
  }

  clearState = () => {
    let currentState = { ...this.state.skillSets };
    currentState = {};
    this.setState({ skillSets: currentState });
  };

  loadFrontEndSkills = () => {
    this.clearState();
    setTimeout(() => {
      this.setState({ skillSets: frontendSkillSet });
    }, 500);
  };

  loadBackendSkills = () => {
    this.clearState();
    setTimeout(() => {
      this.setState({ skillSets: backendSkillSet });
    }, 500);
  };

  loadShopifySkills = () => {
    this.clearState();
    setTimeout(() => {
      this.setState({ skillSets: shopifySkillSet });
    }, 500);
  };

  loadMobileSkills = () => {
    this.clearState();
    setTimeout(() => {
      this.setState({ skillSets: mobileSkills });
    }, 500);
  };

  render() {
    return (
      <div className="page-container-fixed-skills">
        <div className="skills-container">
          <div className="select-skills">
            <h2 className="skills-title">Tech Stack</h2>
            <p className="skills-blurb">
              After studying at LeWagon and doing additional studies online I
              have learnt and built projects with numerous languages,
              frameworkds and tools. Feel free to check out my current tech
              stack and what I'm currently learning. If you use these
              technologies in your project and need help feel free to get in{" "}
              <Link className="contact-link" to={CONTACT.route}>
                contact{" "}
              </Link>{" "}
              with me.
            </p>
            <div className="about-my-skills">
              <span className="about-btn" onClick={this.loadFrontEndSkills}>
                &nbsp;Front-end&nbsp;
              </span>
              <span className="about-btn" onClick={this.loadBackendSkills}>
                &nbsp;Backend&nbsp;
              </span>
              <span className="about-btn" onClick={this.loadShopifySkills}>
                &nbsp;Shopify&nbsp;
              </span>
              <span className="about-btn" onClick={this.loadMobileSkills}>
                &nbsp;Mobile Development&nbsp;
              </span>
            </div>
          </div>
          <div className="revealed-skills-container">
            <div className="reveal-skills">
              <div className="selected-skillset">
                <TransitionGroup component="ul" className="skill-cards">
                  {Object.keys(this.state.skillSets).map((key) => (
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
                        skill={this.state.skillSets[key]}
                        image={this.state.skillSets[key]}
                        image2={this.state.skillSets[key]}
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
}

export default Skills;
