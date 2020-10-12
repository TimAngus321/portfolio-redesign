import React from 'react';
import { gsap } from 'react-gsap';

const skillSets = {
    frontend: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs"],
    backend: ["Ruby on Rails", "PostgreSQL", "Ruby", "SQL"],
    fullstack: ["React.js", "Javascript", "HTML", "SCSS", "CSS", "APIs","Ruby on Rails", "PostgreSQL", "Ruby", "SQL" ],
    eccomerce: ["Shopify", "Liquid", "Node.js", "AWS", "Lambda"],
    mobile: ["React Navtive", "HTML", "SCSS"],
    softskills: ["German(B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician"]
    
  } 


const AboutSkills = () => {
  const [selected, seSelected] = useState(skillSets.frontend)  
  let list = useRef([]);
  let fadeOutTween;
  let fadeInTween;
};

export default AboutSkills;