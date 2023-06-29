import { personalProj } from "../types/workTypes";
import styles from '../style/projCardStyle.module.scss';

const ProjectCard = (props: personalProj) => {
  const { link, name, desc, techTitle, techStack, img } = props;

  const mobileStyle = {
    justifyContent: `${name === "Gavel Mobile" ? "unset" : "flex-end"}`,
  }

  return (
    <a
      href={link}
      className={styles?.cardLink}
      target="_blank"
      rel="noopener noreferrer"
      style={mobileStyle}
    >
      <div className={styles?.projCard}>
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
      </div>
    </a>
  );
};

export default ProjectCard;
