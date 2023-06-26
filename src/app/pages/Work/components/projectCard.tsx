import { personalProj } from "../types/workTypes";
import styles from '../style/projCardStyle.module.scss';

const ProjectCard = (props: personalProj) => {
  const { link, name, desc, techTitle, techStack, img } = props;

  const cardStyle = {
    backgroundImage: `url(${img} )`,
    backgroundPosition: "top",
    backgroundSize: `${name === "Gavel Mobile" ? "contain" : "cover"}`,
    backgroundRepeat: "no-repeat",
    alignSelf: `flex-end`,
    height: `300px`,
    width: "100%",
    borderRadius: "10px 10px 0 0",
  };

  return (
    <a
      href={link}
      className={`${styles?.testLink} ${styles?.projCard} ${styles?.cardStyle}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{ ...cardStyle }}>
        <div className="scroll-cards">
          <div className="company-info">
            <h4 className="company">{name}</h4>
            <p className="company-name">{desc}</p>
          </div>
          <div className="project-info">
            <h4 className="project">{techTitle}</h4>
            <p className="project-info">{techStack}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
