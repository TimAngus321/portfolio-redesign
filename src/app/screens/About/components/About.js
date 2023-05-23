import React, {useState} from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "shared/constants";
import workExpInfo from '../work-exp-info';
import WorkExpCard from './work-exp-card';

const { SKILLS } = routeConstants;

// ToDo - redo this with setState this is pretty clunky
const About = () => {

  const [workExp] = useState(workExpInfo)
 


    return (
      <div className="page-container-about">
      <div className="about-me-sub-container">
        <div className="about-me-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-me-blurb">
            Le Wagon alumni that learnt full-stack development with the
            Rails framework. Since then I have continued delving deeper into
            Javascript and building projects with React, React Native, Express and Shopify.
            <br />
            <br />
            I've worked fulltime as a full-stack developer for Gavel, MilkRun and Merconic 
            as well as freelance for various clients. 
            I have used a variety technologies and you can see what technologies I use{" "}
            <Link className="contact-link" to={SKILLS.route}>
            here
            </Link>.
            <br />
            <br />
            When I’m not coding I love travelling, making and listening to
            music, Rock climbing, running, biking and watching films.
            <br />
            <br />
            To keep my mind sharp I enjoy reading news, dev articles, novels
            and watching documenteries.{" "}
          </p>
        </div>
        <div className="work-experience-container">
        <ul className="work-exp-cards">
                  {Object.keys(workExp).map((key) => (
                    <WorkExpCard
                      key={key}
                      role={workExp[key]}
                      company={workExp[key]}
                      period={workExp[key]}
                      companyDesc={workExp[key]}
                    />
                  ))}
                </ul>
        </div>
        </div>
      </div>
    );
}

export default About;
