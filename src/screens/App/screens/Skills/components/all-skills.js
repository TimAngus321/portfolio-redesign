import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'

const AllSkills = () => {

const [skills] = useState([
   { skill: "React.js" },
   { skill: "javascript" },
   { skill: "Ruby" },
   { skill: "Rails" },
   { skill: "PostgreSQL" },
   { skill: "Redux" },
   { skill: "HTML" },
   { skill: "SCSS" },
   { skill: "CSS" },
   { skill: "SQL" },
   { skill: "Git" },
   { skill: "Github" },
   { skill: "Heroku" },
   { skill: "Liquid" },
   { skill: "Shopify" },
   { skill: "APIs" },
   { skill: "Figma" },
   { skill: "Postman" },
   { skill: "InVision" },
   { skill: "Node.js" },
   { skill: "AWS" },
   { skill: "Lambda" },
   { skill: "Wordpress" },
   { skill: "German (B1)" },
   { skill: "Presenting" },
   { skill: "Teaching" },
   { skill: "Managing" },
   { skill: "Research" },
   { skill: "Copywriting" },
   { skill: "Musician" }
     ]);


//   const skills = ["React.js", "Javascript", "Ruby", "Ruby on Rails", "PostgreSQL", "Redux", "HTML", "SCSS", "CSS", "SQL", "Git", "Github", "Heroku ", "Liquid", "Shopify", "APIs", "Figma", "Postman", "Node.js", "AWS Lambda", "Wordpress", "German (B1)", "Presenting", "Teaching", "Managing", "Research", "Copywriting", "Musician" ]

const [index, setIndex] = useState(0)
  const fallingSkills = useTransition(skills[index], item => item.id, {
    from: { opacity: 0, transform: 'translate3d(0,-100%,0) rotate(-90deg)'},
    enter: { opacity: 1, transform: 'translate3d(0, 0%,0)' },
    leave: { opacity: 0, transform: 'translate3d(0, 100%,0)' },
    config: { tension: 220, friction: 120, duration: 2000 },
  })

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((state) => (state + 1) % skills.length);
    }, 4000);
    return () => clearInterval(interval);
}, []);


  return (
    <div style={{width: '100%', height: '100%'}}>
    {fallingSkills.map(({ item, props, key }) => (
      <animated.div
        key={key}
        style={{ ...props, width: '100%', height: '100%'}}
      >
        <p className='falling-skills'>
          {item.skill}
        </p>
      </animated.div>
    ))}
    </div>
  )

}

export default AllSkills;