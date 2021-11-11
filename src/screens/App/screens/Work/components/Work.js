import React, {useState} from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import WorkExpCard from './workExpCard';
import railsProjects from '../rails-projects-data';
import reactProjects from '../react-projects-data';
import previousClients from '../work-project-data';


class Work extends React.Component {

  state = {
    workExperience: previousClients,
    offsetIncrease: 1.5,
  };


  render() {

    const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className="page-container-scroll-work">
      <div className="work-container">

        <Parallax 
        pages={7}
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
            sticky={{ start: 1, end: 7 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.card} ${styles.sticky}`}>
              <p>Shopify Clients</p>
            </div>
          </ParallaxLayer>

          {Object.keys(this.state.workExperience).map((key, i) => (

          <ParallaxLayer
            offset={1.5 + i} 
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <div 
              key={key}
              className={`${styles.card} ${styles.parallax} ${styles.purple}`}
            >

            {/* ToDO use a workExpCard component */}
            {/* <WorkExpCard
            key={key}>
              <p>{key}</p>
            </WorkExpCard> */}
              <h3 className="client">{previousClients[key].client}</h3> 
              <h3 className="company">{previousClients[key].company}</h3>
              <h4 className="project">{previousClients[key].project}</h4>
              <p className="desc">{previousClients[key].desc}</p>
              <a href={previousClients[key].link} className="link">
              {previousClients[key].company}
              </a>
             </div>
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
