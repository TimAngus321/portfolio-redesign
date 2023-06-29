import { workProj } from "../types/workTypes";
import styles from "../style/projCardStyle.module.scss";

const WorkProjCard = (workProjects: workProj) => {
  const { companyTitle, company, projectTitle, project, link, img } =
    workProjects;

  return (
    <a
      href={link}
      className={styles?.cardLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles?.projCard}>
        <img src={img} alt={projectTitle} className={styles?.projCardImg} />
        <div className={styles?.scrollCards}>
          <div className={styles?.companyInfo}>
            <h3 className={styles?.company}>{companyTitle}</h3>
            <p className={styles?.companyName}>{company}</p>
          </div>
          <div className={styles?.projectInfo}>
            <h3 className={styles?.project}>{projectTitle}</h3>
            <p className={styles?.projectInfo}>{project}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
export default WorkProjCard;
