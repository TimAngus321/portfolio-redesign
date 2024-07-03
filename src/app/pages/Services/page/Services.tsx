import SEO from "../../../components/SEOComponent/SEO";
import DancingLinesMyEdit from "react-dancing-lines-safari-firefox-support";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../style/servicesStyle.module.scss";
import { useNavigate } from "react-router-dom";
import strings from "../../../../app/constants/strings";
import useServices from "../hooks/useServices";
import frontendDev from "../data/frontendDev";
import shopifyDev from "../data/shopifyDev";
import mobileDev from "../data/mobileDev";
import fullstackDev from "../data/fullstackDev";
import consultation from "../data/consultation";
import ServiceSection from "../components/serviceSection";

const Services = () => {
  const navigate = useNavigate();
  const { updateService, service, highlightedService, scope } = useServices();

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
              align with the needs of your project then you may be interested in
              the services I have to offer. Explore here the services I offer
              and then please reach out and{" "}
              <strong
                className={styles?.textLink}
                onClick={() => navigate("/contact")}
              >
                contact me
              </strong>{" "}
              regarding the service you are interested in. From there we can
              discuss the specifics of your project, the servies you need and
              pricing.
            </p>
          </header>
          <div className={styles?.myServices}>
            <button
              className={`default-btn ${styles?.aboutMySkillsButton} ${
                highlightedService === strings?.consult
                  ? styles?.clickedBtn
                  : null
              }`}
              onClick={() => updateService(consultation, strings?.consult)}
            >
              {strings?.consult}
            </button>
            <button
              className={`default-btn ${styles?.aboutMySkillsButton} ${
                highlightedService === strings?.frontDev
                  ? styles?.clickedBtn
                  : null
              }`}
              onClick={() => updateService(frontendDev, strings?.frontDev)}
            >
              {strings?.front}
            </button>
            <button
              className={`default-btn ${styles?.aboutMySkillsButton} ${
                highlightedService === strings?.fullDev
                  ? styles?.clickedBtn
                  : null
              }`}
              onClick={() => updateService(fullstackDev, strings?.fullDev)}
            >
              {strings?.fullstack}
            </button>
            <button
              className={`default-btn ${styles?.aboutMySkillsButton} ${
                highlightedService === strings?.mobile
                  ? styles?.clickedBtn
                  : null
              }`}
              onClick={() => updateService(mobileDev, strings?.mobile)}
            >
              {strings?.mobile}
            </button>
            <button
              className={`default-btn ${styles?.aboutMySkillsButton} ${
                highlightedService === strings?.shop ? styles?.clickedBtn : null
              }`}
              onClick={() => updateService(shopifyDev, strings?.shop)}
            >
              {strings?.shopify}
            </button>
          </div>
        </div>
        <div className={styles?.revealedSkillsContainer}>
          <div className={styles?.revealSkills}>
            <div className={styles?.selectedSkillset}>
              <AnimatePresence>
                <motion.div ref={scope} className="">
                  {service.map((info, i) => (
                    <ServiceSection key={i} {...info} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
