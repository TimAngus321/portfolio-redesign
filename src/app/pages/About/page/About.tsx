import workExpInfo from "../data/work-exp-info";
import WorkExpCard from "../components/work-exp-card";
import useAbout from "../hooks/useAbout";
import styles from "../style/aboutStyle.module.scss";
import SEO from "../../../components/SEOComponent/SEO";

const About = () => {
  const { navigate } = useAbout();

  return (
    <main className={styles?.pageContainerAbout}>
      <SEO
        title={`Tim Angus's Porftolio - About Page`}
        description={`About page of Timothy Angus's portfolio. A brief paragraph about Tim Angus and links to my previous employers company websites`}
        link={`https://tim-angus.com/about`}
      />
      <div className={styles?.aboutMeSubContainer}>
        <header className={styles?.aboutMeContainer}>
          <h1 className={styles?.aboutTitle}>About Me</h1>
          <p className={styles?.aboutMeBlurb}>
            Le Wagon alumni that learnt full-stack development with the Rails
            framework. Since then I have continued delving deeper into
            Javascript/Typescript and building projects with React, React
            Native, Express and Shopify.
            <br />
            <br />
            I've worked fulltime as a full-stack developer for Gavel, MilkRun,
            Merconic and freelance for various clients using a variety of
            technologies and that you can see{" "}
            <span
              className={styles?.textLink}
              onClick={() => navigate("/skills")}
            >
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
        </header>
        <section className={styles?.workExperienceContainer}>
          <ul className={styles?.workExpCards}>
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
        </section>
      </div>
    </main>
  );
};

export default About;
