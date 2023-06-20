import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../style/styles.module.scss";
import WorkExpCard from "../components/workExpCard";
import railsProjects from "../data/rails-projects-data";
import reactProjects from "../data/react-projects-data";
import previousClients from "../data/work-project-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import shopifyLogo from '../images/Shopify-Logo.png';
import ProjectCard from '../components/projectCard';
import expressProjects from '../data/express-project-data';

const Work = () => {
  const [workExperience] = useState(previousClients);
  const [reactProj] = useState(reactProjects);
  const [railsProj] = useState(railsProjects);
  const [expressProj] = useState(expressProjects);

  const alignCenter = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    margin: "0",
    padding: "0",
  };

  return (
    <div className="page-container-scroll-work">
      <div className="work-container">
        <Parallax
          pages={17}
          innerStyle={{
            zIndex: "1",
          }}
          style={{
            display: "flex",
            height: "100%",
            overflowX: "hidden !important",
          }}
        >
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="work-title"
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <div className={styles.scrollText}>
              <p>Previous Work & Personal Projects</p>
              <FontAwesomeIcon className="work-page-arrow" icon={faArrowDown} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 5 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.stickyCard} ${styles.sticky}`}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React Logo"
                className="sicky-card-image"
              />
            </div>
          </ParallaxLayer>

          {Object.keys(reactProj).map((reactApp, i) => (
            <ParallaxLayer
              className={`${styles.projectCard} ${styles.parallax}`}
              offset={1.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ProjectCard
                className={`${styles.projectCard} ${styles.parallax}`}
                key={i}
                appProj={reactProj[reactApp]}
              ></ProjectCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            className="rails-group"
            sticky={{ start: 6, end: 7 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.stickyCard} ${styles.sticky}`}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg"
                alt="Rails Logo"
                className="sicky-card-image"
              />
            </div>
          </ParallaxLayer>

          {Object.keys(railsProj).map((railsApp, i) => (
            <ParallaxLayer
              className={`${styles.projectCard} ${styles.parallax}`}
              offset={6.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ProjectCard
                key={i}
                appProj={railsProj[railsApp]}
              ></ProjectCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            factor={0.5}
            sticky={{ start: 8, end: 10 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.stickyCard} ${styles.sticky}`}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express Logo"
                className="sicky-card-image inverseWhite"
              />
            </div>
          </ParallaxLayer>

          {Object.keys(expressProj).map((expressApp, i) => (
            <ParallaxLayer
              className={`${styles.projectCard} ${styles.parallax}`}
              offset={8.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ProjectCard
                key={i}
                appProj={expressProj[expressApp]}
              ></ProjectCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            factor={0.5}
            sticky={{ start: 11, end: 16 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.stickyCard} ${styles.sticky}`}>
              <img
                src={shopifyLogo}
                alt="Shopify Logo"
                className="sicky-card-image"
              />
            </div>
          </ParallaxLayer>

          {Object.keys(workExperience).map((workProj, i) => (
            <ParallaxLayer
              className={`${styles.projectCard} ${styles.parallax}`}
              offset={11.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <WorkExpCard
                key={i}
                workProjects={workExperience[workProj]}
              ></WorkExpCard>
            </ParallaxLayer>
          ))}
        </Parallax>
      </div>
    </div>
  );
};

export default Work;
