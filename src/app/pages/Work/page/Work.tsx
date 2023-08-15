import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../style/workPageStyle.module.scss";
import WorkProjCard from "../components/workProjCard";
import railsProjects from "../data/rails-projects-data";
import reactProjects from "../data/react-projects-data";
import previousClients from "../data/work-project-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import shopifyLogo from "../../../../assets/workImages/shopifyLogo.webp";
import ProjectCard from "../components/projectCard";
import expressProjects from "../data/express-project-data";
import reactLogo from "../../../../assets/skillsImages/frontendLogos/react-original.svg";
import railsLogo from "../../../../assets/skillsImages/backendLogos/rails-plain.svg";
import expressLogo from "../../../../assets/skillsImages/backendLogos/express-original.svg";
import SEO from "../../../components/SEOComponent/SEO";

const Work = () => {
  const alignCenter: any = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    margin: "0",
    padding: "0",
  };

  return (
    <main className={styles?.pageContainerScrollWork}>
      <SEO
        title={`Tim Angus's Porftolio - Work Page`}
        description={`Work page of Timothy Angus's portfolio. Discover all of my previous work and personal projects skills using a cool parallax scroll effect!`}
        link={`https://tim-angus.com/work`}
      />
      <section className={styles?.workContainer}>
        <Parallax
          pages={17}
          innerStyle={{
            zIndex: "1",
          }}
          style={{
            display: "flex",
            height: "100%",
            gap: "30%",
          }}
        >
          <ParallaxLayer offset={0} speed={0.5} className={styles?.workTitle}>
            <header className={styles?.scrollText}>
              <h1 className={styles?.workTitle}>
                Previous Work & Personal Projects
              </h1>
              <FontAwesomeIcon
                className={styles?.workPageArrow}
                icon={faArrowDown}
              />
            </header>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 5 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                src={reactLogo}
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
                src={railsLogo}
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
                uniqueInfo={railsProjects[i]?.uniqueInfo}
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
                src={expressLogo}
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
                company={previousClients[i]?.company}
                projectTitle={previousClients[i]?.projectTitle}
                project={previousClients[i]?.project}
                link={previousClients[i]?.link}
                img={previousClients[i]?.img}
              ></WorkProjCard>
            </ParallaxLayer>
          ))}
        </Parallax>
      </section>
    </main>
  );
};

export default Work;
