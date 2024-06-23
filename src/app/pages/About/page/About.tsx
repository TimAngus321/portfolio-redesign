import useAbout from "../hooks/useAbout";
import styles from "../style/aboutStyle.module.scss";
import SEO from "../../../components/SEOComponent/SEO";
import DancingLinesMyEdit from "react-dancing-lines-safari-firefox-support";

const About = () => {
  const { navigate } = useAbout();

  return (
    <section className={styles?.pageContainerAbout}>
      <DancingLinesMyEdit backgroundColor="black" />
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
              I have over 5 years experience working with{" "}
              <strong>Javascript</strong>,<strong> Typescript</strong> and{" "}
              <strong> Ruby</strong>. During my career I have worked contracts,
              freelance and full time creating UIs, APIs, E-commerce stores and
              full-stack apps connected to AWS services during my coding career.
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
              I have been fortunate in having the opportunity to work with a
              large range of clients on a variety of projects in different
              industries. My vast array of experience has given me the
              opportunity to hone my skills and develop an understanding of the
              unique challenges that come with working on projects for a wide
              range of clients.
              <br />
              <br />
              I have worked in industries including: Live Video Streaming
              Auctions, Retail, Ecommerce, and the Music Industry. All of these
              different projects have required different apporaches and
              considerations, unique coding environments and often challenging
              planning. I have built strong relationships with clients as I am
              able to understand their needs and provide solutions that meet
              their expectations quickly. I am able to assess large codebases
              quickly, debug code, test and optimize it, and ensure that it
              meets the standards of the client.
              <br />
              <br />I am experienced with Next, React, Nuxt, Vue, React Native,
              Ruby on Rails and Express. While I am most expreinced with the
              aforementioned frameworks I have worked with many other javascript
              frameworks, libraries and languages. Moreover, I am expereinced in
              the Shopify ecosystem and have worked on Shopify themes, 3rd party
              apps, theme portals as well as Shopify backend apps using Express,
              Rails and Grape.
              <br />
              <br />
              <h3 className={styles?.aboutSubTitle}>Non Technical Skills</h3>A
              constant I have found during my career is having to do more than
              expected from the job description or project outline. Fortunately,
              I adapt quickly and due to my vast skillset I'm able to get going
              quickly.
              <br />
            </p>
          </div>
        </div>
        <div className={styles?.workExperienceContainer}>
          <p className={styles?.aboutMeBlurb}>
            When working freelance & contracts (and often for full time
            positions 🤫) I needed to work with clients, managers and product
            owners to come up with solutions for their pain points or new
            features they wanted to implement. To do this I researched,
            developed a stratergy, coordinated the plan in meetings, created my
            own roadmaps and tickets then delivered the feature or resolved the
            pain point. When applicable I would also create what was necessary
            for a feedback loop.
            <br />
            <br />
            Furthermore, when new junior and senior developers joined the team I
            was often tasked with bringing them up to speed with the codebase,
            setting up their environments and be the point of contact for
            questions regarding common errors or issues. In addition, external
            developers we worked with would often ask me about parts of the tech
            stack they were unfamiliar with as for some parts of the stack I was
            the sole developer of this part of the stack. Often this would
            interact with other parts of the stack and I'd need to lead meetings
            in order to update them on how it affected other parts of the
            product.
          </p>
          <h3 className={styles?.aboutSubTitle}>Education</h3>
          <p className={styles?.aboutMeBlurb}>
            As a developer I am always learning, reading docs and getting to
            grips with new languages, frameworks, libraries and oter tech but
            when I want to go deeper into a topic I have attended courses and
            used some of the resources below:
          </p>
          <ul className={styles?.aboutmeEduList}>
            <li>
              LeWagon Web Development bootcamp, Berlin, Germany | bootcamp |
              2019{" "}
            </li>
            <li>Le Wagon React & Redux Track | 2019 </li>
            <li>
              {" "}
              Wes Bos Courses | Javascript | Node | Fullstack React & GraphQL |
              CSS Grid & Flexbox | Markdown | 2019 - Present
            </li>
            <li>Numerous Code Academy Courses | 2019 - Present </li>
            <li>React, Redux & MERN Courses from Udemy | 2019 - Present </li>
            <li>
              {" "}
              Sheffield Hallam University, Sheffield, England | Bachelor of Arts
              (with honours) in History | 2012
            </li>
            <li>UK-TEFL, London, England | Advanced TEFL Certificate | 2014</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
