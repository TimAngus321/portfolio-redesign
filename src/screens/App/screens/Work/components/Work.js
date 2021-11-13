import React, {useState} from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.scss";
import WorkExpCard from './workExpCard';
import PersonalProjCard from "./personalProjCard";
import railsProjects from '../rails-projects-data';
import reactProjects from '../react-projects-data';
import previousClients from '../work-project-data';


class Work extends React.Component {

  state = {
    workExperience: previousClients,
    reactProj: reactProjects,
  };


  render() {

    const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className="page-container-scroll-work">
      <div className="work-container">

        <Parallax 
        pages={11}
        style={{
          display: 'flex',

        }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="work-title"
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <p className={styles.scrollText}>My Projects</p>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 5}}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.stickyCard } ${styles.sticky}`}>
              <p>Shopify Clients</p>
            </div>
          </ParallaxLayer>

          {Object.keys(this.state.workExperience).map((key, i) => (

          <ParallaxLayer
            offset={1.5 + i} 
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <WorkExpCard
            className={`${styles.projectCard} ${styles.parallax}`}
            key={key}
            client={this.state.workExperience[key]}
            company={this.state.workExperience[key]}
            project={this.state.workExperience[key]}
            desc={this.state.workExperience[key]}
            link={this.state.workExperience[key]}
            >
              
            </WorkExpCard>
          </ParallaxLayer>
          ))}

   
       
          <ParallaxLayer
            sticky={{ start: 6, end: 9 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.card} ${styles.sticky}`}>
              <p>React Projects</p>
            </div>
          </ParallaxLayer>

          {Object.keys(this.state.reactProj).map((key, i) => (
          <ParallaxLayer
            offset={6.5 + i} 
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
          <PersonalProjCard
            className={`${styles.projectCard} ${styles.parallax}`}
            key={key}
            name={this.state.reactProj[key]}
            techStack={this.state.reactProj[key]}
            desc={this.state.reactProj[key]}
            link={this.state.reactProj[key]}
            >
          </PersonalProjCard>
           
            </ParallaxLayer>
            ))}
           
            </Parallax>

       
      </div>
    </div>
    );
  }
};

export default Work;

/* <h2 className="client">{this.props.previousClients.client}</h2>
<h3 className="company"></h3>
<p className="project"></p>
<p className="desc"></p>
<link rel="" href="" /> */
