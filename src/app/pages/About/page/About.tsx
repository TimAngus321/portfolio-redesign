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
        <div className={styles?.aboutMeContainer}>
          <header>
            <h1 className={styles?.aboutTitle}>About Me</h1>
            <p className={styles?.aboutMeBlurb}>
              I have strong experience working with <strong>Javascript</strong>,
              <strong> Typescript</strong> and <strong> Ruby</strong> for over 5
              years but have also used other languages for some projects. During
              my career I have worked contracts, freelance and full time
              creating UIs, APIs, Ecommerce stores and full-stack features
              connected to AWS services during my coding carreer and much more.
              If you think you could use my{" "}
              <span
                className={styles?.textLink}
                onClick={() => navigate("/skills")}
              >
                skills{" "}
              </span>
              please feel free to{" "}
              <strong
                className={styles?.textLink}
                onClick={() => navigate("/contact")}
              >
                contact me.
              </strong>
            </p>
          </header>
          <div>
            <h3 className={styles?.aboutSubTitle}>Experience</h3>
            <p className={styles?.aboutMeBlurb}>
              I have had the opportunity to work with large range of clients on
              a variety of projects in different industries. My vast array of experience has
              given me the opportunity to hone my skills and develop an
              understanding of the unique challenges that come with working on
              projects for this wide range of clients. I have worked on projects for
              clients in industries ranging from Live Video Streaming Auctions, Retail, Ecommerce, 
              and Music Industry. All of these different projects have required different apporaches, used
              different coding environments and unique considerations.  
              
              I have also been able
              to build strong relationships with clients, as I am able to
              understand their needs and provide solutions that meet their
              expectations. My familiarity with the different coding languages
              used in today's web development projects has been extremely
              beneficial. I am able to quickly debug code, test and optimize the
              code, and ensure that it meets the standards of the client. I also
              have experience with building APIs and integrating them with other
              web services.
            </p>
          </div>
        </div>
        <div className={styles?.workExperienceContainer}>
          
        </div>
      </div>
    </section>
  );
};

export default About;
