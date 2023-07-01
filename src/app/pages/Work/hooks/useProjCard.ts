import styles from "../style/projCardStyle.module.scss";
import { personalProj } from "../types/workTypes";

const useProjCard = (props: personalProj) => {
  const { link, name, desc, techTitle, techStack, img } = props;

  const toggleStyle = () => {
    if (name === "Gavel Mobile") {
      return styles?.mobileCard;
    } else {
      return styles?.cardLink;
    }
  };

  return {
    toggleStyle,
    link,
    name,
    desc,
    techTitle,
    techStack,
    img,
  };
};

export default useProjCard;
