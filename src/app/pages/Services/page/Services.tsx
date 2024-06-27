import SEO from "../../../components/SEOComponent/SEO";
import DancingLinesMyEdit from "react-dancing-lines-safari-firefox-support";
import styles from "../style/servicesStyle.module.scss"
import { useNavigate } from "react-router-dom";
import strings from "../../../../app/constants/strings";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className={styles?.pageContainerServices}>
      <DancingLinesMyEdit backgroundColor="black" />
      <SEO
        title={`Tim Angus's Porftolio - Services Page`}
        description={`Services page of Timothy Angus's portfolio. Discover all of the servies I offer with some fun animations`}
        link={`https://tim-angus.com/services`}
      />
      <div className={styles?.servicesSubContainer}>
        <div className={styles?.servicesContainer}>
          <header>
            <h1 className={styles?.servicesTitle}>Services</h1>
            <p className={styles?.servicesBlurb}>
              If you think that my{" "}
              <span
                className={styles?.textLink}
                onClick={() => navigate("/skills")}
              >
                skills{" "}
              </span>
              align with the needs of your project then you may be interested in the 
              services I have to offer. 
              please feel free to{" "}
              <strong
                className={styles?.textLink}
                onClick={() => navigate("/contact")}
              >
                contact me.
              </strong>
            </p>
          </header>
          <div className={styles?.myServices}>
              <button
                className={`default-btn ${
                  styles?.myServicesBtn
                } ${
                  highlightSkillset === strings?.frontDev
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
              </div>
        </div>
        <div className={styles?.revealedSkillsContainer}>
          <div className={styles?.revealSkills}>
            <div className={styles?.selectedSkillset}>
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

export default Services;
