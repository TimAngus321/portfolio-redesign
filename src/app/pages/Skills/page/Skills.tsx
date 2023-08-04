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
import { motion, AnimatePresence, easeInOut, stagger } from "framer-motion";
import useFramerAnimation from "../hooks/useFramerAnimation";

const Skills = () => {
  const { updateSkillSet, navigate } = useSkills();
  const { parentAnimation } = useFramerAnimation();

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

       
      </div>
    </section>
  );
};

export default Skills;
