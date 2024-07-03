import { AnimatePresence, motion } from "framer-motion";
import styles from "../style/servicesStyle.module.scss";
import { services } from "../types/servicesType";

const ServiceSection = (props: services) => {
  const { title, subTitle, desc, subTitle2, desc2, subTitle3, desc3 } = props;

  return (
    <AnimatePresence>
      <motion.div className={styles?.serviceSectionComponent}>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{desc}</p>
        <h3>{subTitle2}</h3>
        <p>{desc2}</p>
        <h3>{subTitle3}</h3>
        <p>{desc3}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceSection;
