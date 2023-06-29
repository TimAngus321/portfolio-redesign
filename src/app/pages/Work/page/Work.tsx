import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../style/workPageStyle.module.scss";
import WorkProjCard from "../components/workProjCard";
import railsProjects from "../data/rails-projects-data";
import reactProjects from "../data/react-projects-data";
import previousClients from "../data/work-project-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import shopifyLogo from "../images/Shopify-Logo.png";
import ProjectCard from "../components/projectCard";
import expressProjects from "../data/express-project-data";

const Work = () => {
  const alignCenter = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    margin: "0",
    padding: "0",
  };

  return (
    <div className={styles?.pageContainerScrollWork}>
      <div className={styles?.workContainer}>
        <Parallax
          pages={17}
          innerStyle={{
            zIndex: "1",
          }}
          style={{
            display: "flex",
            height: "100%",
          }}
        >
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className={styles?.workTitle}
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <div className={styles?.scrollText}>
              <p>Previous Work & Personal Projects</p>
              <FontAwesomeIcon className={styles?.workPageArrow} icon={faArrowDown} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 5 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React Logo"
                className={styles?.stickyCardImage}
              />
            </div>
          </ParallaxLayer>

          {Object.keys(reactProjects).map((key, i) => (
            <ParallaxLayer
              key={key}
              className={`${styles?.projectCard} ${styles?.parallax}`}
              offset={1.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ProjectCard
                className={`${styles?.projectCard} ${styles?.parallax}`}
                key={key}
                name={reactProjects[i]?.name}
                desc={reactProjects[i]?.desc}
                techTitle={reactProjects[i]?.techTitle}
                techStack={reactProjects[i]?.techStack}
                link={reactProjects[i]?.link}
                img={reactProjects[i]?.img}
              ></ProjectCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            className="rails-group"
            sticky={{ start: 6, end: 7 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg"
                alt="Rails Logo"
                className={styles?.stickyCardImage}
              />
            </div>
          </ParallaxLayer>

          {Object.keys(railsProjects).map((key, i) => (
            <ParallaxLayer
              key={key}
              className={`${styles?.projectCard} ${styles?.parallax}`}
              offset={6.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ProjectCard
                key={key}
                name={railsProjects[i]?.name}
                desc={railsProjects[i]?.desc}
                techTitle={railsProjects[i]?.techTitle}
                techStack={railsProjects[i]?.techStack}
                link={railsProjects[i]?.link}
                img={railsProjects[i]?.img}
              ></ProjectCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            factor={0.5}
            sticky={{ start: 8, end: 10 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express Logo"
                className={`${styles?.stickyCardImage} inverseWhite`}
              />
            </div>
          </ParallaxLayer>

          {Object.keys(expressProjects).map((key, i) => (
            <ParallaxLayer
              key={key}
              className={`${styles?.projectCard} ${styles?.parallax}`}
              offset={8.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ProjectCard
                key={key}
                name={expressProjects[i]?.name}
                desc={expressProjects[i]?.desc}
                techTitle={expressProjects[i]?.techTitle}
                techStack={expressProjects[i]?.techStack}
                link={expressProjects[i]?.link}
                img={expressProjects[i]?.img}
              ></ProjectCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            factor={0.5}
            sticky={{ start: 11, end: 16 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                src={shopifyLogo}
                alt="Shopify Logo"
                className={styles?.stickyCardImage}
              />
            </div>
          </ParallaxLayer>

          {Object.keys(previousClients).map((key, i) => (
            <ParallaxLayer
              key={key}
              className={`${styles?.projectCard} ${styles?.parallax}`}
              offset={11.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <WorkProjCard
                key={key}
                companyTitle={previousClients[i]?.companyTitle}
                company={previousClients[i]?.company}
                projectTitle={previousClients[i]?.projectTitle}
                project={previousClients[i]?.project}
                link={previousClients[i]?.link}
                img={previousClients[i]?.img}
              ></WorkProjCard>
            </ParallaxLayer>
          ))}
        </Parallax>
      </div>
    </div>
  );
};

export default Work;
