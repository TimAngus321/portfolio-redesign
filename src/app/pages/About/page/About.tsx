import workExpInfo from "../data/work-exp-info";
import WorkExpCard from "../components/work-exp-card";
import useAbout from "../hooks/useAbout";
import styles from "../style/aboutStyle.module.scss";
import SEO from "../../../components/SEOComponent/SEO";

const About = () => {
  const { navigate } = useAbout();

  return (
    <section className={styles?.pageContainerAbout}>
      <SEO
        title={`Tim Angus's Porftolio - About Page`}
        description={`About page of Timothy Angus's portfolio. A brief paragraph about Tim Angus and links to my previous employers company websites`}
        link={`https://tim-angus.com/about`}
      />
      <div className={styles?.aboutMeSubContainer}>
        <header className={styles?.aboutMeContainer}>
          <h1 className={styles?.aboutTitle}>About Me</h1>
          <p className={styles?.aboutMeBlurb}>
            I have strong experience working with <strong>Javascript</strong>,
            <strong> Typescript</strong> and <strong> Ruby</strong> for over
            4 years but have also used other languages for some projects. During
            my career I have worked contracts, freelance and full time creating
            UIs, APIs, Ecommerce stores and full-stack features connected to AWS
            services during my coding carreer and much more. If you think you could
            use my {" "}
            <span
              className={styles?.textLink}
              onClick={() => navigate("/skills")}
            >
              skills{" "}
            </span>
            please feel free to {" "}
            <strong
              className={styles?.textLink}
              onClick={() => navigate("/contact")}
            >contact me.</strong>
          </p>
        </header>
        <div className={styles?.workExperienceContainer}>
          <ul className={styles?.workExpCards}>
            {Object.keys(workExpInfo).map((key, i) => (
              <WorkExpCard
                key={key}
                title={workExpInfo[i]?.title}
                desc={workExpInfo[i]?.desc}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
