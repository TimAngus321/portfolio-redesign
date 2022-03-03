import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.scss";
import WorkExpCard from "./workExpCard";
import ReactProjCard from "./reactProjCard";
import RailsProjCard from "./railsProjCard";
import railsProjects from "../rails-projects-data";
import reactProjects from "../react-projects-data";
import previousClients from "../work-project-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import shopifyLogo from "/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/screens/App/screens/Skills/images/Shopify-Logo.png";

const Work = () => {
  const [workExperience] = useState(previousClients);
  const [reactProj] = useState(reactProjects);
  const [railsProj] = useState(railsProjects);

  const alignCenter = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    margin: '0',
    padding: '0'
  };

  return (
    <div className="page-container-scroll-work">
      <div className="work-container">
        <Parallax
          pages={13}
          innerStyle={{
            zIndex: "1",
          }}
          style={{
            display: "flex",
            height: "100%",
            overflowX: 'hidden !important'
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
            factor={0.5}
            sticky={{ start: 1, end: 5 }}
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

          {Object.keys(workExperience).map((key, i) => (
            <ParallaxLayer
              className={`${styles.projectCard} ${styles.parallax}`}
              offset={1.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <WorkExpCard
                key={key}
                shopifyProj={workExperience[key]}
              ></WorkExpCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            sticky={{ start: 6, end: 9 }}
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
              offset={6.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ReactProjCard
                className={`${styles.projectCard} ${styles.parallax}`}
                key={i}
                allReactApps={reactProj[reactApp]}
              ></ReactProjCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            className="rails-group"
            sticky={{ start: 10, end: 12 }}
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

          {Object.keys(railsProj).map((key, i) => (
            <ParallaxLayer
              className={`${styles.projectCard} ${styles.parallax}`}
              offset={10.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <RailsProjCard
                key={i}
                allRailsProj={railsProj[key]}
              ></RailsProjCard>
            </ParallaxLayer>
          ))}
        </Parallax>
      </div>
    </div>
  );
};

export default Work;
