import { workProj } from "../types/workTypes";
import styles from "../style/projCardStyle.module.scss";

const WorkProjCard = (workProjects: workProj) => {
  const { company, projectTitle, project, link, img } = workProjects;

  return (
    <div className={styles?.cardLink}>
      <a
        href={link}
        className={styles?.projCard}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img loading="lazy" src={img} alt={projectTitle} className={styles?.projCardImg} />
        <div className={styles?.scrollCards}>
          <div className={styles?.companyInfo}>
            <h4 className={styles?.companyName}>{company}</h4>
          </div>
          <div className={styles?.projectInfo}>
            <h4 className={styles?.project}>{projectTitle}</h4>
            <p className={styles?.projectInfo}>{project}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
export default WorkProjCard;
