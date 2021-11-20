import React, {useState} from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.scss";
import WorkExpCard from './workExpCard';
import PersonalProjCard from "./personalProjCard";
import railsProjects from '../rails-projects-data';
import reactProjects from '../react-projects-data';
import previousClients from '../work-project-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import shopifyLogo from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/screens/App/screens/Skills/images/Shopify-Logo.png'



const Work = () => {

  const [workExperience] = useState(previousClients);
  const [reactProj] = useState(reactProjects);
  const [railsProj] = useState(railsProjects)


    const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className="page-container-scroll-work">
      <div className="work-container">

        <Parallax 
        pages={12}
        innerStyle={{ zIndex: '1'}}
        style={{
          display: 'flex',
          height: '100%'
        }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="work-title"
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
          <div className={styles.scrollText}>
            <p >Previous Work & Personal Projects</p>
          <FontAwesomeIcon 
          className="work-page-arrow" 
          icon={faArrowDown} 
          />
          </div>

          </ParallaxLayer>

          <ParallaxLayer
            factor={0.5}
            sticky={{ start: 1, end: 5}}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.stickyCard } ${styles.sticky}`}>
              <p>Shopify Development</p>
              <img src={shopifyLogo} alt="Shopify Logo" className="sicky-card-image" />
            </div>
          </ParallaxLayer>

          {Object.keys(workExperience).map((key, i) => (

          <ParallaxLayer
            className={`${styles.projectCard} ${styles.parallax}`}
            offset={1.5 + i} 
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
            
          >
            <WorkExpCard
            key={key}
            client={workExperience[key]}
            company={workExperience[key]}
            project={workExperience[key]}
            desc={workExperience[key]}
            link={workExperience[key]}
            >
              
            </WorkExpCard>
          </ParallaxLayer>
          ))}

   
       
          <ParallaxLayer
            sticky={{ start: 6, end: 8}}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.stickyCard} ${styles.sticky}`}
                 >
              <p>React Apps</p>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" className="sicky-card-image" />
            </div>
          </ParallaxLayer>

          {Object.keys(reactProj).map((key, i) => (
          <ParallaxLayer
            className={`${styles.projectCard} ${styles.parallax}`}
            offset={6.5 + i} 
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end"}}
          >
          <PersonalProjCard
            className={`${styles.projectCard} ${styles.parallax}`}
            key={key}
            name={reactProj[key]}
            techStack={reactProj[key]}
            desc={reactProj[key]}
            link={reactProj[key]}
            >
          </PersonalProjCard>
           
            </ParallaxLayer>
            ))}

            <ParallaxLayer
             className="rails-group"
            sticky={{ start: 9, end: 11}}
            style={{ ...alignCenter, justifyContent: "flex-start"}}
          >
            <div className={`${styles.stickyCard} ${styles.sticky}`}
            >
              <p>Rails Apps</p>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt="Rails Logo" className="sicky-card-image" />

            </div>
          </ParallaxLayer>

            {Object.keys(railsProj).map((key, i) => (
          <ParallaxLayer
            className={`${styles.projectCard} ${styles.parallax}`}
            offset={9.5 + i} 
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end"}}
          >
          <PersonalProjCard
            key={key}
            name={railsProj[key]}
            techStack={railsProj[key]}
            desc={railsProj[key]}
            link={railsProj[key]}
            >
          </PersonalProjCard>
           
            </ParallaxLayer>
            ))}
           
        </Parallax>

       
     </div>
     </div>
    );
};

export default Work;
