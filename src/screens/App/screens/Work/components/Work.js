import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.scss";
import WorkExpCard from './workExpCard';
import PersonalProjCard from "./personalProjCard";
import railsProjects from '../rails-projects-data';
import reactProjects from '../react-projects-data';
import previousClients from '../work-project-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';



class Work extends React.Component {

  state = {
    workExperience: previousClients,
    reactProj: reactProjects,
    railsProj: railsProjects,
  };


  render() {

    const alignCenter = { display: "flex", alignItems: "center", pointerEvent: 'all' };

  return (
    <div className="page-container-scroll-work">
      <div className="work-container">

        <Parallax 
        pages={12}
        style={{
          display: 'flex',

        }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="work-title"
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
          <div className={styles.scrollText}>
            <p >My Projects</p>
          <FontAwesomeIcon 
          className="work-page-arrow" 
          icon={faArrowDown} 
          beat
          />
          </div>

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
            className={`${styles.projectCard}`}
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
            sticky={{ start: 6, end: 8 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.stickyCard} ${styles.sticky}`}>
              <p>React Projects</p>
            </div>
          </ParallaxLayer>

          {Object.keys(this.state.reactProj).map((key, i) => (
          <ParallaxLayer
            className={`${styles.projectCard}`}
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

            <ParallaxLayer
            sticky={{ start: 9, end: 12 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.stickyCard} ${styles.sticky}`}>
              <p>Rails Projects</p>
            </div>
          </ParallaxLayer>

            {Object.keys(this.state.railsProj).map((key, i) => (
          <ParallaxLayer
            className={`${styles.projectCard}`}
            offset={9.5 + i} 
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
          <PersonalProjCard
            className={`${styles.projectCard} ${styles.parallax}`}
            key={key}
            name={this.state.railsProj[key]}
            techStack={this.state.railsProj[key]}
            desc={this.state.railsProj[key]}
            link={this.state.railsProj[key]}
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

