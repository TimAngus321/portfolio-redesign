import React from 'react';
import { Timeline, Tween, SplitWords } from 'react-gsap';




const AllTheSkills = () => {

    // this.mySkills = [
    //    { skill: "React.js" },
    //    { skill: "javascript" },
    //    { skill: "Ruby" },
    //    { skill: "Rails" },
    //    { skill: "PostgreSQL" },
    //    { skill: "Redux" },
    //    { skill: "HTML" },
    //    { skill: "SCSS" },
    //    { skill: "CSS" },
    //    { skill: "SQL" },
    //    { skill: "Git" },
    //    { skill: "Github" },
    //    { skill: "Heroku" },
    //    { skill: "Liquid" },
    //    { skill: "Shopify" },
    //    { skill: "APIs" },
    //    { skill: "Figma" },
    //    { skill: "Postman" },
    //    { skill: "InVision" },
    //    { skill: "Node.js" },
    //    { skill: "AWS" },
    //    { skill: "Lambda" },
    //    { skill: "Wordpress" },
    //    { skill: "German (B1)" },
    //    { skill: "Presenting" },
    //    { skill: "Teaching" },
    //    { skill: "Managing" },
    //    { skill: "Research" },
    //    { skill: "Copywriting" },
    //    { skill: "Musician" }
    // ];

    return (
        <div className="animated-skills-container">
        <Timeline
        target={
          <React.Fragment>
            <SplitWords
                wrapper={<div
                style={{ 
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    fontSize: '15px',
                    height: '100%',
                    width: '15px',
                    transform: 'rotate(90deg)', 
                    transformOrigin: '100px -20% 0' }} />}
            >
            React.js javascript Ruby Rails PostgreSQL
            Redux HTML SCSS CSS SQL Git Github Heroku
            Liquid Shopify APIs Figma Postman Node.js
            AWS Lambda Wordpress German(B1) Presenting
            Teaching Managing Research Copywriting Musician
            </SplitWords>
          </React.Fragment>
        }
      >
        <Tween 
        from={{ y: '0px' }}
        to={{ y: '115%', stagger: {
        each: 0.7,
        from: "random",
        repeat: -1 
      } }} 
        duration={5} 
        opacity={0.2}   
        />
        {/* <Tween
        from={{ y: '0px' }} 
        to={{ y: '100%', stagger: {
        each: 0.7,
        from: "random",
        repeat: -1 
      } }} position="random" duration={3} target={3} />
        <Tween
        from={{ y: '0px' }} 
        to={{ y: '100%', stagger: {
        each: 0.7,
        from: "random",
        repeat: -1 
      } }} position="random" duration={3} target={5} /> */}
      </Timeline>
      </div>
    ) 
}

export default AllTheSkills;