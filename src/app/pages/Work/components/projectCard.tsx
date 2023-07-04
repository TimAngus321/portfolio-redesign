import { personalProj } from "../types/workTypes";
import styles from "../style/projCardStyle.module.scss";
import useProjCard from "../hooks/useProjCard";

const ProjectCard = (props: personalProj) => {
  const { toggleStyle, link, name, desc, techTitle, techStack, img } =
    useProjCard(props);

  // ToDo wrap anchor tag around img only. You'll need to redo styling.
  return (
    <div className={toggleStyle()}>
      <a
        href={link}
        className={styles?.projCard}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt={name} className={styles?.projCardImg} />
        <div className={styles?.scrollCards}>
          <div className={styles?.companyInfo}>
            <h4 className={styles?.company}>{name}</h4>
            <p className={styles?.companyName}>{desc}</p>
          </div>
          <div className={styles?.projectInfo}>
            <h4 className={styles?.project}>{techTitle}</h4>
            <p className={styles?.projectInfo}>{techStack}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
