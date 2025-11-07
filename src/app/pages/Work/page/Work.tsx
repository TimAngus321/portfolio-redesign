import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../style/workPageStyle.module.scss";
import WorkProjCard from "../components/workProjCard";
import railsProjects from "../data/rails-projects-data";
import reactProjects from "../data/react-projects-data";
import previousClients from "../data/work-project-data";
import uxUIProjects from "../data/UXUI-project-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import shopifyLogo from "../../../../assets/workImages/shopifyLogo.webp";
import ProjectCard from "../components/projectCard";
import UiUXCard from "../components/UiUXCard";
import expressProjects from "../data/express-project-data";
import reactLogo from "../../../../assets/skillsImages/frontendLogos/react-original.svg";
import railsLogo from "../../../../assets/skillsImages/backendLogos/rails-plain.svg";
import expressLogo from "../../../../assets/skillsImages/backendLogos/express-original.svg";
import SEO from "../../../components/SEOComponent/SEO";
import nuxtLogo from "../../../../assets/skillsImages/frontendLogos/nuxtjs-original.svg";
import nuxtProjects from "../data/nuxt-project-data";
import rubyProjects from "../data/ruby-project-data";
import rubyLogo from "../../../../assets/skillsImages/languageLogos/ruby-original.svg";
import UIUX4 from "../../../../assets/workImages/UXUI_dd4.webp";
import vueLogo from "../../../../assets/skillsImages/frontendLogos/vuejs-original.svg";
import vueProjects from "../data/vue-project-data";

const Work = () => {
  const alignCenter: any = {
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
    width: "100%",
    position: "fixed",
    margin: "0",
    padding: "0",
  };

  return (
    <section className={styles?.pageContainerScrollWork}>
      <SEO
        title={`Tim Angus's Porftolio - Work Page`}
        description={`Work page of Timothy Angus's portfolio. Discover all of my previous work and personal projects skills using a cool parallax scroll effect!`}
        link={`https://tim-angus.com/work`}
      />
      <div className={styles?.workContainer}>
        <Parallax
          className={styles?.workParallaxContainer}
          pages={29}
          innerStyle={{
            zIndex: "1",
          }}
        >
          <ParallaxLayer
            offset={0}
            speed={0.5}
            sticky={{ start: 0, end: 1 }}
            className={styles?.workTitle}
            style={{ ...alignCenter, justifyContent: "flex-center" }}
          >
            <header className={styles?.scrollText}>
              <h1 className={styles?.workTitle}>
                Work & Personal Projects Highlights
              </h1>
              <FontAwesomeIcon
                className={styles?.workPageArrow}
                icon={faArrowDown}
              />
            </header>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 2, end: 6 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                loading="lazy"
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
              offset={2.5 + i}
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
            sticky={{ start: 7, end: 8 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                loading="lazy"
                src={vueLogo}
                alt="Vue Logo"
                className={styles?.stickyCardImage}
              />
            </div>
          </ParallaxLayer>

          {Object.keys(vueProjects).map((key, i) => (
            <ParallaxLayer
              key={key}
              className={`${styles?.projectCard} ${styles?.parallax}`}
              offset={7.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ProjectCard
                className={`${styles?.projectCard} ${styles?.parallax}`}
                key={key}
                name={vueProjects[i]?.name}
                desc={vueProjects[i]?.desc}
                techTitle={vueProjects[i]?.techTitle}
                techStack={vueProjects[i]?.techStack}
                link={vueProjects[i]?.link}
                img={vueProjects[i]?.img}
              ></ProjectCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            sticky={{ start: 9, end: 10 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                loading="lazy"
                src={nuxtLogo}
                alt="Nuxt Logo"
                className={styles?.stickyCardImage}
              />
            </div>
          </ParallaxLayer>

          {Object.keys(nuxtProjects).map((key, i) => (
            <ParallaxLayer
              key={key}
              className={`${styles?.projectCard} ${styles?.parallax}`}
              offset={9.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ProjectCard
                className={`${styles?.projectCard} ${styles?.parallax}`}
                key={key}
                name={nuxtProjects[i]?.name}
                desc={nuxtProjects[i]?.desc}
                techTitle={nuxtProjects[i]?.techTitle}
                techStack={nuxtProjects[i]?.techStack}
                link={nuxtProjects[i]?.link}
                img={nuxtProjects[i]?.img}
              ></ProjectCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            className="rails-group"
            sticky={{ start: 11, end: 12 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                loading="lazy"
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
              offset={11.5 + i}
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
            className="rails-group"
            sticky={{ start: 13, end: 14 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                loading="lazy"
                src={rubyLogo}
                alt="Ruby Logo"
                className={styles?.stickyCardImage}
              />
            </div>
          </ParallaxLayer>

          {Object.keys(rubyProjects).map((key, i) => (
            <ParallaxLayer
              key={key}
              className={`${styles?.projectCard} ${styles?.parallax}`}
              offset={13.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <ProjectCard
                key={key}
                uniqueInfo={rubyProjects[i]?.uniqueInfo}
                name={rubyProjects[i]?.name}
                desc={rubyProjects[i]?.desc}
                techTitle={rubyProjects[i]?.techTitle}
                techStack={rubyProjects[i]?.techStack}
                link={rubyProjects[i]?.link}
                img={rubyProjects[i]?.img}
              ></ProjectCard>
            </ParallaxLayer>
          ))}

          <ParallaxLayer
            factor={0.5}
            sticky={{ start: 15, end: 17 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                loading="lazy"
                src={expressLogo}
                alt="Express Logo"
                className={`${styles?.stickyCardImage}`}
                style={{filter: `invert(100%)`}}
              />
            </div>
          </ParallaxLayer>

          {Object.keys(expressProjects).map((key, i) => (
            <ParallaxLayer
              key={key}
              className={`${styles?.projectCard} ${styles?.parallax}`}
              offset={15.5 + i}
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
            sticky={{ start: 18, end: 23 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                loading="lazy"
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
              offset={18.5 + i}
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

          <ParallaxLayer
            factor={0.5}
            sticky={{ start: 24, end: 29 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles?.stickyCard} ${styles?.sticky}`}>
              <img
                loading="lazy"
                src={UIUX4}
                alt="UX/UI Logo"
                className={styles?.stickyCardImage}
              />
            </div>
          </ParallaxLayer>

          {Object.keys(uxUIProjects).map((key, i) => (
            <ParallaxLayer
              key={key}
              className={`${styles?.projectCard} ${styles?.parallax}`}
              offset={24.5 + i}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
               <UiUXCard
                key={key}
                name={uxUIProjects[i]?.name}
                desc={uxUIProjects[i]?.desc}
                techTitle={uxUIProjects[i]?.techTitle}
                techStack={uxUIProjects[i]?.techStack}
                link={uxUIProjects[i]?.link}
                img={uxUIProjects[i]?.img}
              ></UiUXCard>
            </ParallaxLayer>
          ))}
        </Parallax>
      </div>
    </section>
  );
};

export default Work;
