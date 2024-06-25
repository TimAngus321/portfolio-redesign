import SEO from "../../../components/SEOComponent/SEO";
import DancingLinesMyEdit from "react-dancing-lines-safari-firefox-support";
import styles from "../style/servicesStyle.module.scss"
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className={styles?.pageContainerServices}>
      <DancingLinesMyEdit backgroundColor="black" />
      <SEO
        title={`Tim Angus's Porftolio - Services Page`}
        description={`Services page of Timothy Angus's portfolio. Discover all of the servies I offer with some fun animations`}
        link={`https://tim-angus.com/services`}
      />

      <div className={styles?.servicesSubContainer}>
        <div className={styles?.servicesContainer}>
          <header>
            <h1 className={styles?.servicesTitle}>Services</h1>
            <p className={styles?.servicesBlurb}>
              If you think that my{" "}
              <span
                className={styles?.textLink}
                onClick={() => navigate("/skills")}
              >
                skills{" "}
              </span>
              align with the needs of your project then you may be interested in the 
              services I have to offer. 
              please feel free to{" "}
              <strong
                className={styles?.textLink}
                onClick={() => navigate("/contact")}
              >
                contact me.
              </strong>
            </p>
          </header>
          
        </div>
        <div className={styles?.workExperienceContainer}>
          <p className={styles?.servicesBlurb}>
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
          <p className={styles?.servicesBlurb}>
            As a developer I am always learning, reading docs and getting to
            grips with new languages, frameworks, libraries and oter tech but
            when I want to go deeper into a topic I have attended courses and
            used some of the resources below:
          </p>
          <ul className={styles?.servicesEduList}>
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

export default Services;
