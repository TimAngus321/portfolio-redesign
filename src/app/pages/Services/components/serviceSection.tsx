import { AnimatePresence, motion } from "framer-motion";
import styles from "../style/servicesStyle.module.scss";
import { services } from "../types/servicesType";

const ServiceSection = (props: services) => {
  const { title, subTitle, desc, sections } = props;

  return (
    <AnimatePresence>
      <motion.div className={styles?.serviceSectionComponent}>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{desc}</p>
        {sections?.map((section, index) => (
          <div key={index}>
            <h3>{section.subTitle}</h3>
            <p>{section.desc}</p>
          </div>
          ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceSection;
