import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'react-gsap';
import { gsap } from 'gsap/all';

const skillSets = {
    frontend: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs"],
    backend: ["Ruby on Rails", "PostgreSQL", "Ruby", "SQL"],
    fullstack: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs","Ruby on Rails", "PostgreSQL", "Ruby", "SQL" ],
    eccomerce: ["Shopify", "Liquid", "Node.js", "AWS", "Lambda"],
    mobile: ["React Navtive", "HTML", "SCSS"],
    softskills: ["German(B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician"]
    
  } 


const AboutSkills = () => {
  const [selected, setSelected] = useState(skillSets.frontend)  
  let list = useRef([]);
  let allFadeIn;
  let allFadeOut;

  useEffect(() => {
    allFadeIn = gsap.from(list.current, {
      duration: 0.2,
      autoAlpha: 0
    }); 
  }, []);

  function fadeInNewSkills(item) {
    allFadeIn = null;
    setSelected(item);
    allFadeOut = gsap.fromTo(list.current, {
      autoAlpha: 0
    }, { 
      duration: 0.2, 
      autoAlpha: 1,  
      onComplete: () => allFadeOut = null });
  }

  const updateSelected = (item) => {
    if(allFadeIn) {
      allFadeIn.eventCallback("onComplete", () => fadeInNewSkills(item));
    } else if(allFadeOut) {
      allFadeOut.reverse().eventCallback("onReverseComplete", () => fadeInNewSkills(item));
    } else {
      allFadeIn = gsap.to(list.current, { 
        duration: 0.2, 
        autoAlpha: 0, 
          onComplete: () => fadeInNewSkills(item)});
    }
  }

  return (
    <div className="select-skills-container">
      <button onClick={() => updateSelected(skillSets.frontend)}
        onMouseOver={() => updateSelected(skillSets.frontend)}
      >Frontend</button>
       <p onClick={() => updateSelected(skillSets.backend)}
        onMouseOver={() => updateSelected(skillSets.backend)}
      >Backend</p>
       <p onClick={() => updateSelected(skillSets.fullstack)}
        onMouseOver={() => updateSelected(skillSets.fullstack)}
      >Full-Stack</p>
      <div>
        {selected.map((item, i) => (
          <div ref={e => (list.current[i] = e)}>{item}</div>
        ))}
      </div>
    </div>
  )
};

export default AboutSkills;