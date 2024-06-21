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
              years. During my career I have worked contracts, freelance and
              full time creating UIs, APIs, E-commerce stores and full-stack
              features connected to AWS services during my coding carreer. If
              you think you could use my{" "}
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
              a variety of projects in different industries. My vast array of
              experience has given me the opportunity to hone my skills and
              develop an understanding of the unique challenges that come with
              working on projects for a wide range of clients. I have worked on
              projects in industries including: Live Video Streaming Auctions,
              Retail, Ecommerce, and the Music Industry. All of these different
              projects have required different apporaches and considerations,
              used unique coding environments and often challenging planning. I
              have built strong relationships with clients, as I am able to
              understand their needs and provide solutions that meet their
              expectations quickly. I am able to assess large codebases quickly,
              debug code, test and optimize it, and ensure that it meets the
              standards of the client.
            </p>
          </div>
        </div>
        <div className={styles?.workExperienceContainer}>
          <h3 className={styles?.aboutSubTitle}>Non Technical Skills</h3>
          <p className={styles?.aboutMeBlurb}>
            I have worked with on many different projects in very different settings
            but a constant I have found is having to do more than expected from the 
            job description. 
          </p>
          <h3 className={styles?.aboutSubTitle}>Education</h3>
          <p className={styles?.aboutMeBlurb}>
            I am experienced with Next, React, Nuxt, Vue, React Native, Ruby on
            Rails and Express. While I am most expreinced with the
            aforementioned frameworks I have worked with many other javascript
            frameworks and libraries so please ask if I have experience with
            your techStack! Furthermore, I am expereinced in the Shopify
            ecosystem and have experience working on Shopify themes, 3rd party
            apps, theme portals as well as Shopify backend apps using Express,
            Rails and Grape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
