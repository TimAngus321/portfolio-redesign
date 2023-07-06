import workExpInfo from "../data/work-exp-info";
import WorkExpCard from "../components/work-exp-card";
import useAbout from "../hooks/useAbout";
import styles from "../style/aboutStyle.module.scss";

const About = () => {
  const { navigate } = useAbout();

  return (
    <div className={styles?.pageContainerAbout}>
      <div className={styles?.aboutMeSubContainer}>
        <div className={styles?.aboutMeContainer}>
          <h1 className={styles?.aboutTitle}>About Me</h1>
          <p className={styles?.aboutMeBlurb}>
            Le Wagon alumni that learnt full-stack development with the Rails
            framework. Since then I have continued delving deeper into
            Javascript and building projects with React, React Native, Express
            and Shopify.
            <br />
            <br />
            I've worked fulltime as a full-stack developer for Gavel, MilkRun
            and Merconic as well as freelance for various clients. I have used a
            variety technologies and you can see what technologies I use{" "}
            <span className="contact-link" onClick={(e) => navigate("/skills")}>
              here
            </span>
            .
            <br />
            <br />
            When I’m not coding I love travelling, making and listening to
            music, Rock climbing, running, biking and watching films.
            <br />
            <br />
            To keep my mind sharp I enjoy reading news, dev articles, novels and
            watching documenteries.{" "}
          </p>
        </div>
        <div className={styles?.workExperienceContainer}>
          <ul className="work-exp-cards">
            {Object.keys(workExpInfo).map((key, i) => (
              <WorkExpCard
                key={key}
                role={workExpInfo[i]?.role}
                companyName={workExpInfo[i]?.companyName}
                workPeriod={workExpInfo[i]?.workPeriod}
                companyDesc={workExpInfo[i]?.companyDesc}
                link={workExpInfo[i]?.link}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
