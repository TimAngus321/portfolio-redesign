import { motion } from "framer-motion";
import styles from "../style/servicesStyle.module.scss";
import { services } from "../types/servicesType";

const ServiceSection = (props: services) => {
  const { title, subTitle, desc, sections } = props;

  return (
      <motion.div className={styles?.serviceSectionComponent}>
        <h2 className={styles?.servicesTitle}>{title}</h2>
        <h3 className={styles?.servicesSubTitle}>{subTitle}</h3>
        <p className={styles?.servicesBlurb}>{desc}</p>
        {sections?.map((section, index) => (
          <div key={index}>
            <h3 className={styles?.servicesSubTitle}>{section.subTitle}</h3>
            <p className={styles?.servicesBlurb}>{section.desc}</p>
          </div>
          ))}
      </motion.div>
  );
};

export default ServiceSection;
