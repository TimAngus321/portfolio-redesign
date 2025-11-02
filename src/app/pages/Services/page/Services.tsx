import SEO from "../../../components/SEOComponent/SEO";
import { motion } from "framer-motion";
import styles from "../style/servicesStyle.module.scss";
import { useNavigate } from "react-router-dom";
import useServices from "../hooks/useServices";
import ServiceSection from "../components/serviceSection";
import SliderBtn from "../../../components/SliderButton/SliderBtn";
import buttonsData from "../data/sliderBtnData";

const Services = () => {
  const navigate = useNavigate();
  const { updateService, service, highlightedService, scope } = useServices();

  return (
    <section className={styles?.pageContainerServices}>
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
              the services I have to offer. Explore here what services I offer
              and then please reach out and{" "}
              <span
                className={styles?.textLink}
                onClick={() => navigate("/contact")}
              >
                contact me
              </span>{" "}
              regarding the service you are interested in. From there we can
              discuss the specifics of your project, the servies you need and
              pricing.
            </p>
          </header>
          <div className={styles?.myServices}>
            {buttonsData.map((button, index) => (
              <SliderBtn
                key={index}
                label={button.label}
                onClick={() => updateService(button.data, button.label)}
                isActive={highlightedService === button.label}
              />
            ))}
          </div>
        </div>
        <div className={styles?.revealedSkillsContainer}>
          <div className={styles?.revealSkills}>
            <div className={styles?.selectedSkillset}>
                <motion.div ref={scope} className="">
                  {service.map((info, i) => (
                    <ServiceSection key={i} {...info} />
                  ))}
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
