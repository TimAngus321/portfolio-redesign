import React from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "shared/constants";
import workExpInfo from '../work-exp-info';
import WorkExpCard from './work-exp-card';

const { SKILLS } = routeConstants;

// ToDo - redo this with setState this is pretty clunky
class About extends React.Component {

  state = {
    workExp: workExpInfo,
  };

  render() {
    return (
      <div className="page-container-about">
      <div className="about-me-sub-container">
        <div className="about-me-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-me-blurb">
            I am a Le Wagon alumni that learnt full-stack development with the
            Rails framework. Since then I have continued delving deeper into
            Javascript and building projects with React and stores Shopify.
            <br />
            <br />
            After working as full-stack developer at the digital agency Merconic
            and the US based company MilkRun I have used technology stacks for
            the frontend and backend. To see what technologies I use{" "}
            <Link className="contact-link" to={SKILLS.route}>
              check here
            </Link>.
            <br />
            <br />
            When I’m not coding I love travelling, making and listening to
            music, Rock climbing, running and biking.
            <br />
            <br />
            To keep my mind sharp I enjoy reading news and dev articles, novels
            and watching documenteries (not just about coding!){" "}
          </p>
        </div>
        <div className="work-experience-container">
        <ul className="work-exp-cards">
                  {Object.keys(this.state.workExp).map((key) => (
                    <WorkExpCard
                      key={key}
                      role={this.state.workExp[key]}
                      company={this.state.workExp[key]}
                      period={this.state.workExp[key]}
                      companyDesc={this.state.workExp[key]}
                    />
                  ))}
                </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default About;
