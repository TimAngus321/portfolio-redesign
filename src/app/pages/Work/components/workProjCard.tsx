import { workProj } from "../types/workTypes";
import styles from '../style/projCardStyle.module.scss';

const WorkProjCard = (workProjects: workProj) => {
  const { companyTitle, company, projectTitle, project, link, img } =
    workProjects;

  const cardStyle = {
    backgroundImage: `url(${img} )`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    alignSelf: `flex-end`,
    height: `300px`,
    width: "100%",
    borderRadius: "10px 10px 0 0",
  };

  return (
    <a
      href={link}
      className={`${styles?.testLink} ${styles?.projCard}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{ ...cardStyle }}>
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
