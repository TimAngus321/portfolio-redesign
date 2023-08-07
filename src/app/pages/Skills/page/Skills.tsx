// import { CSSTransition, TransitionGroup } from "react-transition-group";
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
import {
  motion,
  AnimatePresence,
  easeInOut,
  stagger,
  useAnimate,
  useAnimation,
  usePresence,
} from "framer-motion";
// import useFramerAnimation from "../hooks/useFramerAnimation";
import SkillCard from "../components/SkillCard";
import { useState, useEffect } from "react";
import { skills, waterfallObj } from "../types/skillsetType";

const Skills = () => {
  const { navigate, skillSet, scope, updateSkillSet } = useSkills();  

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

        <div ref={scope} className={skillPageStyle?.revealedSkillsContainer}>
          <div className={skillPageStyle?.revealSkills}>
            <div className={skillPageStyle?.selectedSkillset}>
              <AnimatePresence>
                <ul
                  className="skill-card"
                  // animate={controls}

                  // initial="hidden"
                  // animate="visible"
                  // exit="hidden"
                  // variants={ulVariants}
                  // animate="enter"
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
                      key={key}
                      name={skillSet[i]?.name}
                      image={skillSet[i]?.image}
                      alt={skillSet[i]?.alt}
                      styleClass={skillSet[i]?.styleClass}
                      waterfall={skillSet[i]?.waterfall}
                    />
                  ))}
                </ul>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
